import type { Metadata } from "next";
import { HomeEditorialGallery } from "@/components/home/HomeEditorialGallery";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.home.title,
    description: dict.home.description,
  };
}

export default function HomePage() {
  return <HomeEditorialGallery />;
}
