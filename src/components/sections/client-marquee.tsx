import Link from "next/link";
import { PROJECTS } from "@content/projects";

/**
 * Infinite auto-scrolling marquee of client names with transparent CSS mask.
 * Pauses on hover and focus; static under reduced motion.
 * Uses CSS mask-image so edges fade out smoothly against any background in both
 * light and dark mode without color-bleed blocks.
 */
export function ClientMarquee() {
  const items = [...PROJECTS, ...PROJECTS];
  return (
    <div
      className="marquee group relative overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label="Clients"
    >
      <ul className="marquee-track flex w-max items-center gap-14">
        {items.map((p, i) => (
          <li key={`${p.slug}-${i}`} aria-hidden={i >= PROJECTS.length ? true : undefined}>
            <Link
              href={`/projects/${p.slug}`}
              tabIndex={i >= PROJECTS.length ? -1 : undefined}
              className="font-display text-[1.6rem] font-bold whitespace-nowrap text-navy/40 transition-all duration-300 hover:text-steel hover:scale-105 dark:text-white/50 dark:hover:text-cyan dark:hover:drop-shadow-[0_0_12px_#00e5ff]"
            >
              {p.client}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
