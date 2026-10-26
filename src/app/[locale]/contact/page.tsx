import type { Metadata } from "next";
import { site } from "@/lib/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.contact.title,
    description: dict.contact.description,
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col items-center justify-center gap-12 px-6 py-20 text-center md:min-h-[70vh]">
      <a
        href={`mailto:${site.email}`}
        className="text-sm font-normal tracking-[0.06em] text-ink/80 transition-opacity hover:opacity-60 md:text-base"
      >
        {site.email}
      </a>
      <a
        href={site.instagram}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-normal tracking-[0.2em] text-ink/80 transition-opacity hover:opacity-60 md:text-base"
      >
        {dict.contact.instagram}
      </a>
    </div>
  );
}
