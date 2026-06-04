"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { EmailIcon } from "@/components/icons/Email";
import { InstagramIcon } from "@/components/icons/Instagram";
import clsx from "clsx";

const navItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/project", label: "Project" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;

export function Sidebar() {
  const pathname = usePathname();
  const brand = site.name.toUpperCase();

  return (
    <aside className="sticky top-0 z-40 flex w-full shrink-0 flex-col border-b border-neutral-200 bg-canvas px-5 py-6 md:h-screen md:w-[min(19rem,32vw)] md:border-b-0 md:border-r md:px-8 md:py-12">
      <div className="flex flex-1 flex-col md:min-h-0">
        <header className="shrink-0">
          <Link
            href="/"
            className="block whitespace-nowrap font-bold uppercase tracking-[0.14em] text-ink transition-opacity hover:opacity-70"
            style={{ fontSize: "clamp(1.05rem, 1.9vw, 1.35rem)", lineHeight: 1.25 }}
          >
            {brand}
          </Link>
          <div className="mt-2.5 flex flex-row items-center gap-x-3 md:mt-3 md:gap-x-3.5">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-ink transition-opacity hover:opacity-55"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-[22px] w-[22px]" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex text-ink transition-opacity hover:opacity-55"
              aria-label={`Email ${site.email}`}
              title={site.email}
            >
              <EmailIcon className="h-[22px] w-[22px]" />
            </a>
          </div>
        </header>

        <nav className="mt-8 flex flex-row flex-wrap gap-x-5 gap-y-2.5 md:mt-14 md:flex-col md:gap-x-0 md:gap-y-3">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "text-[11px] font-medium uppercase tracking-[0.2em] transition-colors md:text-[12px]",
                  active ? "text-ink" : "text-neutral-500 hover:text-ink",
                )}
              >
                {item.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
