import { Breadcrumbs, type Crumb } from "@/components/layout/breadcrumbs";
import { HvacIcon, type IconName } from "@/components/icons/hvac-icons";
import { cn } from "@/lib/utils";

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
  title: string;
  summary?: string;
  icon?: IconName;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("on-dark blueprint-dark relative overflow-hidden text-white", className)}>
      <AirflowStrokes />
      <div className="container-x relative py-12 sm:py-16">
        <Breadcrumbs items={crumbs} dark />
        <div className="mt-6 flex items-start gap-5">
          {icon ? (
            <span className="mt-1 hidden size-14 shrink-0 place-items-center rounded-md border border-cyan/40 text-cyan sm:grid">
              <HvacIcon name={icon} className="size-8" />
            </span>
          ) : null}
          <div className="animate-page-in">
            <h1 className="max-w-[22ch] font-display text-4xl leading-[1.02] font-semibold text-white sm:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>
            {summary ? <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-mist">{summary}</p> : null}
            {children ? <div className="mt-7 flex flex-wrap gap-3">{children}</div> : null}
          </div>
        </div>
      </div>
      <DuctDivider />
    </section>
  );
}

/** Thin static airflow lines across the right side of dark headers (no animation, no paint cost). */
function AirflowStrokes() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 300"
      preserveAspectRatio="none"
      className="pointer-events-none absolute top-0 right-0 hidden h-full w-1/2 opacity-60 md:block"
    >
      <g stroke="#00B4D8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".55">
        <path className="airflow-line" d="M0 90C150 90 220 60 600 60" />
        <path className="airflow-line" d="M0 150C180 150 260 130 600 130" />
        <path className="airflow-line" d="M0 210C200 210 300 200 600 200" />
      </g>
    </svg>
  );
}

/** Section divider drawn like a duct seam with flange marks. */
export function DuctDivider({ tone = "light" }: { tone?: "light" | "ice" }) {
  const fill = tone === "ice" ? "#E8F6FB" : "#FFFFFF";
  return (
    <svg aria-hidden viewBox="0 0 1200 18" preserveAspectRatio="none" className="relative block h-[18px] w-full">
      <path d="M0 18V8h1200v10z" fill={fill} />
      <path d="M0 8h1200" stroke="#00B4D8" strokeOpacity=".45" />
      {Array.from({ length: 13 }, (_, i) => (
        <path key={i} d={`M${i * 100} 3v5`} stroke="#00B4D8" strokeOpacity=".45" />
      ))}
    </svg>
  );
}
