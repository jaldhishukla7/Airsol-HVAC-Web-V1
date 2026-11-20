import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { HvacIcon, type IconName } from "@/components/icons/hvac-icons";
import { cn } from "@/lib/utils";

/** Map icons to engineering specification category tags */
const SPEC_TAGS: Partial<Record<IconName, string>> = {
  ahu: "MODULAR DOUBLE-SKIN",
  duct: "PRECISION FABRICATION",
  cleanroom: "ISO 14644 / H14 HEPA",
  filter: "MULTI-STAGE FILTRATION",
  fan: "DYNAMICALLY BALANCED",
  airWasher: "EVAPORATIVE COOLING",
  dust: "AIR POLLUTION CONTROL",
  hood: "COMMERCIAL EXTRACTION",
  airflow: "AIR DISTRIBUTION",
  basement: "VENTILATION SYSTEM",
  factory: "HEAVY INDUSTRIAL",
  hotel: "LOW-NOISE ACOUSTIC",
  pharma: "CGMP VALIDATED",
  food: "HYGIENIC STANDARD",
  building: "COMMERCIAL HVAC",
  warehouse: "LOGISTICS CLIMATE",
  wrench: "SITE COMMISSIONING",
  gauge: "DIFFERENTIAL SENSING",
  thermometer: "THERMAL CONTROL",
  ruler: "CUSTOM CALIBRATED",
  globe: "INTERNATIONAL EXPORT",
};

/** Engineered card for HVAC products, services and industry applications. */
export function ItemCard({
  href,
  icon,
  title,
  summary,
  className,
  headingLevel = "h3",
}: {
  href: string;
  icon: IconName;
  title: string;
  summary: string;
  className?: string;
  headingLevel?: "h2" | "h3";
}) {
  const H = headingLevel;
  const specTag = SPEC_TAGS[icon] || "ENGINEERED SPECIFICATION";

  return (
    <Link
      href={href}
      data-spotlight
      className={cn(
        "spotlight aero-shimmer corner-notch group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-[0_10px_28px_-6px_rgba(0,180,216,0.22)] dark:border-line-dark dark:bg-[#0a1c32]/95 dark:hover:border-cyan dark:hover:shadow-[0_10px_32px_-6px_rgba(0,229,255,0.25)]",
        className,
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="card-icon turbine-spin grid size-12 place-items-center rounded-lg bg-ice text-steel shadow-sm transition-all duration-300 group-hover:bg-navy group-hover:text-cyan dark:bg-navy-900 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
            <HvacIcon name={icon} className="size-7" />
          </span>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-semibold tracking-wider text-muted/80 uppercase group-hover:text-cyan-ink dark:text-mist/70 dark:group-hover:text-cyan">
              {specTag}
            </span>
            <span className="grid size-6 place-items-center rounded-full bg-slate-100 text-muted transition-all duration-300 group-hover:bg-cyan group-hover:text-navy group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:bg-navy-900/80 dark:text-mist dark:group-hover:bg-cyan dark:group-hover:text-navy">
              <ArrowUpRight aria-hidden strokeWidth={2} className="size-3.5" />
            </span>
          </div>
        </div>

        <H className="mt-5 font-display text-[1.4rem] leading-snug font-bold tracking-tight text-navy transition-colors group-hover:text-steel dark:text-white dark:group-hover:text-cyan">
          {title}
        </H>

        <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600 transition-colors dark:text-slate-300">
          {summary}
        </p>
      </div>

      {/* Aerodynamic bottom accent bar */}
      <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-3 dark:border-line-dark/60">
        <span className="font-mono text-[11px] font-semibold text-steel transition-colors group-hover:text-cyan-ink dark:text-cyan dark:group-hover:text-cyan-light">
          View Specifications &rarr;
        </span>
        <span className="h-1 w-6 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-cyan dark:bg-navy-800" />
      </div>
    </Link>
  );
}
