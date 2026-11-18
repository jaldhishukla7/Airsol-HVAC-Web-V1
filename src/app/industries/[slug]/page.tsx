import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES, getIndustry } from "@content/industries";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHeader } from "@/components/sections/page-header";
import { QuoteCta } from "@/components/sections/quote-cta";
import { RelatedLinks } from "@/components/sections/related-links";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) return {};
  return pageMetadata({ title: i.seoTitle, description: i.metaDescription, path: `/industries/${i.slug}` });
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) notFound();
  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Industries", href: "/industries" },
          { label: i.name, href: `/industries/${i.slug}` },
        ]}
        title={i.h1}
        summary={i.summary}
        icon={i.icon}
      />
      <div className="container-x grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          {i.intro.map((p) => (
            <p key={p.slice(0, 30)} className="mb-4 max-w-[70ch] text-[16.5px] leading-[1.7] text-graphite">
              {p}
            </p>
          ))}
          <h2 className="mt-10 font-display text-3xl font-semibold">Common problems and how we address them</h2>
          <dl className="mt-5 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
            {i.challenges.map((c) => (
              <div key={c.title} className="bg-white p-5">
                <dt className="font-display text-xl font-semibold text-navy">{c.title}</dt>
                <dd className="mt-1.5 text-[15px] text-graphite">{c.body}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12">
            <FaqSection faqs={i.faqs} />
          </div>
        </div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <RelatedLinks links={i.solutions} title="Relevant products and services" />
        </aside>
      </div>
      <QuoteCta />
    </>
  );
}
