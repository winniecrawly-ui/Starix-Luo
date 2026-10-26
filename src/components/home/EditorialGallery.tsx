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
  preserveAspect,
}: {
  item: EditorialShot;
  sizes: string;
  priority?: boolean;
  preserveAspect?: boolean;
}) {
  if (preserveAspect) {
    // Bret Curry：与栏宽对齐，高度随原图比例变化。
    return (
      <div
        className="relative w-full overflow-hidden bg-canvas"
        style={{ aspectRatio: `${item.width} / ${item.height}` }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-neutral-100">
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        sizes={sizes}
        priority={priority}
        quality={100}
        className="h-auto w-full max-w-full"
      />
    </div>
  );
}

type EditorialGalleryProps = {
  shots: EditorialShot[];
  priority?: boolean;
  preserveAspect?: boolean;
  twinRowWrapperClassName?: string;
  className?: string;
};

function TwinRow({
  left,
  right,
  wrapperClassName,
  preserveAspect,
}: {
  left: EditorialShot;
  right: EditorialShot;
  wrapperClassName?: string;
  preserveAspect?: boolean;
}) {
  const grid = (
    <div
      className={clsx(
        "grid grid-cols-1 items-start min-[480px]:grid-cols-2",
        preserveAspect
          ? "gap-2.5 md:gap-3 lg:gap-3.5"
          : "gap-3 md:gap-5 lg:gap-6",
      )}
    >
      <IntrinsicImage
        item={left}
        sizes="(min-width: 1280px) 40vw, (min-width: 480px) 50vw, 100vw"
        preserveAspect={preserveAspect}
      />
      <IntrinsicImage
        item={right}
        sizes="(min-width: 1280px) 40vw, (min-width: 480px) 50vw, 100vw"
        preserveAspect={preserveAspect}
      />
    </div>
  );
  if (!wrapperClassName) return grid;
  return <div className={wrapperClassName}>{grid}</div>;
}

/**
 * Bret Curry 节奏：全宽横幅 → 两竖并列 → 全宽横幅；按 4 张一组循环。
 */
export function EditorialGallery({
  shots,
  priority = false,
  preserveAspect = false,
  twinRowWrapperClassName,
  className,
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
        preserveAspect={preserveAspect}
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
          preserveAspect={preserveAspect}
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
          preserveAspect={preserveAspect}
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
          preserveAspect={preserveAspect}
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
        preserveAspect
          ? "flex flex-col gap-2.5 bg-canvas p-2.5 md:gap-3 md:p-4 lg:gap-3.5 lg:p-6"
          : "flex flex-col gap-3 bg-canvas p-3 md:gap-5 md:p-6 lg:gap-6 lg:p-10",
        className,
      )}
    >
      {nodes}
    </div>
  );
}
