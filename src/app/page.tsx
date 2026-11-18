import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { INDUSTRIES } from "@content/industries";
import { PRODUCTS, PRODUCT_EXTRAS } from "@content/products";
import { PROJECTS, SITE_PHOTOS } from "@content/projects";
import { SERVICES } from "@content/services";
import { HvacIcon } from "@/components/icons/hvac-icons";
import { JsonLd } from "@/components/layout/json-ld";
import { ClientMarquee } from "@/components/sections/client-marquee";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { LocationsSection } from "@/components/sections/locations-section";
import { ProjectCard } from "@/components/sections/project-card";
import { ItemCard } from "@/components/sections/item-card";
import { Counter, Reveal, Stagger, StaggerItem } from "@/components/sections/motion";
import { DuctDivider } from "@/components/sections/page-header";
import { QuoteCta } from "@/components/sections/quote-cta";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE, yearsInOperation } from "@/lib/site";

export const metadata = pageMetadata({
  title: "HVAC Manufacturer & Engineering Contractor | Airsol",
  description:
    "Airsol HVAC Industry designs, manufactures and installs AHUs, ducting, HEPA filtration, blowers, ventilation and kitchen exhaust systems for projects in India, the UAE, the USA and beyond.",
  path: "/",
});

const APPROACH = [
  {
    title: "Evaluate the application",
    body: "We start from what the space or process needs: its use, environmental conditions and the engineering standards that apply.",
  },
  {
    title: "Engineer the airflow",
    body: "Airflow, static pressure and filtration are calculated, and equipment is selected to run near its efficient point.",
  },
  {
    title: "Manufacture in-house",
    body: "AHUs, ducting, hoods and accessories are built in our own manufacturing facility to the approved drawings.",
  },
  {
    title: "Install and commission",
    body: "Our own site teams install, balance and measure the system, then hand over the readings.",
  },
  {
    title: "Support after handover",
    body: "Planned maintenance and after-sales support keep the system performing as designed.",
  },
];

export default function HomePage() {
  const years = yearsInOperation();
  return (
    <>
      <Hero />

      <section aria-labelledby="products-title" className="container-x py-20">
        <Reveal>
          <SectionHeading
            id="products-title"
            title="Equipment we manufacture"
            intro="Built in our own manufacturing facility and configured for each project's airflow, pressure and filtration requirements."
            action={
              <Link href="/products" className="link-underline text-[15px] font-semibold text-steel dark:text-cyan">
                All Products
              </Link>
            }
          />
        </Reveal>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <StaggerItem key={p.slug}>
              <ItemCard href={`/products/${p.slug}`} icon={p.icon} title={p.short} summary={p.summary} />
            </StaggerItem>
          ))}
          {PRODUCT_EXTRAS.map((p) => (
            <StaggerItem key={p.name}>
              <ItemCard href={p.href} icon={p.icon} title={p.name} summary={p.summary} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section aria-labelledby="services-title" className="blueprint bg-ice">
        <DuctDivider tone="ice" />
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="services-title"
              title="From design to handover, one contractor"
              intro="Design, fabrication, installation, commissioning and maintenance stay with one team, so drawings, equipment and site work stay aligned."
            />
            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-md border border-line lg:block">
              <Image
                src="/images/work/site-1.webp"
                alt="Rooftop air handling units connected to insulated supply ductwork"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Stagger className="divide-y divide-line border-y border-line">
            {SERVICES.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group flex items-start gap-4 py-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md border border-line bg-white text-steel transition-colors group-hover:border-steel">
                    <HvacIcon name={s.icon} className="size-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-2xl font-semibold text-navy group-hover:text-steel">
                      {s.short}
                    </span>
                    <span className="mt-1 block text-[15px] text-muted">{s.summary}</span>
                  </span>
                  <ArrowRight
                    aria-hidden
                    strokeWidth={1.5}
                    className="mt-2 size-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-steel"
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section aria-labelledby="industries-title" className="container-x py-20">
        <Reveal>
          <SectionHeading
            id="industries-title"
            title="Industries we work in"
            action={
              <Link href="/industries" className="link-underline text-[15px] font-semibold text-steel dark:text-cyan">
                All Industries
              </Link>
            }
          />
        </Reveal>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <StaggerItem key={i.slug}>
              <ItemCard href={`/industries/${i.slug}`} icon={i.icon} title={i.name} summary={i.summary} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section aria-labelledby="approach-title" className="on-dark blueprint-dark text-white">
        <div className="container-x py-20">
          <Reveal>
            <h2 id="approach-title" className="max-w-[26ch] font-display text-4xl font-semibold text-white sm:text-5xl">
              Why Airsol: every project is engineered, not picked from a catalogue
            </h2>
            <p className="mt-4 max-w-[64ch] text-[16px] text-mist">
              Each project is evaluated on its application requirements, airflow, static pressure, filtration needs,
              environmental conditions and the engineering standards that apply. Our focus is cost-effective
              engineering, quality manufacturing, timely delivery and dependable after-sales service.
            </p>
          </Reveal>
          <Stagger as="div" className="mt-12 grid gap-px overflow-hidden rounded-md border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-5">
            {APPROACH.map((step, i) => (
              <StaggerItem as="div" key={step.title} className="bg-navy p-6">
                <p className="font-display text-3xl font-semibold text-cyan" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{step.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section aria-labelledby="projects-title" className="py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              id="projects-title"
              title="Trusted by hospitals, hotels and industry"
              intro="A selection of the clients we have worked with. Open a project to see the sector and the systems involved."
              action={
                <Link href="/projects" className="link-underline text-[15px] font-semibold text-steel dark:text-cyan">
                  All Projects
                </Link>
              }
            />
          </Reveal>
        </div>
        <div className="container-x mt-8">
          <ClientMarquee />
        </div>
        <div className="container-x">
          <ul className="reveal-group mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.filter((p) => p.featured)
              .slice(0, 6)
              .map((p) => (
                <li key={p.slug} className="reveal">
                  <ProjectCard project={p} />
                </li>
              ))}
          </ul>
          <h3 className="mt-16 font-display text-3xl font-semibold text-navy dark:text-white">From our sites</h3>
          <Gallery images={SITE_PHOTOS} variant="bento" className="mt-6" />
        </div>
      </section>

      <section aria-labelledby="tools-title" className="blueprint border-t border-line bg-ice">
        <div className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <SectionHeading
              id="tools-title"
              title="Quick engineering calculators"
              intro="Get a preliminary airflow figure before you call: convert units, size ventilation from air changes, or estimate kitchen hood exhaust."
            />
            <Button asChild variant="secondary" className="mt-6">
              <Link href="/tools">Open the tools</Link>
            </Button>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-3">
            {[
              { href: "/tools#converter", icon: "airflow" as const, t: "CFM and CMH converter" },
              { href: "/tools#ach", icon: "gauge" as const, t: "Air changes per hour" },
              { href: "/tools#kitchen", icon: "hood" as const, t: "Kitchen exhaust estimate" },
            ].map((x) => (
              <li key={x.href}>
                <Link href={x.href} className="hover-lift flex h-full flex-col rounded-md border border-line bg-white p-5 transition-colors dark:border-line-dark dark:bg-navy-800/90">
                  <HvacIcon name={x.icon} className="size-7 text-steel dark:text-cyan" />
                  <span className="mt-4 font-display text-xl font-semibold text-navy dark:text-white">{x.t}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LocationsSection className="border-t border-line" />

      <QuoteCta />
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
    </>
  );
}
