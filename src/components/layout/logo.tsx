import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Uses the existing Airsol logo (from the previous website).
 * TODO_CONFIRM: supply an SVG or transparent PNG logo for sharper rendering on dark backgrounds.
 */
export function Logo({ className, plate = false }: { className?: string; plate?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${SITE.name} home`}
      className={cn("inline-flex shrink-0 items-center transition-all", plate && "rounded-md bg-white px-3 py-2")}
    >
      <Image
        src="/images/airsol-logo.webp"
        alt={`${SITE.name} logo`}
        width={809}
        height={308}
        priority
        sizes="140px"
        className={cn("h-10 w-auto", className)}
      />
    </Link>
  );
}
