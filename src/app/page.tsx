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
import { Reveal, Stagger, StaggerItem } from "@/components/sections/motion";
import { DuctDivider } from "@/components/sections/page-header";
import { QuoteCta } from "@/components/sections/quote-cta";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import { organizationSchema, websiteSchema } from "@/lib/schema";

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
  return (
    <>
      <Hero />

      {/* HVAC Industrial Performance & Telemetry Strip */}
      <section className="border-y border-line bg-ice/60 py-8 backdrop-blur-sm dark:border-line-dark dark:bg-navy-950/70">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            <div className="relative border-l-2 border-cyan pl-4">
              <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-cyan">
                AIRFLOW CAPACITY
              </span>
              <p className="mt-1 font-display text-3xl font-extrabold text-navy sm:text-4xl dark:text-white">
                5M+ <span className="text-xl font-bold text-cyan">CFM</span>
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">Delivered across custom AHUs &amp; blowers</p>
            </div>
            <div className="relative border-l-2 border-cyan pl-4">
              <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-cyan">
                CLEANROOM STANDARD
              </span>
              <p className="mt-1 font-display text-3xl font-extrabold text-navy sm:text-4xl dark:text-white">
                99.995% <span className="text-xl font-bold text-cyan">H14</span>
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">ISO 14644 Class 5 - 8 cGMP compliant</p>
            </div>
            <div className="relative border-l-2 border-cyan pl-4">
              <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-cyan">
                STATIC PRESSURE
              </span>
              <p className="mt-1 font-display text-3xl font-extrabold text-navy sm:text-4xl dark:text-white">
                2,500 <span className="text-xl font-bold text-cyan">Pa</span>
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">Heavy-duty industrial static pressure</p>
            </div>
            <div className="relative border-l-2 border-cyan pl-4">
              <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-cyan">
                TRACK RECORD
              </span>
              <p className="mt-1 font-display text-3xl font-extrabold text-navy sm:text-4xl dark:text-white">
                5+ <span className="text-xl font-bold text-cyan">Years</span>
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">Turnkey engineering &amp; contracting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Manufactured */}
      <section aria-labelledby="products-title" className="container-x py-20">
        <Reveal>
          <SectionHeading
            id="products-title"
            tag="ENGINEERED EQUIPMENT"
            title="Equipment we manufacture"
            intro="Built in our own manufacturing facility and configured for each project's airflow, pressure and filtration requirements."
            action={
              <Link href="/products" className="link-underline text-[15px] font-semibold text-steel dark:text-cyan">
                All Products &rarr;
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

      {/* Turnkey Services */}
      <section aria-labelledby="services-title" className="blueprint bg-ice dark:bg-[#07172b]">
        <DuctDivider tone="ice" />
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="services-title"
              tag="TURNKEY CONTRACTING"
              title="From design to handover, one contractor"
              intro="Design, fabrication, installation, commissioning and maintenance stay with one team, so drawings, equipment and site work stay aligned."
            />
            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-xl border border-line shadow-md lg:block dark:border-line-dark">
              <Image
                src="/images/work/site-1.webp"
                alt="Rooftop air handling units connected to insulated supply ductwork"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Stagger className="divide-y divide-line border-y border-line dark:divide-line-dark dark:border-line-dark">
            {SERVICES.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group flex items-start gap-4 py-5.5">
                  <span className="turbine-spin grid size-12 shrink-0 place-items-center rounded-lg border border-line bg-white text-steel transition-all duration-300 group-hover:border-cyan group-hover:bg-navy group-hover:text-cyan dark:border-line-dark dark:bg-navy-900 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
                    <HvacIcon name={s.icon} className="size-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-2xl font-bold text-navy transition-colors group-hover:text-steel dark:text-white dark:group-hover:text-cyan">
                      {s.short}
                    </span>
                    <span className="mt-1 block text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">{s.summary}</span>
                  </span>
                  <ArrowRight
                    aria-hidden
                    strokeWidth={1.5}
                    className="mt-2.5 size-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1.5 group-hover:text-steel dark:text-mist dark:group-hover:text-cyan"
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Industries */}
      <section aria-labelledby="industries-title" className="container-x py-20">
        <Reveal>
          <SectionHeading
            id="industries-title"
            tag="SECTOR EXPERTISE"
            title="Industries we work in"
            intro="Specialized environmental air conditioning, filtration cascades and ventilation tailored to your industry standards."
            action={
              <Link href="/industries" className="link-underline text-[15px] font-semibold text-steel dark:text-cyan">
                All Industries &rarr;
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

      {/* Engineering Process */}
      <section aria-labelledby="approach-title" className="on-dark blueprint-dark text-white">
        <div className="container-x py-20">
          <Reveal>
            <div className="mb-2.5 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider text-cyan uppercase">
              <span className="size-1.5 rounded-full bg-cyan" />
              <span>ENGINEERING METHODOLOGY</span>
            </div>
            <h2 id="approach-title" className="max-w-[28ch] font-display text-3xl font-extrabold text-white sm:text-5xl">
              Why Airsol: every project is engineered, not picked from a catalogue
            </h2>
            <p className="mt-4 max-w-[64ch] text-[16px] leading-relaxed text-slate-300">
              Each project is evaluated on its application requirements, airflow, static pressure, filtration needs,
              environmental conditions and the engineering standards that apply. Our focus is cost-effective
              engineering, quality manufacturing, timely delivery and dependable after-sales service.
            </p>
          </Reveal>
          <Stagger as="div" className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-5">
            {APPROACH.map((step, i) => (
              <StaggerItem as="div" key={step.title} className="bg-navy p-6 transition-colors hover:bg-navy-800">
                <p className="font-mono text-3xl font-bold text-cyan" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-white">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Projects and Clients */}
      <section aria-labelledby="projects-title" className="py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              id="projects-title"
              tag="VALIDATED INSTALLATIONS"
              title="Trusted by hospitals, hotels and industry"
              intro="A selection of the clients we have worked with. Open a project to see the sector and the systems involved."
              action={
                <Link href="/projects" className="link-underline text-[15px] font-semibold text-steel dark:text-cyan">
                  All Projects &rarr;
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
          <div className="mt-16 flex items-center justify-between border-t border-line pt-8 dark:border-line-dark">
            <h3 className="font-display text-3xl font-bold text-navy dark:text-white">From our manufacturing &amp; project sites</h3>
            <span className="font-mono text-xs font-semibold text-cyan-ink dark:text-cyan">FABRICATION &bull; ON-SITE INSTALLATION</span>
          </div>
          <Gallery images={SITE_PHOTOS} variant="bento" className="mt-6" />
        </div>
      </section>

      {/* Engineering Tools & Calculators */}
      <section aria-labelledby="tools-title" className="blueprint border-t border-line bg-ice dark:bg-[#07172b] dark:border-line-dark">
        <div className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <SectionHeading
              id="tools-title"
              tag="ENGINEERING SUITE"
              title="Quick HVAC engineering calculators"
              intro="Get a preliminary airflow figure before you call: convert units, size ventilation from air changes, or estimate kitchen hood exhaust."
            />
            <Button asChild variant="secondary" className="mt-6">
              <Link href="/tools">Open the HVAC tools &rarr;</Link>
            </Button>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-3">
            {[
              { href: "/tools#converter", icon: "airflow" as const, t: "CFM & CMH Converter", sub: "Convert volume flow rates" },
              { href: "/tools#ach", icon: "gauge" as const, t: "Air Changes (ACH)", sub: "Size room ventilation rate" },
              { href: "/tools#kitchen", icon: "hood" as const, t: "Kitchen Exhaust", sub: "Hood capture velocity estimate" },
            ].map((x) => (
              <li key={x.href}>
                <Link
                  href={x.href}
                  className="spotlight aero-shimmer group flex h-full flex-col justify-between rounded-xl border border-line bg-white p-5.5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-md dark:border-line-dark dark:bg-[#0a1c32]/95 dark:hover:border-cyan"
                >
                  <div>
                    <span className="turbine-spin grid size-11 place-items-center rounded-lg bg-ice text-steel transition-colors group-hover:bg-navy group-hover:text-cyan dark:bg-navy-900 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
                      <HvacIcon name={x.icon} className="size-6" />
                    </span>
                    <span className="mt-4 block font-display text-lg font-bold text-navy transition-colors group-hover:text-steel dark:text-white dark:group-hover:text-cyan">
                      {x.t}
                    </span>
                    <span className="mt-1 block text-xs text-slate-500 dark:text-slate-300">{x.sub}</span>
                  </div>
                  <span className="mt-4 flex items-center gap-1 font-mono text-[11px] font-semibold text-steel dark:text-cyan">
                    Calculate &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LocationsSection className="border-t border-line dark:border-line-dark" />

      <QuoteCta />
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
    </>
  );
}
