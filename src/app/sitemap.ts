import type { MetadataRoute } from "next";
import { ARTICLES } from "@content/articles";
import { INDUSTRIES } from "@content/industries";
import { PRODUCTS } from "@content/products";
import { PROJECTS } from "@content/projects";
import { SERVICES } from "@content/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/products",
    "/services",
    "/industries",
    "/projects",
    "/international",
    "/resources",
    "/tools",
    "/about",
    "/contact",
    "/request-a-quote",
    "/privacy-policy",
    "/terms",
  ];
  const paths = [
    ...staticPaths,
    ...PRODUCTS.map((p) => `/products/${p.slug}`),
    ...SERVICES.map((s) => `/services/${s.slug}`),
    ...INDUSTRIES.map((i) => `/industries/${i.slug}`),
    ...ARTICLES.map((a) => `/resources/${a.slug}`),
    ...PROJECTS.map((p) => `/projects/${p.slug}`),
  ];
  return paths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
