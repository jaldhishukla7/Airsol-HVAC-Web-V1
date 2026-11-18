import { ArrowRight, Calendar, Check, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustry } from "@content/industries";
import { PRODUCTS } from "@content/products";
import { PROJECTS, getProject, getSector } from "@content/projects";
import { SERVICES } from "@content/services";
import { HvacIcon, type IconName } from "@/components/icons/hvac-icons";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Gallery } from "@/components/sections/gallery";
import { DuctDivider } from "@/components/sections/page-header";
import { ProjectCard, ProjectCover } from "@/components/sections/project-card";
import { QuoteSection } from "@/components/sections/quote-section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const sector = getSector(p.sector);
  return pageMetadata({
    title: `${p.client}: ${sector.label} HVAC Project | Airsol`,
    description: p.overview.slice(0, 155),
    path: `/projects/${p.slug}`,
  });
}

/** Resolve an industry's solution links to cards with an icon and summary. */
function solutionCards(links: { label: string; href: string }[]) {
  return links.map((l) => {
    const prod = PRODUCTS.find((x) => `/products/${x.slug}` === l.href);
    const serv = SERVICES.find((x) => `/services/${x.slug}` === l.href);
    const item = prod ?? serv;
    return {
      ...l,
      icon: (item?.icon ?? "gauge") as IconName,
      summary: item?.summary ?? "Preliminary airflow estimates for early planning.",
    };
  });
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const sector = getSector(p.sector);
  const industry = getIndustry(sector.industrySlug)!;
  const facts = [
    { k: "Client", v: p.client },
    { k: "Sector", v: sector.label },
    ...(p.location ? [{ k: "Location", v: p.location }] : []),
    ...(p.year ? [{ k: "Completed", v: p.year }] : []),
  ];
  const sameSector = PROJECTS.filter((x) => x.sector === p.sector && x.slug !== p.slug);
  const others = [...sameSector, ...PROJECTS.filter((x) => x.sector !== p.sector)].slice(0, 3);
  const caseStudy = [
    { title: "Scope of work", items: p.scope },
    { title: "Equipment supplied", items: p.equipment },
    { title: "Design criteria", items: p.designCriteria },
  ].filter((s) => s.items?.length);
  const cover = p.images?.[0];

  return (
    <>
      <section className="on-dark blueprint-dark relative overflow-hidden text-white">
        <div className="container-x grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-page-in">
            <Breadcrumbs
              dark
              items={[
                { label: "Projects", href: "/projects" },
                { label: p.client, href: `/projects/${p.slug}` },
              ]}
            />
            <Link
              href={`/industries/${industry.slug}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan/40 px-3 py-1.5 text-sm text-cyan hover:bg-cyan/10"
            >
              <HvacIcon name={sector.icon} className="size-4" />
              {sector.label}
            </Link>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] font-semibold text-white sm:text-6xl">{p.client}</h1>
            <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-mist">{p.overview}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#quote-title">Discuss a similar project</Link>
              </Button>
              <Button asChild size="lg" variant="ghostDark">
                <a href={`tel:${SITE.phone.tel}`}>Call {SITE.phone.display}</a>
              </Button>
            </div>
          </div>
          <div className="animate-schematic-in">
            {cover ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/15">
                <Image src={cover.src} alt={cover.alt} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              </div>
            ) : (
              <ProjectCover project={p} large className="aspect-[4/3] rounded-xl border border-white/15" />
            )}
          </div>
        </div>
        <div className="container-x relative">
        <dl className="flex flex-wrap gap-px overflow-hidden rounded-t-xl border border-b-0 border-white/10 bg-white/10">
          {facts.map((f) => (
            <div key={f.k} className="min-w-[45%] flex-1 bg-navy-800 px-5 py-4 sm:min-w-0">
              <dt className="text-[13px] text-mist">{f.k}</dt>
              <dd className="mt-1 flex items-center gap-1.5 font-semibold text-white">
                {f.k === "Location" ? <MapPin className="size-4 text-cyan" strokeWidth={1.5} aria-hidden /> : null}
                {f.k === "Completed" ? <Calendar className="size-4 text-cyan" strokeWidth={1.5} aria-hidden /> : null}
                {f.v}
              </dd>
            </div>
          ))}
        </dl>
        </div>
        <DuctDivider />
      </section>

      <div className="container-x py-14">
        {caseStudy.length || p.outcome ? (
          <section aria-labelledby="case-title" className="mb-16">
            <h2 id="case-title" className="font-display text-4xl font-semibold">
              The project
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {caseStudy.map((s) => (
                <div key={s.title} className="rounded-xl border border-line p-6">
                  <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                  <ul className="mt-3 space-y-2 text-[15px]">
                    {s.items!.map((it) => (
                      <li key={it} className="flex gap-2">
                        <Check className="mt-1 size-4 shrink-0 text-cyan-ink" strokeWidth={2} aria-hidden />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {p.outcome ? (
              <p className="mt-6 max-w-[70ch] rounded-xl bg-ice p-6 text-[16.5px] leading-relaxed text-graphite">
                <strong className="text-navy">Outcome. </strong>
                {p.outcome}
              </p>
            ) : null}
          </section>
        ) : null}

        <section aria-labelledby="needs-title">
          <h2 id="needs-title" className="font-display text-4xl font-semibold">
            What {sector.label.toLowerCase()} projects need from HVAC
          </h2>
          <dl className="reveal-group mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industry.challenges.map((c, i) => (
              <div key={c.title} className="reveal spotlight rounded-xl border border-line bg-white p-6" data-spotlight>
                <span aria-hidden className="font-display text-3xl font-semibold text-cyan-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <dt className="mt-3 font-display text-xl font-semibold text-navy">{c.title}</dt>
                <dd className="mt-2 text-[15px] text-graphite">{c.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="systems-title" className="mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="systems-title" className="font-display text-4xl font-semibold">
              Systems we deliver for this sector
            </h2>
            <Link href={`/industries/${industry.slug}`} className="link-underline text-[15px] font-semibold text-steel">
              More on {industry.name.toLowerCase()}
            </Link>
          </div>
          <ul className="reveal-group mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutionCards(industry.solutions).map((s) => (
              <li key={s.href} className="reveal">
                <Link
                  href={s.href}
                  data-spotlight
                  className="spotlight hover-lift group flex h-full flex-col rounded-xl border border-line bg-white p-6"
                >
                  <span className="card-icon grid size-12 place-items-center rounded-lg bg-ice text-steel group-hover:bg-navy group-hover:text-cyan">
                    <HvacIcon name={s.icon} className="size-7" />
                  </span>
                  <span className="mt-4 font-display text-xl font-semibold text-navy">{s.label}</span>
                  <span className="mt-1.5 line-clamp-3 text-sm text-muted">{s.summary}</span>
                  <ArrowRight
                    aria-hidden
                    strokeWidth={1.5}
                    className="mt-auto size-5 pt-1 text-steel transition-transform group-hover:translate-x-1.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {p.images && p.images.length > 1 ? (
          <section aria-labelledby="gallery-title" className="mt-16">
            <h2 id="gallery-title" className="font-display text-4xl font-semibold">
              Photo gallery
            </h2>
            <Gallery images={p.images} variant="bento" className="mt-6" />
          </section>
        ) : null}

        <section aria-labelledby="more-title" className="mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="more-title" className="font-display text-4xl font-semibold">
              More projects
            </h2>
            <Link href="/projects" className="link-underline text-[15px] font-semibold text-steel">
              All projects
            </Link>
          </div>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <ProjectCard project={o} />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <QuoteSection
        projectType={p.sector === "hospitality" ? "kitchen-exhaust" : p.sector === "healthcare" ? "cleanroom" : "other"}
        subject={`a ${sector.label.toLowerCase()} project`}
      />
    </>
  );
}
