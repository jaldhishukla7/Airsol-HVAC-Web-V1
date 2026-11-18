import type { IconName } from "@/components/icons/hvac-icons";

export type Faq = { q: string; a: string };

export type ContentSection = {
  heading: string;
  paragraphs: string[];
};

export type RelatedLink = { label: string; href: string };

/** Shared shape for product and service detail pages. */
export type DetailPage = {
  slug: string;
  name: string;
  /** Short label used in menus and cards. */
  short: string;
  icon: IconName;
  /** <title> text. The layout template appends nothing; keep under ~60 chars. */
  seoTitle: string;
  metaDescription: string;
  h1: string;
  /** One or two sentences shown under the H1 and on cards. */
  summary: string;
  sections: ContentSection[];
  /** Spec / feature list rendered as a datasheet table. */
  specs: { label: string; value: string }[];
  /** What we ask the client for to size and quote. */
  selectionInputs: string[];
  applications: string[];
  faqs: Faq[];
  related: RelatedLink[];
  /** Optional photo (must exist in /public). */
  image?: { src: string; alt: string };
  /** Project type pre-selected in the quote form. */
  quoteProjectType: ProjectType;
};

export const PROJECT_TYPES = [
  { value: "kitchen-exhaust", label: "Commercial kitchen exhaust" },
  { value: "cleanroom", label: "Cleanroom / pharmaceutical HVAC" },
  { value: "ahu", label: "Air handling unit (AHU)" },
  { value: "ducting", label: "Ducting" },
  { value: "industrial-ventilation", label: "Industrial ventilation" },
  { value: "basement-ventilation", label: "Basement ventilation" },
  { value: "other", label: "Other" },
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number]["value"];
