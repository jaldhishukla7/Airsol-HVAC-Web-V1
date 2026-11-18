/**
 * Scroll reveals use CSS scroll-driven animations (see `.reveal` in
 * globals.css), so they cost no JavaScript. Browsers without
 * `animation-timeline` support simply show the content, and nothing animates
 * under prefers-reduced-motion.
 */
import { cn } from "@/lib/utils";

export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("reveal", className)}>{children}</div>;
}

export function Stagger({
  children,
  className,
  as = "ul",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "ul" | "div";
}) {
  const Comp = as;
  return <Comp className={cn("reveal-group", className)}>{children}</Comp>;
}

export function StaggerItem({
  children,
  className,
  as = "li",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "li" | "div";
}) {
  const Comp = as;
  return <Comp className={cn("reveal", className)}>{children}</Comp>;
}

export { Counter } from "./counter";
