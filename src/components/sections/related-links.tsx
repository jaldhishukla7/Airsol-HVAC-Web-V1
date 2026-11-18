import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { RelatedLink } from "@content/types";

export function RelatedLinks({ links, title = "Related" }: { links: RelatedLink[]; title?: string }) {
  return (
    <nav aria-labelledby="related-title" className="rounded-md border border-line bg-white p-5">
      <h2 id="related-title" className="font-display text-xl font-semibold">
        {title}
      </h2>
      <ul className="mt-3 divide-y divide-line">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="group flex items-center justify-between gap-3 py-3 text-[15px] font-medium text-steel"
            >
              <span className="link-underline">{l.label}</span>
              <ArrowRight
                aria-hidden
                strokeWidth={1.5}
                className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
