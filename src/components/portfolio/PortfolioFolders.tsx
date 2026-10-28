"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PortfolioFolder } from "@/lib/content/portfolioFolders";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/config";

const ease = [0.16, 1, 0.3, 1] as const;

type Labels = {
  eyebrow: string;
  title: string;
  intro: string;
  folder: string;
  open: string;
};

export function PortfolioFolders({
  folders,
  locale,
  labels,
}: {
  folders: PortfolioFolder[];
  locale: Locale;
  labels: Labels;
}) {
  return (
    <div className="relative min-h-[calc(100dvh-8rem)] overflow-hidden bg-[#0c0c0c] text-[#f4f1ec] md:min-h-dvh">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            "radial-gradient(ellipse 85% 55% at 15% 0%, rgba(180,150,110,0.14), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 100%, rgba(90,110,130,0.12), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <header className="relative px-6 pb-10 pt-14 md:px-12 md:pb-14 md:pt-20 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/45"
        >
          {labels.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.08, ease }}
          className="mt-5 max-w-3xl text-[clamp(2rem,5.5vw,4.25rem)] font-normal leading-[1.05] tracking-[-0.03em] text-[#f4f1ec]"
        >
          {labels.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.16, ease }}
          className="mt-6 max-w-md text-[14px] font-normal leading-relaxed text-white/50 md:text-[15px]"
        >
          {labels.intro}
        </motion.p>
      </header>

      <div className="relative mx-auto grid max-w-[1400px] gap-4 px-4 pb-16 sm:px-6 md:grid-cols-3 md:gap-5 md:px-10 md:pb-24 lg:gap-6 lg:px-14">
        {folders.map((folder, index) => (
          <FolderCard
            key={folder.slug}
            folder={folder}
            index={index}
            locale={locale}
            labels={labels}
          />
        ))}
      </div>
    </div>
  );
}

function FolderCard({
  folder,
  index,
  locale,
  labels,
}: {
  folder: PortfolioFolder;
  index: number;
  locale: Locale;
  labels: Labels;
}) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.05, delay: 0.18 + index * 0.12, ease }}
      className="group relative"
    >
      <Link
        href={withLocale(`/portfolio/${folder.slug}`, locale)}
        className="relative flex min-h-[min(72vh,34rem)] flex-col overflow-hidden md:min-h-[min(78vh,38rem)]"
      >
        <div className="absolute inset-0">
          <Image
            src={folder.cover.src}
            alt={folder.cover.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            priority={index === 0}
            quality={80}
            className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20 transition-opacity duration-700 group-hover:from-black/70 group-hover:via-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.35)_100%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        </div>

        <div className="relative z-[1] flex items-center justify-between px-5 pt-5 md:px-6 md:pt-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.38em] text-white/55">
            {labels.folder} {n}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/40 transition-colors duration-500 group-hover:text-white/70">
            {labels.open}
          </span>
        </div>

        <div className="relative z-[1] mt-auto px-5 pb-7 md:px-6 md:pb-8">
          <p className="text-[10px] font-normal uppercase tracking-[0.32em] text-white/45">
            {folder.subtitle}
          </p>
          <h2 className="mt-3 text-[clamp(1.35rem,2.4vw,1.85rem)] font-normal uppercase leading-[1.15] tracking-[0.06em] text-[#f4f1ec]">
            {folder.title}
          </h2>
          <div className="mt-5 h-px w-10 origin-left bg-white/35 transition-all duration-700 ease-out group-hover:w-20 group-hover:bg-white/70" />
        </div>
      </Link>
    </motion.div>
  );
}
