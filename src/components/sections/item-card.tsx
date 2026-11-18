import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { HvacIcon, type IconName } from "@/components/icons/hvac-icons";
import { cn } from "@/lib/utils";

/** Card for a product, service or industry. The whole card is one link. */
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
  return (
    <Link
      href={href}
      data-spotlight
      className={cn(
        "hover-lift spotlight group relative flex h-full flex-col rounded-xl border border-line bg-white p-6",
        className,
      )}
    >
      <span className="flex items-center justify-between">
        <span className="card-icon grid size-12 place-items-center rounded-lg bg-ice text-steel group-hover:bg-navy group-hover:text-cyan">
          <HvacIcon name={icon} className="size-7" />
        </span>
        <ArrowUpRight
          aria-hidden
          strokeWidth={1.5}
          className="size-5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-steel"
        />
      </span>
      <H className="mt-5 font-display text-2xl leading-tight font-semibold">{title}</H>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{summary}</p>
    </Link>
  );
}
