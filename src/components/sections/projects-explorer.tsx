"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import type { Project, Sector } from "@content/projects";
import { ProjectCard } from "@/components/sections/project-card";
import { cn } from "@/lib/utils";

/** Filter chips plus an animated, re-flowing grid of project cards. */
export function ProjectsExplorer({ projects, sectors }: { projects: Project[]; sectors: Sector[] }) {
  const [filter, setFilter] = useState<string>("all");
  const reduce = useReducedMotion();
  const shown = filter === "all" ? projects : projects.filter((p) => p.sector === filter);
  const chips = [
    { id: "all", label: "All projects", count: projects.length },
    ...sectors.map((s) => ({ id: s.id, label: s.label, count: projects.filter((p) => p.sector === s.id).length })),
  ];

  return (
    <div>
      <div role="group" aria-label="Filter projects by sector" className="flex flex-wrap gap-2">
        {chips.map((c) => {
          const on = filter === c.id;
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(c.id)}
              className={cn(
                "relative rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                on ? "border-navy text-white" : "border-line text-graphite hover:border-steel hover:text-steel",
              )}
            >
              {on ? (
                <motion.span
                  layoutId="chip-bg"
                  className="absolute inset-0 -z-0 rounded-full bg-navy"
                  transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
              <span className="relative">
                {c.label} <span className={on ? "text-cyan" : "text-muted"}>{c.count}</span>
              </span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {shown.length} projects
      </p>
      <motion.ul layout={!reduce} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((p) => (
            <motion.li
              key={p.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} headingLevel="h2" />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
