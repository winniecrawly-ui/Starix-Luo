import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogPosts } from "@/lib/content/blog";
import { projectCases } from "@/lib/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    "",
    "/portfolio",
    "/project",
    "/blog",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
  }));

  const posts = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified,
  }));

  const projects = projectCases.map((p) => ({
    url: `${site.url}/project/${p.slug}`,
    lastModified,
  }));

  return [...staticRoutes, ...posts, ...projects];
}
