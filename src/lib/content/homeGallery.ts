/**
 * Home gallery — Bret Curry rhythm (banner / twin / banner); 全站以 CSS 黑白胶片调呈现。
 * 使用 Unsplash 直链，避免线上未带上 `public/home-demo` 时仍显示旧图。
 * `width` / `height` 须与裁切参数一致，版面按比例自适应。
 */
const UNSPLASH = "https://images.unsplash.com" as const;

export type HomeGalleryShot = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** `v` 仅用于换图后绕过 CDN/浏览器缓存 */
const v = "bw-home-banner-20260215";

export const homeGalleryShots: HomeGalleryShot[] = [
  {
    id: "h1",
    src: `${UNSPLASH}/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&h=640&q=82&v=${v}`,
    alt: "Black-and-white film — trees and light, wide",
    width: 2400,
    height: 640,
  },
  {
    id: "h2",
    src: `${UNSPLASH}/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&h=2133&q=82&v=${v}`,
    alt: "Black-and-white film — forest road, vertical",
    width: 1600,
    height: 2133,
  },
  {
    id: "h3",
    src: `${UNSPLASH}/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&h=2133&q=82&v=${v}`,
    alt: "Black-and-white film — mountain range, vertical",
    width: 1600,
    height: 2133,
  },
  {
    id: "h4",
    src: `${UNSPLASH}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&h=1020&q=82&v=${v}`,
    alt: "Black-and-white film — misty peaks, wide",
    width: 2400,
    height: 1020,
  },
];
