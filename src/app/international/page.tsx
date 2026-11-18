import { Check } from "lucide-react";
import { MARKETS } from "@content/international";
import { HvacIcon } from "@/components/icons/hvac-icons";
import { PageHeader } from "@/components/sections/page-header";
import { QuoteCta } from "@/components/sections/quote-cta";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "HVAC Equipment for India, UAE & USA | Airsol",
  description:
    "How Airsol works with clients in India, the UAE and the USA: full design-build in India and custom-manufactured HVAC equipment for international projects.",
  path: "/international",
});

export default function InternationalPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "International", href: "/international" }]}
        title="Working with clients in India, the UAE and the USA"
        summary="We manufacture in India and work with clients in the UAE, the USA and other international markets. What we deliver, and how, depends on where the project is."
        icon="globe"
      >
        <nav aria-label="Markets" className="flex flex-wrap gap-2">
          {MARKETS.map((m) => (
            <a key={m.id} href={`#${m.id}`} className="rounded-md border border-white/30 px-4 py-2 text-sm font-medium text-white hover:border-cyan">
              {m.name}
            </a>
          ))}
        </nav>
      </PageHeader>
      <div className="container-x divide-y divide-line py-6">
        {MARKETS.map((m) => (
          <section key={m.id} id={m.id} aria-labelledby={`${m.id}-t`} className="grid gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <h2 id={`${m.id}-t`} className="font-display text-4xl font-semibold">
                {m.heading}
              </h2>
              {m.paragraphs.map((p) => (
                <p key={p.slice(0, 30)} className="mt-4 max-w-[70ch] text-[16.5px] leading-[1.7] text-graphite">
                  {p}
                </p>
              ))}
            </div>
            <ul className="space-y-3 self-start rounded-md border border-line bg-ice p-5">
              {m.points.map((pt) => (
                <li key={pt} className="flex gap-2.5 text-[15px]">
                  <Check className="mt-1 size-4 shrink-0 text-cyan-ink" strokeWidth={2} aria-hidden />
                  {pt}
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section className="flex gap-4 py-12">
          <HvacIcon name="globe" className="mt-1 size-7 shrink-0 text-steel" />
          <div>
            <h2 className="font-display text-3xl font-semibold">Other international markets</h2>
            <p className="mt-2 max-w-[70ch] text-graphite">
              If your project is elsewhere, send us the specification and drawings. We will confirm what we can
              manufacture and supply, and in what units and documentation, before quoting.
            </p>
          </div>
        </section>
      </div>
      <QuoteCta title="Planning an international project?" />
    </>
  );
}
