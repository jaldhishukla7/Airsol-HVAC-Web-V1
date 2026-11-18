import { PageHeader } from "@/components/sections/page-header";

export function LegalPage({
  title,
  path,
  updated,
  sections,
}: {
  title: string;
  path: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <PageHeader crumbs={[{ label: title, href: path }]} title={title} summary={`Last updated ${updated}.`} />
      <div className="container-x py-14">
        <div className="max-w-[72ch] space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl font-semibold">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p.slice(0, 30)} className="mt-3 text-[16px] leading-relaxed text-graphite">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
