import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { HtmlLang } from "@/components/layout/HtmlLang";
import { locales, type Locale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = getDictionary(locale);
  return {
    title: {
      default: dict.meta.titleDefault,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.titleDefault,
      description: dict.meta.description,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <div className={locale === "zh" ? "font-zh" : undefined}>
      <HtmlLang locale={locale} />
      <SmoothScroll>
        <div className="relative z-[1] flex min-h-dvh flex-col md:flex-row">
          <Sidebar locale={locale} dict={dict} />
          <div className="relative flex min-h-0 min-w-0 flex-1 flex-col">
            <div className="pointer-events-none absolute right-4 top-4 z-50 md:right-8 md:top-6">
              <div className="pointer-events-auto rounded-sm bg-canvas/80 px-2.5 py-1.5 shadow-[0_0_0_1px_rgba(17,17,17,0.06)] backdrop-blur-sm">
                <LanguageSwitcher
                  locale={locale}
                  labels={{
                    en: dict.aria.switchToEn,
                    zh: dict.aria.switchToZh,
                  }}
                />
              </div>
            </div>
            <main className="relative flex-1">{children}</main>
            <Footer name={dict.footer.rights} />
          </div>
        </div>
      </SmoothScroll>
    </div>
  );
}
