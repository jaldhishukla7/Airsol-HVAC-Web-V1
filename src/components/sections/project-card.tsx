import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getSector, type Project } from "@content/projects";
import { HvacIcon } from "@/components/icons/hvac-icons";
import { cn } from "@/lib/utils";

/** Per-sector tone so the grid reads at a glance. All stay within the navy/steel/cyan palette. */
const TONES: Record<string, string> = {
  healthcare: "from-[#0B2545] via-[#0F3B66] to-[#13518A]",
  hospitality: "from-[#0B2545] via-[#0D3550] to-[#0F5A6B]",
  industrial: "from-[#0B1626] via-[#1F2933] to-[#2B3A4A]",
  commercial: "from-[#071A33] via-[#13518A] to-[#1A62A5]",
};

/**
 * Designed cover for a project: sector-toned gradient, a large sector line
 * illustration inside rotating fan rings, and airflow lines that run on hover.
 * If the project has photos, the first photo is used instead.
 */
export function ProjectCover({ project, className, large = false }: { project: Project; className?: string; large?: boolean }) {
  const sector = getSector(project.sector);
  const photo = project.images?.[0];
  if (photo) {
    return (
      <div className={cn("relative overflow-hidden bg-ice", className)}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={large ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      </div>
    );
  }
  return (
    <div className={cn("project-cover relative isolate overflow-hidden bg-gradient-to-br", TONES[project.sector], className)}>
      <div aria-hidden className="blueprint-lines absolute inset-0 opacity-60" />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_45%,rgb(0_180_216/0.22),transparent_70%)]" />
      <div aria-hidden className="cover-flow absolute inset-x-0 top-1/2 -translate-y-1/2 space-y-4 opacity-30">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-[2px] overflow-hidden">
            <div className="airflow-strip h-full w-[calc(100%+48px)]" style={{ animationDelay: `${i * -0.25}s` }} />
          </div>
        ))}
      </div>
      <div aria-hidden className="absolute inset-0 grid place-items-center">
        <div className={cn("relative grid place-items-center", large ? "size-64" : "size-36")}>
          <span className="cover-ring absolute inset-0 rounded-full border border-dashed border-cyan/40" />
          <span className="cover-ring-rev absolute inset-[14%] rounded-full border border-cyan/25" />
          <span className="cover-icon relative grid place-items-center rounded-2xl border border-cyan/50 bg-navy/70 text-cyan shadow-[0_0_40px_rgb(0_180_216/0.35)] backdrop-blur-sm">
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
      className="spotlight group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-steel/60 hover:shadow-[var(--shadow-lift)]"
    >
      <ProjectCover project={project} className="aspect-[16/10]" />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[13px] font-medium text-cyan-ink">{sector.label}</p>
        <H className="mt-1 font-display text-2xl leading-tight font-semibold text-navy">{project.client}</H>
        {project.location ? (
          <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-muted">
            <MapPin className="size-3.5" strokeWidth={1.5} aria-hidden />
            {project.location}
          </p>
        ) : null}
        <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-steel">
          View project
          <ArrowRight aria-hidden strokeWidth={1.5} className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
