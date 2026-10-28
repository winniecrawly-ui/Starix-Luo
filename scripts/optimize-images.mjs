/**
 * Resize + recompress images under public/images for web delivery.
 * Keeps original paths/filenames. Long edge capped; JPEG uses mozjpeg.
 *
 * Usage: node scripts/optimize-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/images");
const MAX_EDGE = 2560;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 80;
const MIN_BYTES_TO_TOUCH = 180 * 1024; // skip already-small files unless oversized px

const EXT = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (EXT.has(path.extname(entry.name))) out.push(full);
  }
  return out;
}

async function optimizeOne(file) {
  const before = (await fs.stat(file)).size;
  const ext = path.extname(file).toLowerCase();
  const input = sharp(file, { failOn: "none" }).rotate();
  const meta = await input.metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  const longEdge = Math.max(w, h);
  const needsResize = longEdge > MAX_EDGE;
  const needsCompress = before > MIN_BYTES_TO_TOUCH || needsResize;

  if (!needsCompress) {
    return { file, before, after: before, skipped: true };
  }

  let pipeline = sharp(file, { failOn: "none" }).rotate();
  if (needsResize) {
    pipeline = pipeline.resize({
      width: w >= h ? MAX_EDGE : undefined,
      height: h > w ? MAX_EDGE : undefined,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const tmp = `${file}.tmp-opt`;
  if (ext === ".png") {
    // Keep PNG only if it has alpha; otherwise write JPEG sibling would break URLs.
    // Re-encode PNG aggressively instead.
    await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toFile(tmp);
  } else {
    await pipeline
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, chromaSubsampling: "4:2:0" })
      .toFile(tmp);
  }

  const after = (await fs.stat(tmp)).size;
  if (after >= before * 0.98 && !needsResize) {
    await fs.unlink(tmp);
    return { file, before, after: before, skipped: true };
  }

  await fs.rename(tmp, file);
  return { file, before, after, skipped: false, resized: needsResize, w, h };
}

const files = await walk(ROOT);
let saved = 0;
let touched = 0;
for (const file of files) {
  try {
    const r = await optimizeOne(file);
    if (!r.skipped) {
      touched += 1;
      saved += r.before - r.after;
      const rel = path.relative(process.cwd(), file);
      console.log(
        `${(r.before / 1024 / 1024).toFixed(2)}MB → ${(r.after / 1024 / 1024).toFixed(2)}MB  ${rel}${r.resized ? " (resized)" : ""}`,
      );
    }
  } catch (err) {
    console.error("FAIL", file, err.message);
  }
}

console.log(
  `\nDone. Optimized ${touched}/${files.length} files, saved ${(saved / 1024 / 1024).toFixed(1)}MB`,
);
