import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Starix Luo — photographer, cinematographer and creative marketer based in Shenzhen.",
};

const experience = [
  {
    period: "2022 — Present",
    title: "Creative Marketing / GTM",
    place: "Imaging & cinema brands",
  },
  {
    period: "2019 — 2022",
    title: "Photography / Cinematography",
    place: "Commercial & documentary",
  },
  {
    period: "2017 — 2019",
    title: "Study Cinematography in France",
    place: "",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col items-center px-6 py-16 text-center md:min-h-screen md:py-24">
      <h1 className="text-2xl font-normal tracking-[-0.03em] text-ink md:text-3xl">
        Starix luo
      </h1>
      <p className="mt-10 max-w-md text-[15px] font-normal leading-[1.75] text-ink/70 md:text-base">
        Photographer, cinematographer and creative marketer based in Shenzhen.
      </p>
      <p className="mt-8 max-w-lg text-[15px] font-normal leading-[1.75] text-ink/70 md:text-base">
        Focuses on cinematic storytelling, commercial aesthetics and visual
        narrative across both still and motion images.
      </p>

      <div className="mt-20 w-full max-w-md border-t border-line pt-16">
        <h2 className="text-[11px] font-normal uppercase tracking-[0.35em] text-ink/40">
          Experience
        </h2>
        <ul className="mt-10 space-y-12 text-left">
          {experience.map((item) => (
            <li key={item.period}>
              <p className="text-[11px] font-normal uppercase tracking-[0.28em] text-ink/45">
                {item.period}
              </p>
              <p className="mt-2 text-base font-normal text-ink">{item.title}</p>
              {item.place ? (
                <p className="mt-1 text-sm font-normal text-ink/55">{item.place}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
