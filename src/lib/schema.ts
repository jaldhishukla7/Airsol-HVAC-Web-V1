import type { DetailPage, Faq } from "@content/types";
import { SITE, absoluteUrl } from "@/lib/site";

/**
 * Structured data helpers. Only facts from SITE are used. No ratings,
 * reviews, prices or certifications are emitted.
 */

const ORG_ID = `${SITE.url}/#organization`;

export function organizationSchema() {
  const org: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl("/images/airsol-logo.webp"),
    slogan: SITE.tagline,
    description: `${SITE.name} is an ${SITE.positioning} serving India, the UAE, the USA and other international markets.`,
    email: SITE.email,
    telephone: SITE.phone.tel,
    areaServed: SITE.markets.slice(0, 3).map((name) => ({ "@type": "Country", name })),
    contactPoint: SITE.phones.map((p) => ({
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      telephone: p.tel,
      availableLanguage: ["English", "Hindi", "Gujarati"],
    })),
  };
  // The full street address is only published once the client confirms it.
  // TODO_CONFIRM: set SITE.address.confirmed = true in src/lib/site.ts.
  if (SITE.address.confirmed) {
    org.address = { "@type": "PostalAddress", ...SITE.address.value };
  } else {
    org.address = {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.countryCode,
    };
  }
  if (SITE.foundedYear.confirmed) org.foundingDate = String(SITE.foundedYear.value);
  if (SITE.social.confirmed && SITE.social.value.length) org.sameAs = SITE.social.value.map((s) => s.href);
  return org;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(s: DetailPage, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.metaDescription,
    url: absoluteUrl(path),
    provider: { "@id": ORG_ID, "@type": "Organization", name: SITE.name },
    areaServed: SITE.markets.slice(0, 3).map((name) => ({ "@type": "Country", name })),
  };
}

/** Product schema without offers: the equipment is custom-quoted, so no price is published. */
export function productSchema(p: DetailPage, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.metaDescription,
    url: absoluteUrl(path),
    category: "HVAC equipment",
    brand: { "@type": "Brand", name: SITE.shortName },
    manufacturer: { "@id": ORG_ID, "@type": "Organization", name: SITE.name },
    ...(p.image ? { image: absoluteUrl(p.image.src) } : {}),
  };
}

export function articleSchema(a: { title: string; description: string; date: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    url: absoluteUrl(`/resources/${a.slug}`),
    author: { "@id": ORG_ID, "@type": "Organization", name: SITE.name },
    publisher: { "@id": ORG_ID, "@type": "Organization", name: SITE.name },
  };
}
