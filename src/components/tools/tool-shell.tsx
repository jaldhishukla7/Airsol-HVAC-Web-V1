import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import { HvacIcon, type IconName } from "@/components/icons/hvac-icons";
import { Button } from "@/components/ui/button";

export function ToolShell({
  id,
  icon,
  title,
  intro,
  formula,
  assumptions,
  quoteType,
  children,
}: {
  id: string;
  icon: IconName;
  title: string;
  intro: string;
  formula: React.ReactNode;
  assumptions: string[];
  quoteType: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 rounded-lg border border-line bg-white">
      <div className="flex items-start gap-4 border-b border-line p-5 sm:p-7">
        <span className="grid size-11 shrink-0 place-items-center rounded-md bg-ice text-steel">
          <HvacIcon name={icon} className="size-6" />
        </span>
        <div>
          <h2 id={`${id}-title`} className="text-3xl font-semibold">
            {title}
          </h2>
          <p className="mt-1 max-w-[62ch] text-[15px] text-muted">{intro}</p>
        </div>
      </div>
      <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1.1fr_1fr]">
        <div>{children}</div>
        <div className="space-y-5 text-sm">
          <div>
            <h3 className="text-lg font-semibold">Formula</h3>
            <div className="mt-2 overflow-x-auto rounded-md bg-ice px-4 py-3 font-mono text-[13px] text-navy">
              {formula}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Assumptions</h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-graphite">
              {assumptions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <p className="flex gap-2 rounded-md border border-orange/40 bg-orange/5 p-3 text-graphite">
            <TriangleAlert className="mt-0.5 size-4 shrink-0 text-orange-600" strokeWidth={1.5} aria-hidden />
            <span>
              <strong>Preliminary estimate, not final engineering design.</strong> Final airflow, static pressure and
              equipment selection need a site-specific design.
            </span>
          </p>
          <Button asChild>
            <Link href={`/request-a-quote?type=${quoteType}`}>Request a quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ResultRow({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-white/15 py-2 last:border-0">
      <dt className="text-sm text-mist">{label}</dt>
      <dd className="font-display text-3xl font-semibold text-white tabular-nums">
        {value} <span className="text-base font-medium text-cyan">{unit}</span>
      </dd>
    </div>
  );
}

export function ResultPanel({ children, empty }: { children: React.ReactNode; empty: boolean }) {
  return (
    <div aria-live="polite" className="on-dark blueprint-dark mt-6 rounded-md p-5">
      {empty ? (
        <p className="text-sm text-mist">Enter values above to see the result.</p>
      ) : (
        <dl>{children}</dl>
      )}
    </div>
  );
}
