import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioShotGrid } from "@/components/portfolio/PortfolioShotGrid";
import {
  getPortfolioFolder,
  portfolioFolders,
} from "@/lib/content/portfolioFolders";
import { isLocale, type Locale, withLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { locales } from "@/i18n/config";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    portfolioFolders.map((f) => ({ locale, slug: f.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = getDictionary(locale);
  const folder = getPortfolioFolder(slug);
  if (!folder) return { title: dict.portfolio.eyebrow };
  const copy = dict.portfolio.folders[folder.slug];
  return {
    title: copy.title,
    description: `${copy.title} — ${copy.subtitle}`,
  };
}

export default async function PortfolioFolderPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const folder = getPortfolioFolder(slug);
  if (!folder) notFound();

  const copy = dict.portfolio.folders[folder.slug];

  return (
    <div className="bg-canvas">
      <header className="border-b border-line px-6 py-10 md:px-10 md:py-14 lg:px-14">
        <Link
          href={withLocale("/portfolio", locale)}
          className="text-[10px] font-medium uppercase tracking-[0.35em] text-ink/40 transition-colors hover:text-ink/70"
        >
          {dict.portfolio.back}
        </Link>
        <h1 className="mt-6 text-[clamp(1.75rem,4vw,3rem)] font-normal uppercase tracking-[0.08em] text-ink">
          {copy.title}
        </h1>
        <p className="mt-3 text-[12px] font-normal uppercase tracking-[0.28em] text-ink/45">
          {copy.subtitle}
        </p>
      </header>

      <PortfolioShotGrid shots={folder.shots} />
    </div>
  );
}
