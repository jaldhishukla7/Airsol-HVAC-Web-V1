import type { Metadata } from "next";
import { SITE } from "@/lib/site";

/** Per-page metadata with canonical URL and Open Graph defaults. */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
