import type { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";

export type EditorialShot = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

function IntrinsicImage({
  item,
  sizes,
  priority,
}: {
  item: EditorialShot;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="w-full overflow-hidden bg-neutral-100">
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full max-w-full grayscale contrast-[1.08] brightness-[0.98]"
      />
    </div>
  );
}

type EditorialGalleryProps = {
  shots: EditorialShot[];
  /** 仅首张横幅请求优先加载 */
  priority?: boolean;
  /**
   * 套在「双竖图」栅格外层，用于相对横幅略收窄竖图区，让横幅在宽屏上更醒目。
   */
  twinRowWrapperClassName?: string;
};

function TwinRow({
  left,
  right,
  wrapperClassName,
}: {
  left: EditorialShot;
  right: EditorialShot;
  wrapperClassName?: string;
}) {
  const grid = (
    <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:gap-5 lg:gap-6">
      <IntrinsicImage
        item={left}
        sizes="(min-width: 1280px) 40vw, (min-width: 480px) 50vw, 100vw"
      />
      <IntrinsicImage
        item={right}
        sizes="(min-width: 1280px) 40vw, (min-width: 480px) 50vw, 100vw"
      />
    </div>
  );
  if (!wrapperClassName) return grid;
  return <div className={wrapperClassName}>{grid}</div>;
}

/**
 * Bret Curry 节奏：全宽横幅 → 两竖并列 → 全宽横幅；按 4 张一组循环，尾部不足 4 张时按顺序收尾。
 */
export function EditorialGallery({
  shots,
  priority = false,
  twinRowWrapperClassName,
}: EditorialGalleryProps) {
  const nodes: ReactNode[] = [];
  let i = 0;
  let usedPriority = false;

  const banner = (item: EditorialShot, key: string) => {
    const p = priority && !usedPriority;
    if (p) usedPriority = true;
    nodes.push(
      <IntrinsicImage
        key={key}
        item={item}
        sizes="(min-width: 1280px) 80vw, 100vw"
        priority={p}
      />,
    );
  };

  while (i < shots.length) {
    const rest = shots.length - i;
    if (rest >= 4) {
      banner(shots[i]!, `b-${shots[i]!.id}`);
      nodes.push(
        <TwinRow
          key={`t-${shots[i + 1]!.id}-${shots[i + 2]!.id}`}
          left={shots[i + 1]!}
          right={shots[i + 2]!}
          wrapperClassName={twinRowWrapperClassName}
        />,
      );
      banner(shots[i + 3]!, `b-${shots[i + 3]!.id}`);
      i += 4;
    } else if (rest === 3) {
      banner(shots[i]!, `b-${shots[i]!.id}`);
      nodes.push(
        <TwinRow
          key={`t-${shots[i + 1]!.id}-${shots[i + 2]!.id}`}
          left={shots[i + 1]!}
          right={shots[i + 2]!}
          wrapperClassName={twinRowWrapperClassName}
        />,
      );
      i += 3;
    } else if (rest === 2) {
      nodes.push(
        <TwinRow
          key={`t-${shots[i]!.id}-${shots[i + 1]!.id}`}
          left={shots[i]!}
          right={shots[i + 1]!}
          wrapperClassName={twinRowWrapperClassName}
        />,
      );
      i += 2;
    } else {
      banner(shots[i]!, `b-${shots[i]!.id}`);
      i += 1;
    }
  }

  return (
    <div
      className={clsx(
        "flex flex-col gap-3 bg-canvas p-3 md:gap-5 md:p-6 lg:gap-6 lg:p-10",
      )}
    >
      {nodes}
    </div>
  );
}
