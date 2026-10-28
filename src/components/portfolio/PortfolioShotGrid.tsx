import Image from "next/image";
import type { EditorialShot } from "@/components/home/EditorialGallery";

/**
 * Portfolio 文件夹画廊 — 比首页更密：2 / 3 / 4 列瀑布流，图更小。
 */
export function PortfolioShotGrid({ shots }: { shots: EditorialShot[] }) {
  return (
    <div className="mx-auto w-full max-w-[68rem] px-4 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14">
      <div className="columns-2 gap-2.5 sm:columns-3 sm:gap-3 lg:columns-4 lg:gap-3.5">
        {shots.map((shot, index) => (
          <figure
            key={shot.id}
            className="mb-2.5 break-inside-avoid sm:mb-3 lg:mb-3.5"
          >
            <div className="overflow-hidden bg-ash">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 28vw, 46vw"
                priority={index < 2}
                quality={75}
                loading={index < 2 ? undefined : "lazy"}
                className="h-auto w-full transition-opacity duration-500"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
