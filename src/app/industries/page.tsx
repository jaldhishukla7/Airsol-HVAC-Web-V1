import { INDUSTRIES } from "@content/industries";
import { ItemCard } from "@/components/sections/item-card";
import { Stagger, StaggerItem } from "@/components/sections/motion";
import { PageHeader } from "@/components/sections/page-header";
import { QuoteCta } from "@/components/sections/quote-cta";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Industries We Serve: Pharma, Hotels, Manufacturing | Airsol",
  description:
    "HVAC, ventilation and kitchen exhaust for hotels and restaurants, pharmaceutical and healthcare, food processing, manufacturing, commercial buildings and warehouses.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Industries", href: "/industries" }]}
        title="Air systems for the way each industry works"
        summary="A hotel kitchen, a cleanroom and a warehouse all need air moved, but for very different reasons. We design for the reason."
      />
      <section className="container-x py-16">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <StaggerItem key={i.slug}>
              <ItemCard headingLevel="h2" href={`/industries/${i.slug}`} icon={i.icon} title={i.name} summary={i.summary} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <QuoteCta />
    </>
  );
}
