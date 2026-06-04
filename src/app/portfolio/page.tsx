import type { Metadata } from "next";
import { EditorialGallery } from "@/components/home/EditorialGallery";
import { masonryPhotos } from "@/lib/content/photographyWall";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio — selected stills by Starix Luo.",
};

/** 作品数据常改，避免构建时静态快照长期不更新 */
export const dynamic = "force-dynamic";

export default function PortfolioPage() {
  return (
    <EditorialGallery
      shots={masonryPhotos}
      twinRowWrapperClassName="mx-auto w-full max-w-[min(100%,70rem)]"
    />
  );
}
