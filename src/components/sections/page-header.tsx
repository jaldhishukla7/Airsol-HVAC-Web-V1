import { Breadcrumbs, type Crumb } from "@/components/layout/breadcrumbs";
import { HvacIcon, type IconName } from "@/components/icons/hvac-icons";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Navy page header used on every inner page: breadcrumbs, H1 and a short summary. */
export function PageHeader({
  crumbs,
  title,
  summary,
  icon,
  children,
  className,
}: {
  crumbs: Crumb[];
  title: ReactNode;
  summary?: string;
  icon?: IconName;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("on-dark blueprint-dark relative overflow-hidden text-white", className)}>
      <AirflowStrokes />
      <div className="container-x relative py-12 sm:py-16">
        <Breadcrumbs items={crumbs} dark />
        <div className="mt-6 flex items-start gap-5">
          {icon ? (
            <span className="turbine-spin mt-1 hidden size-14 shrink-0 place-items-center rounded-xl border border-cyan/40 bg-navy-900/60 text-cyan shadow-[0_0_20px_rgba(0,180,216,0.25)] sm:grid">
              <HvacIcon name={icon} className="size-8" />
            </span>
          ) : null}
          <div className="animate-page-in">
            <h1 className="max-w-[22ch] font-display text-4xl leading-[1.04] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>
            {summary ? <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-slate-300">{summary}</p> : null}
            {children ? <div className="mt-7 flex flex-wrap gap-3">{children}</div> : null}
          </div>
        </div>
      </div>
      <DuctDivider />
    </section>
  );
}

/** Dynamic animated airflow lines across the right side of dark headers */
function AirflowStrokes() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 300"
      preserveAspectRatio="none"
      className="pointer-events-none absolute top-0 right-0 hidden h-full w-1/2 opacity-70 md:block"
    >
      <g stroke="#00E5FF" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".6">
        <path className="airflow-line" d="M0 90C150 90 220 60 600 60" />
        <path className="airflow-line" d="M0 150C180 150 260 130 600 130" style={{ animationDelay: "-2.5s" }} />
        <path className="airflow-line" d="M0 210C200 210 300 200 600 200" style={{ animationDelay: "-5s" }} />
      </g>
    </svg>
  );
}

/** Section divider drawn like a precision HVAC duct seam with flange joints. */
export function DuctDivider({ tone = "light" }: { tone?: "light" | "ice" }) {
  return (
    <div className="relative block h-[18px] w-full overflow-hidden">
      <svg aria-hidden viewBox="0 0 1200 18" preserveAspectRatio="none" className="relative block h-[18px] w-full">
        <path
          d="M0 18V8h1200v10z"
          className={cn(tone === "ice" ? "fill-ice dark:fill-[#07172b]" : "fill-white dark:fill-[#061325]")}
        />
        <path d="M0 8h1200" stroke="#00B4D8" strokeOpacity=".5" strokeWidth="1.5" />
        {Array.from({ length: 13 }, (_, i) => (
          <path key={i} d={`M${i * 100} 3v5`} stroke="#00E5FF" strokeOpacity=".7" strokeWidth="1.5" />
        ))}
      </svg>
    </div>
  );
}
