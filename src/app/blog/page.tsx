import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Journal — essays and field notes on image, cinema and brands.",
};

export default function BlogPage() {
  return (
    <div className="bg-canvas p-3 md:p-5 lg:p-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-ash">
              <Image
                src={post.thumbnail}
                alt={post.thumbnailAlt}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                sizes="(min-width: 640px) 50vw, 100vw"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/15 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 lg:p-6">
                <p
                  className="max-w-[95%] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-pollen"
                  style={{
                    fontSize: "clamp(1.35rem, 3.8vw, 2.75rem)",
                    textShadow: "0 2px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  {post.coverTheme}
                </p>
                <p className="mt-2 max-w-full truncate text-[10px] font-medium uppercase tracking-[0.2em] text-surface/85 md:mt-2.5">
                  {post.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
