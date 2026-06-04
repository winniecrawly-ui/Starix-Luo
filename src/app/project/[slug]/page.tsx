import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectCases } from "@/lib/content/projects";
import { FadeIn } from "@/components/motion/FadeIn";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectCases.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectCases.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.background,
  };
}

export default async function ProjectCasePage({ params }: Props) {
  const { slug } = await params;
  const project = projectCases.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="border-t border-line px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <Link
            href="/project"
            className="inline-flex text-[10px] font-normal uppercase tracking-[0.32em] text-ink/40 transition-colors hover:text-ink/70"
          >
            ← All projects
          </Link>
          <p className="mt-10 text-[10px] font-normal uppercase tracking-[0.32em] text-ink/40">
            {project.category} — {project.year}
          </p>
          <h1 className="mt-4 max-w-4xl text-display-sm font-normal tracking-[-0.03em] text-ink md:text-display">
            {project.title}
          </h1>
        </FadeIn>

        <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden bg-ash md:mt-20 md:aspect-[21/9]">
          <Image
            src={project.heroImage}
            alt={project.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/15" />
        </div>

        <div className="mt-16 grid gap-14 border-t border-line pt-14 md:mt-20 md:grid-cols-12 md:gap-12 md:pt-16">
          <FadeIn className="md:col-span-4">
            <p className="text-[10px] font-normal uppercase tracking-[0.32em] text-ink/40">
              Role
            </p>
            <p className="mt-4 text-lg font-normal leading-relaxed text-ink/85">
              {project.role}
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="md:col-span-7 md:col-start-6">
            <p className="text-[10px] font-normal uppercase tracking-[0.32em] text-ink/40">
              Background
            </p>
            <p className="mt-4 text-pretty text-lg font-normal leading-relaxed text-ink/70">
              {project.background}
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-12">
          <FadeIn className="md:col-span-5">
            <p className="text-[10px] font-normal uppercase tracking-[0.32em] text-ink/40">
              Scope
            </p>
            <ul className="mt-6 space-y-4 text-sm font-normal leading-relaxed text-ink/65">
              {project.responsibilities.map((item) => (
                <li key={item} className="border-b border-line pb-4">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.06} className="md:col-span-5 md:col-start-8">
            <p className="text-[10px] font-normal uppercase tracking-[0.32em] text-ink/40">
              Deliverables
            </p>
            <ul className="mt-6 space-y-4 text-sm font-normal leading-relaxed text-ink/65">
              {project.deliverables.map((item) => (
                <li key={item} className="border-b border-line pb-4">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mt-20 border-t border-line pt-14 md:mt-24 md:pt-16">
            <p className="text-[10px] font-normal uppercase tracking-[0.32em] text-ink/40">
              Outcome
            </p>
            <p className="mt-6 max-w-3xl text-pretty text-xl font-normal leading-relaxed text-ink md:text-2xl">
              {project.outcome}
            </p>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
