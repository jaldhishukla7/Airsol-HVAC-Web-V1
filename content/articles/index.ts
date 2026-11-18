import type { ArticleMeta } from "./meta";
import { meta as ahu } from "./ahu-selection-pharmaceutical-facility.mdx";
import { meta as kitchen } from "./commercial-kitchen-exhaust-cfm-calculation.mdx";
import { meta as ventilation } from "./industrial-ventilation-ach-static-pressure.mdx";
import { meta as blower } from "./how-to-select-centrifugal-blower.mdx";

export type Article = ArticleMeta & { slug: string };

/** Add new articles here after creating the .mdx file in this folder. */
export const ARTICLES: Article[] = [
  { slug: "ahu-selection-pharmaceutical-facility", ...ahu },
  { slug: "commercial-kitchen-exhaust-cfm-calculation", ...kitchen },
  { slug: "industrial-ventilation-ach-static-pressure", ...ventilation },
  { slug: "how-to-select-centrifugal-blower", ...blower },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
