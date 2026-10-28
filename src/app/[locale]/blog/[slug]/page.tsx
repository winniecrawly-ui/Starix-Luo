import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";
import { isLocale, type Locale, withLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  getBlogPost,
  getBlogPosts,
  type BlogBlock,
  type BlogFigure,
} from "@/i18n/content/blog";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getBlogPosts("en").map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const post = getBlogPost(locale, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function BlogFigureView({
  figure,
  sizes,
  priority,
  constrainPortrait,
}: {
  figure: BlogFigure;
  sizes: string;
  priority?: boolean;
  constrainPortrait?: boolean;
}) {
  const portrait = figure.height > figure.width;
  return (
    <figure
      className={
        constrainPortrait && portrait
          ? "mx-auto w-full max-w-[26rem] md:max-w-[30rem]"
          : "w-full"
      }
    >
      <div
        className="relative w-full overflow-hidden bg-ash"
        style={{ aspectRatio: `${figure.width} / ${figure.height}` }}
      >
        <Image
          src={figure.src}
          alt={figure.alt}
          fill
          priority={priority}
          quality={80}
          className="object-cover object-center"
          sizes={sizes}
        />
        {figure.label ? (
          <span className="absolute left-3 top-3 bg-canvas/85 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-ink/70 backdrop-blur-sm">
            {figure.label}
          </span>
        ) : null}
      </div>
      {figure.caption ? (
        <figcaption className="mt-3 text-[12px] font-normal leading-relaxed tracking-[0.02em] text-ink/45 md:text-[13px]">
          {figure.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function BlogBlockView({ block, index }: { block: BlogBlock; index: number }) {
  if (block.type === "p") {
    return (
      <FadeIn>
        <p className="mb-10 text-pretty text-lg font-normal leading-[1.85] text-ink/70 md:text-xl">
          {block.text}
        </p>
      </FadeIn>
    );
  }

  if (block.type === "figure") {
    return (
      <FadeIn delay={0.04}>
        <div className="mb-12 md:mb-14">
          <BlogFigureView
            figure={block.figure}
            sizes="(min-width: 900px) 900px, 100vw"
            priority={index < 2}
            constrainPortrait
          />
        </div>
      </FadeIn>
    );
  }

  if (block.type === "pair") {
    return (
      <FadeIn delay={0.04}>
        <div className="mb-12 grid gap-4 sm:grid-cols-2 sm:gap-5 md:mb-14">
          {block.figures.map((figure) => (
            <BlogFigureView
              key={figure.src}
              figure={figure}
              sizes="(min-width: 640px) 45vw, 100vw"
            />
          ))}
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={0.04}>
      <div className="mb-12 grid gap-3 sm:grid-cols-3 sm:gap-4 md:mb-14">
        {block.figures.map((figure) => (
          <BlogFigureView
            key={figure.src}
            figure={figure}
            sizes="(min-width: 640px) 30vw, 100vw"
          />
        ))}
      </div>
    </FadeIn>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  const heroPortrait = post.thumbnailHeight > post.thumbnailWidth;

  return (
    <article className="border-t border-line px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[900px] pb-16">
        <FadeIn>
          <Link
            href={withLocale("/blog", locale)}
            className="inline-flex text-[10px] font-normal uppercase tracking-[0.32em] text-ink/40 transition-colors hover:text-ink/70"
          >
            {dict.blog.back}
          </Link>
          <p className="mt-10 text-[10px] font-normal uppercase tracking-[0.32em] text-ink/40">
            {post.category} — {post.date}
          </p>
          <h1 className="mt-4 text-pretty text-4xl font-normal tracking-[-0.03em] text-ink md:text-6xl">
            {post.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div
            className={
              heroPortrait
                ? "relative mx-auto mt-12 w-full max-w-[28rem] overflow-hidden bg-ash md:max-w-[32rem]"
                : "relative mt-12 w-full overflow-hidden bg-ash"
            }
            style={{
              aspectRatio: `${post.thumbnailWidth} / ${post.thumbnailHeight}`,
            }}
          >
            <Image
              src={post.thumbnail}
              alt={post.thumbnailAlt}
              fill
              priority
              quality={80}
              className="object-cover object-center"
              sizes="(min-width: 900px) 900px, 100vw"
            />
          </div>
        </FadeIn>

        <div className="mt-14 max-w-none">
          {post.content.map((block, idx) => (
            <BlogBlockView key={`${post.slug}-${idx}`} block={block} index={idx} />
          ))}
        </div>
      </div>
    </article>
  );
}
