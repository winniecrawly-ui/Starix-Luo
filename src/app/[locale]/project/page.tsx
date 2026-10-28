import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { isLocale, type Locale, withLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getProjects } from "@/i18n/content/projects";
import { getProjectHero } from "@/lib/content/projectImages";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.project.eyebrow,
    description: dict.project.intro,
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ProjectIndexPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = getDictionary(locale);
  const projects = getProjects(locale);

  const withHero = await Promise.all(
    projects.map(async (project) => ({
      project,
      hero: await getProjectHero(project.slug),
    })),
  );

  return (
    <div className="border-t border-line px-5 py-12 md:px-10 md:py-16 lg:px-14">
      <header className="mx-auto max-w-[1400px]">
        <FadeIn>
          <p className="text-[10px] font-normal uppercase tracking-[0.35em] text-ink/40">
            {dict.project.eyebrow}
          </p>
          <h1 className="mt-4 text-display-sm font-normal tracking-[-0.03em] text-ink md:text-display">
            {dict.project.title}{" "}
            <span className="text-ink/40">{dict.project.titleAccent}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-base font-normal leading-relaxed text-ink/60 md:text-lg">
            {dict.project.intro}
          </p>
        </FadeIn>
      </header>

      <div className="mx-auto mt-16 max-w-[1400px] space-y-16 md:mt-24">
        {withHero.map(({ project, hero }, i) => (
          <FadeIn key={project.slug} delay={0.06 * i}>
            <Link
              href={withLocale(`/project/${project.slug}`, locale)}
              className="group grid gap-8 border-t border-line pt-12 md:grid-cols-12 md:items-center md:gap-10"
            >
              <div
                className={
                  hero?.landscape
                    ? "relative w-full overflow-hidden bg-ash md:col-span-7"
                    : "relative w-full overflow-hidden bg-ash md:col-span-7 md:max-w-[32rem]"
                }
                style={
                  hero
                    ? { aspectRatio: `${hero.width} / ${hero.height}` }
                    : { aspectRatio: "3 / 4" }
                }
              >
                {hero ? (
                  <Image
                    src={hero.src}
                    alt={project.title}
                    fill
                    quality={75}
                    className="object-cover object-center transition-transform duration-[1100ms] ease-out group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 55vw, 100vw"
                    loading="lazy"
                  />
                ) : null}
                <div className="pointer-events-none absolute inset-0 bg-ink/15 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <p className="text-[10px] font-normal uppercase tracking-[0.32em] text-ink/40">
                  {project.category}
                  {project.year && project.year !== "—"
                    ? ` — ${project.year}`
                    : ""}
                </p>
                <h2 className="mt-4 text-2xl font-normal tracking-[-0.02em] text-ink md:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-4 text-sm font-normal leading-relaxed text-ink/55">
                  {project.subtitle}
                </p>
                <p className="mt-8 text-[10px] font-normal uppercase tracking-[0.35em] text-ink/40 transition-colors duration-500 group-hover:text-ink/60">
                  {dict.project.openCase} →
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
