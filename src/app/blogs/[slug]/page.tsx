import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "@content/articles";
import { JsonLd } from "@/components/layout/json-ld";
import { PageHeader } from "@/components/sections/page-header";
import { QuoteCta } from "@/components/sections/quote-cta";
import { RelatedLinks } from "@/components/sections/related-links";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const base = pageMetadata({ title: `${a.title} | Airsol`, description: a.description, path: `/blogs/${a.slug}` });
  return { ...base, openGraph: { ...base.openGraph, type: "article", publishedTime: a.date } };
}

const dateFmt = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: PageProps<"/blogs/[slug]">) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const { default: Body } = await import(`@content/articles/${slug}.mdx`);
  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Blogs", href: "/blogs" },
          { label: a.title, href: `/blogs/${a.slug}` },
        ]}
        title={a.title}
        summary={a.description}
      />
      <div className="container-x grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="prose-airsol min-w-0 max-w-[72ch]">
          <p className="!text-sm !text-muted">
            <time dateTime={a.date}>{dateFmt.format(new Date(a.date))}</time>, {a.readingMinutes} min read. By the
            Airsol engineering team.
          </p>
          <Body />
        </article>
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <RelatedLinks links={a.related} />
          <div className="rounded-md border border-line bg-ice p-5">
            <p className="font-display text-xl font-semibold text-navy">Need this engineered for your site?</p>
            <Button asChild className="mt-4 w-full">
              <Link href="/request-a-quote">Request a quote</Link>
            </Button>
          </div>
        </aside>
      </div>
      <QuoteCta />
      <JsonLd data={articleSchema(a)} />
    </>
  );
}
