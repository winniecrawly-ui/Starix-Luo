import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ locale: string }> };

const selfie = {
  src: "/images/about/selfie.jpg",
  width: 2200,
  height: 1457,
  alt: "Starix Luo — Pan 100 film portrait",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.about.name,
    description: dict.about.bio[0],
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="relative min-h-[calc(100dvh-8rem)] md:min-h-dvh">
      <div className="grid md:min-h-dvh md:grid-cols-12 md:items-stretch">
        <FadeIn className="relative md:col-span-7">
          <div className="relative aspect-[3/2] overflow-hidden bg-ash md:aspect-auto md:h-full md:min-h-[70dvh]">
            <Image
              src={selfie.src}
              alt={selfie.alt}
              fill
              priority
              className="object-cover object-[42%_center]"
              sizes="(min-width: 768px) 58vw, 100vw"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
              }}
            />
            <p className="absolute bottom-4 left-4 text-[10px] font-medium uppercase tracking-[0.32em] text-surface/70 md:bottom-6 md:left-6">
              Pan 100
            </p>
          </div>
        </FadeIn>

        <div className="relative flex flex-col justify-center border-t border-line px-6 py-14 md:col-span-5 md:border-l md:border-t-0 md:px-10 md:py-16 lg:px-12 lg:py-20">
          <FadeIn delay={0.08}>
            <p className="text-[10px] font-medium uppercase tracking-[0.38em] text-ink/40">
              {dict.nav.about}
            </p>
            <h1 className="mt-6 text-[clamp(2.4rem,5vw,3.75rem)] font-normal leading-[0.95] tracking-[-0.04em] text-ink">
              {dict.about.name}
            </h1>
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.28em] text-ink/40">
              Shenzhen
            </p>
          </FadeIn>

          <FadeIn delay={0.14} className="mt-12 space-y-7 md:mt-14">
            {dict.about.bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-[36ch] text-[15px] font-normal leading-[1.85] text-ink/65 md:text-[16px] md:leading-[1.9]"
              >
                {paragraph}
              </p>
            ))}
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
