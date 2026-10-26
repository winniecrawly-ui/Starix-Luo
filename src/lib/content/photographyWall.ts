/**
 * Portfolio 作品墙数据 — 用于 `/portfolio` 与旧链接重定向；每条对应实际上传或外链图的像素尺寸。
 */
export type MasonryPhoto = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Portfolio 作品墙 — `EditorialGallery` 中第 1、4、5、8… 张为全宽横幅，宜用横图（如 2400×640）；
 * 第 2–3、6–7… 张为双列竖图。
 */
const BANNER_W = 2400;
const BANNER_H = 640;
const v = "pf-banner-wide-20260215";

function bannerSrc(photoId: string, unsplashPath: string) {
  return `https://images.unsplash.com/${unsplashPath}?auto=format&fit=crop&w=${BANNER_W}&h=${BANNER_H}&q=82&v=${v}-${photoId}`;
}

export const masonryPhotos: MasonryPhoto[] = [
  {
    id: "m1",
    width: BANNER_W,
    height: BANNER_H,
    src: bannerSrc("m1", "photo-1519681393784-d120267933ba"),
    alt: "Stars",
  },
  { id: "m2", width: 1200, height: 1600, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80", alt: "Mountains" },
  { id: "m3", width: 1600, height: 1200, src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80", alt: "Ocean" },
  {
    id: "m4",
    width: BANNER_W,
    height: BANNER_H,
    src: bannerSrc("m4", "photo-1500534314209-a25ddb2bd429"),
    alt: "Fog",
  },
  { id: "m5", width: 1920, height: 1200, src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80", alt: "Lake" },
  { id: "m6", width: 1200, height: 1600, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80", alt: "Peaks" },
  { id: "m7", width: 1400, height: 1400, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80", alt: "Beach" },
  { id: "m8", width: 2100, height: 900, src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2100&q=80", alt: "Sunset" },
  { id: "m9", width: BANNER_W, height: BANNER_H, src: bannerSrc("m9", "photo-1469474968028-56623f02e42e"), alt: "Valley" },
  { id: "m10", width: 1200, height: 1500, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80", alt: "Woods" },
  { id: "m11", width: 1600, height: 1200, src: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1600&q=80", alt: "Field" },
  { id: "m12", width: BANNER_W, height: BANNER_H, src: bannerSrc("m12", "photo-1493246507139-91e8fad9978e"), alt: "Lake shore" },
  { id: "m13", width: 1600, height: 1280, src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1600&q=80", alt: "Meadow" },
  { id: "m14", width: 1000, height: 1500, src: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&w=1000&q=80", alt: "Hills" },
  { id: "m15", width: 1920, height: 1080, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80", alt: "Summit" },
  { id: "m16", width: 1400, height: 1400, src: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1400&q=80", alt: "Coast" },
  { id: "m17", width: 1600, height: 1200, src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=80", alt: "Alps" },
  { id: "m18", width: 1200, height: 1600, src: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&w=1200&q=80", alt: "Water" },
  { id: "m19", width: 1600, height: 1100, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80", alt: "Forest" },
  { id: "m20", width: 1800, height: 1200, src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80", alt: "Mood" },
];
