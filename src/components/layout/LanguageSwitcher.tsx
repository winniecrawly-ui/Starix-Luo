"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  type Locale,
  stripLocale,
  withLocale,
} from "@/i18n/config";

export function LanguageSwitcher({
  locale,
  labels,
}: {
  locale: Locale;
  labels: { en: string; zh: string };
}) {
  const pathname = usePathname();
  const path = stripLocale(pathname);

  return (
    <div
      className="pointer-events-auto flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.28em]"
      role="group"
      aria-label="Language"
    >
      <Link
        href={withLocale(path, "en")}
        hrefLang="en"
        aria-label={labels.en}
        aria-current={locale === "en" ? "true" : undefined}
        className={clsx(
          "transition-opacity",
          locale === "en" ? "text-ink opacity-100" : "text-ink/35 hover:opacity-70",
        )}
        onClick={() => {
          document.cookie = `NEXT_LOCALE=en;path=/;max-age=31536000`;
        }}
      >
        EN
      </Link>
      <span className="text-ink/25" aria-hidden>
        /
      </span>
      <Link
        href={withLocale(path, "zh")}
        hrefLang="zh"
        aria-label={labels.zh}
        aria-current={locale === "zh" ? "true" : undefined}
        className={clsx(
          "transition-opacity",
          locale === "zh" ? "text-ink opacity-100" : "text-ink/35 hover:opacity-70",
        )}
        onClick={() => {
          document.cookie = `NEXT_LOCALE=zh;path=/;max-age=31536000`;
        }}
      >
        中
      </Link>
    </div>
  );
}
