import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Airsol Logo with transparent background.
 * Automatically adapts between light and dark modes:
 * - Light surfaces: Original graphite "Air" + red "SOL" on transparent background.
 * - Dark surfaces: Crisp white "Air" + red "SOL" on transparent background.
 */
export function Logo({
  className,
  tone = "auto",
}: {
  className?: string;
  tone?: "auto" | "light" | "dark";
  /** @deprecated Background plates are removed so the logo is always transparent */
  plate?: boolean;
}) {
  const isAuto = tone === "auto";
  const isDark = tone === "dark";
  const isLight = tone === "light";

  return (
    <Link
      href="/"
      aria-label={`${SITE.name} home`}
      className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90"
    >
      {(isAuto || isLight) && (
        <Image
          src="/images/airsol-logo.webp"
          alt={`${SITE.name} logo`}
          width={809}
          height={300}
          priority
          sizes="140px"
          className={cn("h-10 w-auto object-contain", isAuto && "dark:hidden", className)}
        />
      )}
      {(isAuto || isDark) && (
        <Image
          src="/images/airsol-logo-dark.webp"
          alt={`${SITE.name} logo`}
          width={809}
          height={300}
          priority
          sizes="140px"
          className={cn("h-10 w-auto object-contain", isAuto && "hidden dark:block", className)}
        />
      )}
    </Link>
  );
}
