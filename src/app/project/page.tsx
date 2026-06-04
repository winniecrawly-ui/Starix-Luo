import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projectCases } from "@/lib/content/projects";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Project",
  description:
    "Brand campaigns, launches and creative direction by Starix Luo — case studies in narrative and GTM.",
};

export default function ProjectIndexPage() {
  return (
    <div className="border-t border-line px-5 py-12 md:px-10 md:py-16">
      <header className="mx-auto max-w-[1400px]">
        <FadeIn>
          <p className="text-[10px] font-normal uppercase tracking-[0.35em] text-ink/40">
            Project
          </p>
          <h1 className="mt-4 text-display-sm font-normal tracking-[-0.03em] text-ink md:text-display">
            Brand narrative{" "}
            <span className="text-ink/40">meets execution.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-base font-normal leading-relaxed text-ink/60 md:text-lg">
            Creative marketing, exhibitions and launches — structured like agency
            case studies with Apple-quiet pacing.
          </p>
        </FadeIn>
      </header>

      <div className="mx-auto mt-16 max-w-[1400px] space-y-16 md:mt-24">
        {projectCases.map((project, i) => (
          <FadeIn key={project.slug} delay={0.06 * i}>
            <Link
              href={`/project/${project.slug}`}
              className="group grid gap-8 border-t border-line pt-12 md:grid-cols-12 md:items-center md:gap-10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ash md:col-span-7">
                <Image
                  src={project.heroImage}
                  alt={project.heroAlt}
                  fill
                  className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 55vw, 100vw"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-ink/15 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <p className="text-[10px] font-normal uppercase tracking-[0.32em] text-ink/40">
                  {project.category} — {project.year}
                </p>
                <h2 className="mt-4 text-2xl font-normal tracking-[-0.02em] text-ink md:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-4 text-sm font-normal leading-relaxed text-ink/55">
                  {project.background}
                </p>
                <p className="mt-8 text-[10px] font-normal uppercase tracking-[0.35em] text-ink/40 transition-colors duration-500 group-hover:text-ink/60">
                  Open case study
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
