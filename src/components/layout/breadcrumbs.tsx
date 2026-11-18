import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/layout/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href: string };

/** Visible breadcrumb trail plus BreadcrumbList JSON-LD. Home is added automatically. */
export function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const all = [{ label: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className={cn("flex flex-wrap items-center gap-1 text-[13px]", dark ? "text-mist" : "text-muted")}>
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1">
                {last ? (
                  <span aria-current="page" className={dark ? "text-white" : "text-navy"}>
                    {c.label}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className={cn("link-underline", dark ? "hover:text-white" : "hover:text-steel")}>
                      {c.label}
                    </Link>
                    <ChevronRight className="size-3.5" strokeWidth={1.5} aria-hidden />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
