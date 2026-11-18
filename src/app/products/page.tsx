import { PRODUCTS, PRODUCT_EXTRAS } from "@content/products";
import { ItemCard } from "@/components/sections/item-card";
import { Stagger, StaggerItem } from "@/components/sections/motion";
import { PageHeader } from "@/components/sections/page-header";
import { QuoteCta } from "@/components/sections/quote-cta";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "HVAC Products: AHUs, Ducting, Filtration & Fans | Airsol",
  description:
    "Air handling units, HVAC ducting, HEPA filtration, blowers, air washers and dust collection equipment manufactured by Airsol.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Products", href: "/products" }]}
        title="HVAC equipment, manufactured in-house"
        summary="Every unit is configured for the project it serves: its airflow, static pressure, filtration and installation conditions."
      />
      <section className="container-x py-16">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <StaggerItem key={p.slug}>
              <ItemCard headingLevel="h2" href={`/products/${p.slug}`} icon={p.icon} title={p.name} summary={p.summary} />
            </StaggerItem>
          ))}
        </Stagger>
        <h2 className="mt-16 font-display text-3xl font-semibold">Supplied as part of complete systems</h2>
        <p className="mt-2 max-w-[62ch] text-muted">
          These products are designed and installed with the rest of the system, so they are described on the
          related service pages.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {PRODUCT_EXTRAS.map((p) => (
            <li key={p.name}>
              <ItemCard href={p.href} icon={p.icon} title={p.name} summary={p.summary} />
            </li>
          ))}
        </ul>
      </section>
      <QuoteCta />
    </>
  );
}
