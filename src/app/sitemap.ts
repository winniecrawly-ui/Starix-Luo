import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/i18n/config";
import { getBlogPosts } from "@/i18n/content/blog";
import { getProjects } from "@/i18n/content/projects";
import { portfolioFolders } from "@/lib/content/portfolioFolders";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths = [
    "",
    "/portfolio",
    ...portfolioFolders.map((f) => `/portfolio/${f.slug}`),
    "/project",
    ...getProjects("en").map((p) => `/project/${p.slug}`),
    "/blog",
    ...getBlogPosts("en").map((p) => `/blog/${p.slug}`),
    "/about",
    "/contact",
  ];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified,
    })),
  );
}
