import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getSector, type Project } from "@content/projects";
import { HvacIcon } from "@/components/icons/hvac-icons";
import { cn } from "@/lib/utils";

/** Per-sector tone within the navy/steel/cyan palette */
const TONES: Record<string, string> = {
  healthcare: "from-[#0B2545] via-[#0F3B66] to-[#13518A]",
  hospitality: "from-[#0B2545] via-[#0D3550] to-[#0F5A6B]",
  industrial: "from-[#0B1626] via-[#1F2933] to-[#2B3A4A]",
  commercial: "from-[#071A33] via-[#13518A] to-[#1A62A5]",
};

/**
 * Designed cover for an HVAC project: sector-toned gradient, sector icon
 * inside rotating fan rings, and aerodynamic airflow lines.
 */
export function ProjectCover({
  project,
  className,
  large = false,
}: {
  project: Project;
  className?: string;
  large?: boolean;
}) {
  const sector = getSector(project.sector);
  const photo = project.images?.[0];
  if (photo) {
    return (
      <div className={cn("relative overflow-hidden bg-ice dark:bg-navy-900", className)}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={large ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
      </div>
    );
  }
  return (
    <div className={cn("project-cover relative isolate overflow-hidden bg-gradient-to-br", TONES[project.sector], className)}>
      <div aria-hidden className="blueprint-lines absolute inset-0 opacity-70" />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_45%,rgb(0_229_255/0.2),transparent_70%)]" />

      {/* Aerodynamic airflow streamlines */}
      <div aria-hidden className="cover-flow absolute inset-x-0 top-1/2 -translate-y-1/2 space-y-4 opacity-40">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-[2px] overflow-hidden">
            <div className="airflow-strip h-full w-[calc(100%+64px)]" style={{ animationDelay: `${i * -0.22}s` }} />
          </div>
        ))}
      </div>

      <div aria-hidden className="absolute inset-0 grid place-items-center">
        <div className={cn("relative grid place-items-center", large ? "size-64" : "size-36")}>
          <span className="cover-ring absolute inset-0 rounded-full border border-dashed border-cyan/45" />
          <span className="cover-ring-rev absolute inset-[14%] rounded-full border border-cyan/30" />
          <span className="cover-icon relative grid place-items-center rounded-2xl border border-cyan/50 bg-navy/80 text-cyan shadow-[0_0_35px_rgba(0,180,216,0.35)] backdrop-blur-sm">
            <HvacIcon name={sector.icon} className={large ? "m-6 size-24" : "m-4 size-12"} strokeWidth={1.2} />
          </span>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const sector = getSector(project.sector);
  const H = headingLevel;
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-spotlight
      className="spotlight aero-shimmer corner-notch group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-[0_10px_28px_-6px_rgba(0,180,216,0.22)] dark:border-line-dark dark:bg-[#0a1c32]/95 dark:hover:border-cyan dark:hover:shadow-[0_10px_32px_-6px_rgba(0,229,255,0.25)]"
    >
      <ProjectCover project={project} className="aspect-[16/10]" />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-cyan" />
          <p className="font-mono text-[11px] font-semibold tracking-wider text-cyan-ink uppercase dark:text-cyan">
            {sector.label}
          </p>
        </div>

        <H className="mt-2 font-display text-[1.4rem] leading-snug font-bold tracking-tight text-navy transition-colors group-hover:text-steel dark:text-white dark:group-hover:text-cyan">
          {project.client}
        </H>

        {project.location ? (
          <p className="mt-2 flex items-center gap-1.5 text-[13.5px] text-slate-500 dark:text-slate-300">
            <MapPin className="size-3.5 text-cyan" strokeWidth={1.75} aria-hidden />
            {project.location}
          </p>
        ) : null}

        <span className="mt-auto flex items-center justify-between pt-6 text-sm font-semibold text-steel dark:text-cyan">
          <span>Project details</span>
          <span className="grid size-6 place-items-center rounded-full bg-slate-100 text-steel transition-all duration-300 group-hover:bg-cyan group-hover:text-navy group-hover:translate-x-1 dark:bg-navy-900 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
            <ArrowRight aria-hidden strokeWidth={2} className="size-3.5" />
          </span>
        </span>
      </div>
    </Link>
  );
}
