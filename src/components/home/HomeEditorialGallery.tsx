import { homeGalleryShots } from "@/lib/content/homeGallery";
import { EditorialGallery } from "./EditorialGallery";

/**
 * 首页画廊 — 与 `EditorialGallery` 相同节奏；双竖图与横幅同宽。
 */
export function HomeEditorialGallery() {
  return <EditorialGallery shots={homeGalleryShots} priority />;
}
