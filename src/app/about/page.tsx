import Image from "next/image";
import Link from "next/link";
import { INDUSTRIES } from "@content/industries";
import { PageHeader } from "@/components/sections/page-header";
import { QuoteCta } from "@/components/sections/quote-cta";
import { pageMetadata } from "@/lib/metadata";
import { SITE, yearsInOperation } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Airsol HVAC Industry | Airsol",
  description:
    "Airsol HVAC Industry is a partnership firm and an HVAC manufacturer and engineering contractor serving India, the UAE, the USA and other markets.",
  path: "/about",
});

export default function AboutPage() {
  const years = yearsInOperation();
  return (
    <>
      <PageHeader
        crumbs={[{ label: "About", href: "/about" }]}
        title="An HVAC manufacturer and engineering contractor"
        summary={`${SITE.name} is a ${SITE.legalForm.toLowerCase()} that has designed, built and installed air systems for industrial, pharmaceutical and commercial clients for ${years}+ years, in India and for international projects.`}
      />
      <div className="container-x grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="min-w-0 space-y-5 text-[16.5px] leading-[1.7] text-graphite">
          <h2 className="font-display text-3xl font-semibold text-navy">What we do</h2>
          <p>
            We manufacture HVAC equipment and we install it. Our manufacturing facility builds air handling
            units, ducting and accessories, HEPA and air filtration systems, industrial fans and blowers, air washers
            and treated fresh air units, commercial kitchen exhaust hoods, ventilation systems and dust collection
            equipment. Our engineering and site teams design systems around that equipment, install them, commission
            them and maintain them.
          </p>
          <p>
            Keeping manufacture and contracting in one firm means the people who calculate the airflow are the people
            who draw the duct, build the unit and measure the result on site. When something needs to change, it
            changes in one place.
          </p>
          <h2 className="pt-4 font-display text-3xl font-semibold text-navy">How we approach a project</h2>
          <p>
            Each project is evaluated on its application requirements, airflow, static pressure, filtration needs,
            environmental conditions and the engineering standards that apply to it. We aim for cost-effective
            engineering rather than over-specification, quality manufacturing, timely delivery and dependable
            after-sales service.
          </p>
          <h2 className="pt-4 font-display text-3xl font-semibold text-navy">Who we work for</h2>
          <p>
            Our clients include{" "}
            {INDUSTRIES.map((i, idx) => (
              <span key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="text-steel underline underline-offset-2">
                  {i.name.toLowerCase()}
                </Link>
                {idx < INDUSTRIES.length - 2 ? ", " : idx === INDUSTRIES.length - 2 ? " and " : ""}
              </span>
            ))}
            . We work across India and supply equipment for projects in the UAE, the USA and other international
            markets; see <Link href="/international" className="text-steel underline underline-offset-2">how we work internationally</Link>.
          </p>
        </div>
        <aside className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line">
            <Image
              src="/images/work/site-6.webp"
              alt="Plant room with an air handling unit and chilled-water piping"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </div>
          <dl className="divide-y divide-line rounded-md border border-line text-sm">
            {[
              ["Firm", `${SITE.name}, ${SITE.legalForm}`],
              ["Head office", "Gujarat, India"],
              ["Since", String(SITE.foundedYear.value)],
              ["Markets", SITE.markets.join(", ")],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[110px_1fr] gap-3 px-4 py-3">
                <dt className="font-medium text-navy">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
      <QuoteCta />
    </>
  );
}
