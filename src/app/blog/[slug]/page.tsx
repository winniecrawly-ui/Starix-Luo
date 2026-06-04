import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/content/blog";
import { FadeIn } from "@/components/motion/FadeIn";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const bodyParagraphs: Record<string, string[]> = {
  "why-small-cameras-matter": [
    "Small cameras change how close you allow yourself to be. They change what you dare to photograph — not because of image quality, but because of social friction.",
    "When the tool disappears, behavior becomes honest. Honest behavior is where narrative begins.",
    "This is not an argument against large formats. It is a reminder that story is born from proximity, timing and empathy — and sometimes a smaller box helps you get there.",
  ],
  "inside-ibc2025": [
    "A trade show is a machine built to capture attention. The best booths do not shout; they choreograph silence and rhythm.",
    "Walking IBC is studying how brands translate engineering into feeling — sometimes successfully, sometimes not.",
    "These notes are not a report. They are a sketchbook of what lasted after the noise turned off.",
  ],
  "emotion-of-leica-rendering": [
    "Rendering is often discussed like a spreadsheet. In practice, it is memory: what highlights are allowed to bloom, where shadows fall apart, how skin meets ambient light.",
    "Leica rendering, to me, is less about 'look' and more about restraint — a refusal to over-clarify reality.",
    "If a photograph is a sentence, rendering is punctuation. It changes how you breathe at the end.",
  ],
  "cinema-lenses-narrative": [
    "A lens is an ethical choice. Compression flatters; wide angles insist. Close focus invites intimacy — sometimes intimacy you have not earned yet.",
    "Cinema lenses shape blocking, performance and even writing. They are not accessories; they are collaborators.",
    "Choosing glass is choosing how the audience is allowed to stand in the room.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs =
    bodyParagraphs[slug] ?? [
      "This journal entry is a placeholder for CMS-driven long-form content.",
      "Wire your Markdown / Sanity / Contentful model here and keep the layout unchanged.",
    ];

  return (
    <article className="border-t border-line px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[900px] pb-16">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex text-[10px] font-normal uppercase tracking-[0.32em] text-ink/40 transition-colors hover:text-ink/70"
          >
            ← Blog
          </Link>
          <p className="mt-10 text-[10px] font-normal uppercase tracking-[0.32em] text-ink/40">
            {post.category} — {post.date}
          </p>
          <h1 className="mt-4 text-pretty text-4xl font-normal tracking-[-0.03em] text-ink md:text-6xl">
            {post.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="relative mt-12 aspect-[16/10] w-full overflow-hidden bg-ash">
            <Image
              src={post.thumbnail}
              alt={post.thumbnailAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 900px) 900px, 100vw"
            />
          </div>
        </FadeIn>

        <div className="mt-14 max-w-none">
          {paragraphs.map((p, idx) => (
            <FadeIn key={idx}>
              <p className="mb-10 text-pretty text-lg font-normal leading-[1.85] text-ink/70 md:text-xl">
                {p}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </article>
  );
}
