"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Section columns of the AHU drawing, in SVG viewBox units (640 × 340). */
const STAGES = [
  { id: "fresh", label: "Fresh air", x0: 20, x1: 80, text: "Outdoor air enters through a louvre and mixes with return air in the proportion the design calls for." },
  { id: "pre", label: "Pre-filter", x0: 80, x1: 128, text: "A coarse filter catches larger dust and protects the coil and the finer filters downstream." },
  { id: "fine", label: "Fine filter", x0: 128, x1: 190, text: "Bag or panel filters capture finer particles before the air reaches the coil and fan." },
  { id: "coil", label: "Coil", x0: 190, x1: 262, text: "A chilled-water, hot-water or DX coil cools, heats and dehumidifies the air. Condensate drains to the pan." },
  { id: "fan", label: "Fan", x0: 262, x1: 440, text: "A centrifugal fan selected for the design airflow at the system's total static pressure, including loaded filters." },
  { id: "hepa", label: "HEPA", x0: 440, x1: 500, text: "Final filtration for cleanrooms and critical areas, specified to the room classification." },
  { id: "supply", label: "Supply", x0: 500, x1: 580, text: "Conditioned air leaves for the duct system at the design flow and pressure." },
] as const;

const VB_W = 640;
const VB_H = 340;
const TOP = 96;
const BOTTOM = 286;

/**
 * Interactive layer over the AHU drawing: hotspots for each section, a
 * highlight that glides between them and a caption panel. After page load it
 * tours the sections automatically until the visitor picks one. Looping
 * animations pause while the hero is off-screen.
 */
export function HeroSchematic({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(4);
  const [touring, setTouring] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  // Start the looping animations shortly after load, and pause off-screen.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ready = false;
    let visible = true;
    const sync = () => el.setAttribute("data-play", String(ready && visible));
    const start = () => {
      ready = true;
      sync();
    };
    let t: number | undefined;
    if (document.readyState === "complete") t = window.setTimeout(start, 400);
    else window.addEventListener("load", () => (t = window.setTimeout(start, 400)), { once: true });
    const io = new IntersectionObserver(([e]) => {
      visible = Boolean(e?.isIntersecting);
      sync();
    });
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  // Auto-tour through the stages until the visitor interacts.
  useEffect(() => {
    if (!touring || reduce) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % STAGES.length), 3200);
    return () => window.clearInterval(id);
  }, [touring, reduce]);

  const pick = useCallback((i: number) => {
    setTouring(false);
    setActive(i);
  }, []);

  const stage = STAGES[active]!;
  const pct = (v: number, total: number) => `${(v / total) * 100}%`;

  return (
    <div ref={ref} data-play="false" className="hero-schematic relative mx-auto w-full max-w-[640px]">
      <div className="relative">
        {children}
        {/* Highlight that glides to the active section */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute rounded-[3px] border border-cyan bg-cyan/10 shadow-[0_0_24px_rgb(0_180_216/0.35)]"
          initial={false}
          animate={{ left: pct(stage.x0, VB_W), width: pct(stage.x1 - stage.x0, VB_W) }}
          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 30 }}
          style={{ top: pct(TOP, VB_H), height: pct(BOTTOM - TOP, VB_H) }}
        />
        {/* Hotspots */}
        <div role="group" aria-label="Sections of an air handling unit" className="absolute inset-0">
          {STAGES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={i === active}
              aria-label={s.label}
              onMouseEnter={() => pick(i)}
              onFocus={() => pick(i)}
              onClick={() => pick(i)}
              className={cn(
                "absolute cursor-pointer rounded-[3px] outline-offset-0 transition-colors hover:bg-white/5",
              )}
              style={{
                left: pct(s.x0, VB_W),
                width: pct(s.x1 - s.x0, VB_W),
                top: pct(TOP, VB_H),
                height: pct(BOTTOM - TOP, VB_H),
              }}
            >
              {i === active ? null : (
                <span aria-hidden className="absolute top-2 left-1/2 size-2 -translate-x-1/2 rounded-full bg-cyan/70">
                  <span className="absolute inset-0 animate-ping rounded-full bg-cyan/60 [animation-duration:2.2s]" />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Caption for the active section */}
      <div className="relative mx-auto mt-2 min-h-[104px] max-w-[560px] rounded-lg border border-white/15 bg-navy-800/70 p-4 backdrop-blur-sm sm:min-h-[92px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={stage.id}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            aria-live="polite"
          >
            <p className="flex items-center gap-2 font-display text-xl font-semibold text-white">
              <span className="text-sm font-medium text-cyan tabular-nums">
                {active + 1}/{STAGES.length}
              </span>
              {stage.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-mist">{stage.text}</p>
          </motion.div>
        </AnimatePresence>
        <div className="absolute right-3 bottom-3 flex gap-1.5" aria-hidden>
          {STAGES.map((s, i) => (
            <span
              key={s.id}
              className={cn("h-1 rounded-full transition-all duration-300", i === active ? "w-5 bg-cyan" : "w-1.5 bg-white/25")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
