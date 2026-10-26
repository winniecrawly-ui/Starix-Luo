"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LocalizedProject } from "@/i18n/content/projects";
import type { ProjectImage } from "@/lib/content/projectImages";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

type Labels = {
  back: string;
  date: string;
  sittingWith: string;
  wordsBy: string;
  share: string;
};

/**
 * Typography aligned to Urth Magazine (Domaine + Gilroy metrics).
 * https://magazine.urth.co/articles/in-focus-photographer-laura-zalenga
 */
export function ProjectMagazineSpread({
  project,
  hero,
  extras,
  backHref,
  labels,
}: {
  project: LocalizedProject;
  hero: ProjectImage | null;
  extras: ProjectImage[];
  backHref: string;
  labels: Labels;
}) {
  const lead = project.body[0];
  const rest = project.body.slice(1);
  const tags = [project.category, "Thypoch"];

  return (
    <article className="bg-[#fbf9f3] text-[#171616]">
      {/* —— Split hero: title 50% | image 50% —— */}
      <header className="relative grid min-h-[100dvh] grid-cols-1 lg:grid-cols-2">
        <div className="relative flex min-h-[50dvh] flex-col justify-between bg-[#fbf9f3] px-6 py-8 sm:px-10 sm:py-10 md:px-12 lg:min-h-[100dvh] lg:px-14 lg:py-12 xl:px-16">
          <Link
            href={backHref}
            className="font-urth-caps w-fit text-[0.75rem] text-[#171616]/45 transition-colors hover:text-[#171616] md:text-[0.875rem]"
          >
            {labels.back}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="font-urth-serif my-10 max-w-[11ch] text-[clamp(3.75rem,6.5vw,6.5rem)] font-normal leading-[1.1] tracking-[-0.02rem] text-[#171616] lg:my-0 lg:text-[clamp(4rem,5vw,6.25rem)] lg:leading-[1.089]"
          >
            {project.headline}
          </motion.h1>

          <p className="font-urth-serif text-[1.25rem] font-normal leading-[1.35] tracking-[-0.02rem] text-[#171616]/75 lg:text-[1.5rem] lg:leading-[1.3]">
            {project.subtitle}
            {project.year && project.year !== "—" ? (
              <span className="text-[#171616]/45"> · {project.year}</span>
            ) : null}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className={
            hero && !hero.landscape
              ? "relative min-h-[60dvh] overflow-hidden bg-[#171616] lg:min-h-[100dvh]"
              : "relative min-h-[45dvh] overflow-hidden bg-[#171616] lg:min-h-[100dvh]"
          }
        >
          {hero ? (
            <Image
              src={hero.src}
              alt={`${project.title} — ${project.subtitle}`}
              fill
              priority
              className={
                hero.landscape
                  ? "object-cover object-center"
                  : "object-cover object-[center_28%]"
              }
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          ) : null}
        </motion.div>
      </header>

      {/* —— Tags + meta —— */}
      <section className="px-5 pt-12 sm:px-8 md:px-12 md:pt-16 lg:px-16 xl:px-20">
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-urth-caps inline-flex items-center rounded-full border border-[#171616]/25 px-4 py-1.5 text-[0.75rem] text-[#171616] md:text-[0.875rem]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12 grid max-w-[40rem] gap-8 border-t border-[#171616]/12 pt-8 sm:grid-cols-2 md:mt-14 md:pt-10">
          <div>
            <p className="font-urth-caps text-[0.75rem] text-[#171616]/45 md:text-[0.875rem]">
              {labels.sittingWith}
            </p>
            <p className="font-urth-serif mt-2 text-[1.125rem] font-normal leading-snug tracking-[-0.02rem] text-[#171616]">
              {project.title}
            </p>
          </div>
          <div>
            <p className="font-urth-caps text-[0.75rem] text-[#171616]/45 md:text-[0.875rem]">
              {labels.wordsBy}
            </p>
            <p className="font-urth-serif mt-2 text-[1.125rem] font-normal leading-snug tracking-[-0.02rem] text-[#171616]">
              {site.name}
            </p>
          </div>
        </div>
      </section>

      {/* —— Body (Urth Domaine text metrics) —— */}
      <section className="mx-auto mt-14 max-w-[54rem] space-y-8 px-5 sm:px-8 md:mt-20 md:space-y-8 md:px-12">
        <p className="font-urth-serif text-[1rem] font-normal leading-[1.55] text-[#171616] md:text-[min(1.05vw,1.125rem)] md:leading-[1.55]">
          {lead}
        </p>
        {rest.map((paragraph, i) => (
          <p
            key={`${project.slug}-body-${i}`}
            className="font-urth-serif text-[1rem] font-normal leading-[1.55] text-[#171616] md:text-[min(1.05vw,1.125rem)] md:leading-[1.55]"
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* —— Extra images —— */}
      {extras.length > 0 ? (
        <section className="mt-16 space-y-12 pb-6 md:mt-24 md:space-y-20">
          {extras.map((img) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.8, ease }}
              className={
                img.landscape
                  ? "mx-auto w-full max-w-[56.3125rem] px-5 sm:px-8 lg:px-0"
                  : "mx-auto w-full max-w-[28rem] px-5 sm:px-8 md:max-w-[32rem]"
              }
            >
              <div
                className="relative w-full overflow-hidden bg-[#171616]/5"
                style={{ aspectRatio: `${img.width} / ${img.height}` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes={
                    img.landscape
                      ? "(min-width: 1100px) 56rem, 100vw"
                      : "(min-width: 768px) 35rem, 100vw"
                  }
                />
              </div>
            </motion.figure>
          ))}
        </section>
      ) : null}

      {/* —— Footer —— */}
      <footer className="mx-auto mt-16 flex max-w-[54rem] items-center justify-between gap-6 border-t border-[#171616]/12 px-5 py-10 sm:px-8 md:mt-24 md:px-12 md:py-12">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`foot-${tag}`}
              className="font-urth-caps inline-flex items-center rounded-full border border-[#171616]/25 px-3.5 py-1 text-[0.75rem] text-[#171616]"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="font-urth-caps shrink-0 text-[0.75rem] font-normal tracking-[0.04em] text-[#171616]/55 normal-case">
          {project.date && project.date !== "—"
            ? project.date
            : labels.date}
        </p>
      </footer>
    </article>
  );
}
