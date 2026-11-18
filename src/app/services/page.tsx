import Link from "next/link";
import { DESIGN_SERVICE, SERVICES } from "@content/services";
import { HvacIcon } from "@/components/icons/hvac-icons";
import { ItemCard } from "@/components/sections/item-card";
import { Stagger, StaggerItem } from "@/components/sections/motion";
import { PageHeader } from "@/components/sections/page-header";
import { QuoteCta } from "@/components/sections/quote-cta";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "HVAC Engineering & Installation Services | Airsol",
  description:
    "HVAC design, kitchen exhaust, cleanroom HVAC, industrial and basement ventilation, duct installation, AHU commissioning and maintenance by Airsol.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Services", href: "/services" }]}
        title="Engineering, installation and support"
        summary="One team from the first calculation to the maintenance visit, so the system that was designed is the one that gets built."
      />
      <section className="container-x py-16">
        <div className="flex flex-col gap-6 rounded-md border border-steel/30 bg-ice p-6 sm:flex-row sm:items-center sm:p-8">
          <span className="grid size-14 shrink-0 place-items-center rounded-md bg-navy text-cyan">
            <HvacIcon name="ruler" className="size-8" />
          </span>
          <div className="flex-1">
            <h2 className="font-display text-3xl font-semibold">{DESIGN_SERVICE.name}</h2>
            <p className="mt-1 max-w-[70ch] text-graphite">
              {DESIGN_SERVICE.summary} Every service below starts here.
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href="/request-a-quote">Discuss a design</Link>
          </Button>
        </div>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <StaggerItem key={s.slug}>
              <ItemCard headingLevel="h2" href={`/services/${s.slug}`} icon={s.icon} title={s.short} summary={s.summary} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <QuoteCta />
    </>
  );
}
