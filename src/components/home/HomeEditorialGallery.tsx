import { homeGalleryShots } from "@/lib/content/homeGallery";
import { EditorialGallery } from "./EditorialGallery";

/**
 * 首页画廊 — Bret Curry 大图节奏；作品文件夹页另用紧凑多列。
 */
export function HomeEditorialGallery() {
  return (
    <EditorialGallery
      shots={homeGalleryShots}
      priority
      preserveAspect
    />
  );
}
