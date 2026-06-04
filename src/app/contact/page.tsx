import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Starix Luo.",
};

export default function ContactPage() {
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
        Instagram
      </a>
    </div>
  );
}
