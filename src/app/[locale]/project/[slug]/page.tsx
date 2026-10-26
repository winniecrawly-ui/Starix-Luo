import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectMagazineSpread } from "@/components/project/ProjectMagazineSpread";
import { isLocale, type Locale, withLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getProject, getProjects } from "@/i18n/content/projects";
import { getProjectImages } from "@/lib/content/projectImages";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProjects("en").map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const project = getProject(locale, slug);
  if (!project) return {};
  return {
    title: `${project.title}: ${project.subtitle}`,
    description: project.headline,
  };
}

export default async function ProjectCasePage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const project = getProject(locale, slug);
  if (!project) notFound();

  const images = await getProjectImages(project.slug);
  const hero = images[0] ?? null;
  const extras = images.slice(1);

  return (
    <ProjectMagazineSpread
      project={project}
      hero={hero}
      extras={extras}
      backHref={withLocale("/project", locale)}
      labels={{
        back: dict.project.back,
        date: dict.project.date,
        sittingWith: dict.project.sittingWith,
        wordsBy: dict.project.wordsBy,
        share: dict.project.share,
      }}
    />
  );
}
