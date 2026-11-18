"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

function subscribe(callback: () => void) {
  if (typeof document === "undefined") return () => {};
  const root = document.documentElement;
  const observer = new MutationObserver(callback);
  observer.observe(root, { attributes: true, attributeFilter: ["class"] });
  window.addEventListener("storage", callback);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

export function ThemeToggle({
  className,
  variant = "icon",
}: {
  className?: string;
  variant?: "icon" | "full";
}) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !root.classList.contains("dark");
    if (nextDark) {
      root.classList.add("dark");
      try {
        localStorage.setItem("airsol-theme", "dark");
      } catch {
        // Ignore localStorage quota or access errors
      }
    } else {
      root.classList.remove("dark");
      try {
        localStorage.setItem("airsol-theme", "light");
      } catch {
        // Ignore localStorage quota or access errors
      }
    }
  };

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={cn(
          "flex w-full items-center justify-between rounded-md border border-line-dark bg-navy-800/80 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-800",
          className
        )}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span className="flex items-center gap-2">
          {isDark ? (
            <Sun className="size-4 text-orange" strokeWidth={1.75} />
          ) : (
            <Moon className="size-4 text-cyan" strokeWidth={1.75} />
          )}
          <span>{isDark ? "Dark theme: Active" : "Light theme: Active"}</span>
        </span>
        <span className="text-xs text-mist underline">
          {isDark ? "Switch to Light" : "Switch to Dark"}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative grid size-9 sm:size-10 place-items-center rounded-md border border-line bg-white/90 text-graphite transition-all hover:border-steel hover:bg-ice hover:text-navy focus-visible:outline-none dark:border-line-dark dark:bg-navy-800/90 dark:text-mist dark:hover:border-cyan dark:hover:bg-navy-900 dark:hover:text-white",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="size-4 sm:size-5 text-orange transition-transform duration-200 hover:rotate-45" strokeWidth={1.75} />
      ) : (
        <Moon className="size-4 sm:size-5 text-steel transition-transform duration-200 hover:-rotate-12 dark:text-mist" strokeWidth={1.75} />
      )}
    </button>
  );
}
