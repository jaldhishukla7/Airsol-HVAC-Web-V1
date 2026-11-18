import Link from "next/link";
import { PROJECTS } from "@content/projects";

/**
 * Infinite, auto-scrolling strip of client names (CSS transform animation).
 * Pauses on hover and focus; static under reduced motion.
 */
export function ClientMarquee() {
  const items = [...PROJECTS, ...PROJECTS];
  return (
    <div className="marquee group relative overflow-hidden py-2" aria-label="Clients">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <ul className="marquee-track flex w-max items-center gap-12">
        {items.map((p, i) => (
          <li key={`${p.slug}-${i}`} aria-hidden={i >= PROJECTS.length ? true : undefined}>
            <Link
              href={`/projects/${p.slug}`}
              tabIndex={i >= PROJECTS.length ? -1 : undefined}
              className="font-display text-[1.7rem] font-semibold whitespace-nowrap text-navy/35 transition-colors duration-300 hover:text-steel"
            >
              {p.client}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
