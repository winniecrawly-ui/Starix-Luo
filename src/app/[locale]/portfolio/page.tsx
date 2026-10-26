import type { Metadata } from "next";
import { PortfolioFolders } from "@/components/portfolio/PortfolioFolders";
import { portfolioFolders } from "@/lib/content/portfolioFolders";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.portfolio.eyebrow,
    description: dict.portfolio.intro,
  };
}

export default async function PortfolioPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = getDictionary(locale);

  const folders = portfolioFolders.map((folder) => ({
    ...folder,
    title: dict.portfolio.folders[folder.slug].title,
    subtitle: dict.portfolio.folders[folder.slug].subtitle,
  }));

  return (
    <PortfolioFolders
      folders={folders}
      locale={locale}
      labels={{
        eyebrow: dict.portfolio.eyebrow,
        title: dict.portfolio.title,
        intro: dict.portfolio.intro,
        folder: dict.portfolio.folder,
        open: dict.portfolio.open,
      }}
    />
  );
}
