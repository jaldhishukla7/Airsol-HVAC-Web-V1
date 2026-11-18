import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { DetailPage } from "@content/types";
import { JsonLd } from "@/components/layout/json-ld";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHeader } from "@/components/sections/page-header";
import { QuoteSection } from "@/components/sections/quote-section";
import { RelatedLinks } from "@/components/sections/related-links";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

/** Shared layout for product and service detail pages, styled like an engineering datasheet. */
export function DetailTemplate({
  page,
  kind,
  schema,
}: {
  page: DetailPage;
  kind: "products" | "services";
  schema: Record<string, unknown>;
}) {
  const parent = kind === "products" ? { label: "Products", href: "/products" } : { label: "Services", href: "/services" };
  return (
    <>
      <PageHeader
        crumbs={[parent, { label: page.short, href: `/${kind}/${page.slug}` }]}
        title={page.h1}
        summary={page.summary}
        icon={page.icon}
      >
        <Button asChild size="lg">
          <Link href="#quote-title">Request a quote</Link>
        </Button>
        <Button asChild size="lg" variant="ghostDark">
          <a href={`tel:${SITE.phone.tel}`}>Call {SITE.phone.display}</a>
        </Button>
      </PageHeader>

      <div className="container-x grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_380px]">
        <article className="min-w-0">
          {page.sections.map((s) => (
            <section key={s.heading} className="mb-10 last:mb-0">
              <h2 className="font-display text-3xl font-semibold">{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className="mt-4 max-w-[70ch] text-[16.5px] leading-[1.7] text-graphite">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <section className="mt-12" aria-labelledby="applications-title">
            <h2 id="applications-title" className="font-display text-3xl font-semibold">
              Applications
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {page.applications.map((a) => (
                <li key={a} className="flex gap-2.5 text-[15.5px]">
                  <Check className="mt-1 size-4 shrink-0 text-cyan-ink" strokeWidth={2} aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {page.image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line bg-ice">
              <Image
                src={page.image.src}
                alt={page.image.alt}
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <div className="rounded-md border border-line">
            <h2 className="border-b border-line bg-ice px-4 py-3 font-display text-xl font-semibold">Specification</h2>
            <dl className="divide-y divide-line text-sm">
              {page.specs.map((s) => (
                <div key={s.label} className="grid grid-cols-[120px_1fr] gap-3 px-4 py-3">
                  <dt className="font-medium text-navy">{s.label}</dt>
                  <dd className="text-graphite">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-md border border-line p-4">
            <h2 className="font-display text-xl font-semibold">What we need to quote</h2>
            <ul className="mt-3 space-y-2 text-sm text-graphite">
              {page.selectionInputs.map((s) => (
                <li key={s} className="flex gap-2">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-ink" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="container-x grid gap-10 pb-16 lg:grid-cols-[minmax(0,1fr)_380px]">
        <FaqSection faqs={page.faqs} />
        <div className="lg:pt-14">
          <RelatedLinks links={page.related} />
        </div>
      </div>

      <QuoteSection projectType={page.quoteProjectType} subject={page.short} />
      <JsonLd data={schema} />
    </>
  );
}
