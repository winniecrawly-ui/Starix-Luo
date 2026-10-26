import { readdir, stat } from "fs/promises";
import path from "path";
import sharp from "sharp";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

export type ProjectImage = {
  src: string;
  alt: string;
  file: string;
  width: number;
  height: number;
  /** true when width >= height */
  landscape: boolean;
};

/**
 * Reads `public/images/project/{slug}/` at request/build time.
 * Prefer `cover.*` as hero. Cache-busts via file mtime so replacements show up.
 */
export async function getProjectImages(slug: string): Promise<ProjectImage[]> {
  const dir = path.join(process.cwd(), "public", "images", "project", slug);

  let files: string[];
  try {
    files = await readdir(dir);
  } catch {
    return [];
  }

  const candidates = files
    .filter((file) => IMAGE_EXT.test(file) && !file.startsWith("."))
    .sort((a, b) => {
      const aCover = /^cover\./i.test(a) ? 0 : 1;
      const bCover = /^cover\./i.test(b) ? 0 : 1;
      if (aCover !== bCover) return aCover - bCover;
      return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
    });

  const images: ProjectImage[] = [];

  for (const file of candidates) {
    const abs = path.join(dir, file);
    try {
      const [meta, fileStat] = await Promise.all([
        sharp(abs).metadata(),
        stat(abs),
      ]);
      const width = meta.width ?? 2400;
      const height = meta.height ?? 1600;
      const v = Math.floor(fileStat.mtimeMs);
      images.push({
        file,
        src: `/images/project/${slug}/${encodeURIComponent(file)}?v=${v}`,
        alt: file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
        width,
        height,
        landscape: width >= height,
      });
    } catch {
      // skip unreadable files
    }
  }

  return images;
}

export async function getProjectHero(slug: string): Promise<ProjectImage | null> {
  const images = await getProjectImages(slug);
  return images[0] ?? null;
}
