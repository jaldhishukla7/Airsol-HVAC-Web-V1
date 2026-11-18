"use client";

/** Renders the current year on the client so the copyright never goes stale. */
export function CopyrightYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
