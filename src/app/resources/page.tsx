import Link from "next/link";
import { ARTICLES } from "@content/articles";
import { Stagger, StaggerItem } from "@/components/sections/motion";
import { PageHeader } from "@/components/sections/page-header";
import { QuoteCta } from "@/components/sections/quote-cta";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "HVAC Engineering Resources & Articles | Airsol",
  description:
    "Practical HVAC engineering articles: AHU selection for pharma, kitchen exhaust CFM, ventilation ACH and static pressure, and centrifugal blower selection.",
  path: "/resources",
});

const dateFmt = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Resources", href: "/resources" }]}
        title="Engineering notes"
        summary="Practical explanations of how HVAC systems are sized and selected, written by our engineering team."
      />
      <section className="container-x py-16">
        <Stagger className="grid gap-4 md:grid-cols-2">
          {ARTICLES.map((a) => (
            <StaggerItem key={a.slug}>
              <Link href={`/resources/${a.slug}`} className="hover-lift group flex h-full flex-col rounded-md border border-line bg-white p-6">
                <p className="text-[13px] text-cyan-ink">{a.topic}</p>
                <h2 className="mt-2 font-display text-[1.75rem] leading-tight font-semibold group-hover:text-steel">
                  {a.title}
                </h2>
                <p className="mt-3 flex-1 text-[15px] text-muted">{a.description}</p>
                <p className="mt-5 text-[13px] text-muted">
                  <time dateTime={a.date}>{dateFmt.format(new Date(a.date))}</time>, {a.readingMinutes} min read
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <QuoteCta />
    </>
  );
}
