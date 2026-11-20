"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Section columns of the AHU drawing, in SVG viewBox units (640 × 340). */
const STAGES = [
  {
    id: "fresh",
    label: "Fresh Air & Mixing Chamber",
    telemetry: "AIR MIX: 80% RET / 20% OA • AMBIENT: 34°C",
    x0: 20,
    x1: 80,
    text: "Outdoor air enters through aerodynamic weather louvres and mixes with return air in precise proportions controlled by modulating motorized dampers.",
  },
  {
    id: "pre",
    label: "Pre-Filter Stage (G4)",
    telemetry: "MERV 8 (G4) • DELTA P: 60 Pa • ARRESTANCE: 90%",
    x0: 80,
    x1: 128,
    text: "Heavy-duty pleated pre-filters capture coarse particulate matter (PM10), extending the lifespan of fine filters and cooling coils downstream.",
  },
  {
    id: "fine",
    label: "Fine Bag Filter (F7/F9)",
    telemetry: "MERV 14 (F8) • DELTA P: 120 Pa • EU-7 STANDARD",
    x0: 128,
    x1: 190,
    text: "Deep-pocket synthetic media captures sub-micron dust, smoke, and pollen before air enters thermal conditioning coils and the blower.",
  },
  {
    id: "coil",
    label: "Cooling & Dehumidification Coil",
    telemetry: "CHILLED WATER 7°C / 12°C • 14°C OFF-COIL • STAINLESS PAN",
    x0: 190,
    x1: 262,
    text: "Multi-row copper tubes with mechanically bonded aluminum fins cool and dehumidify incoming air. Condensate drains seamlessly through a sloping stainless pan.",
  },
  {
    id: "fan",
    label: "Centrifugal Impeller Blower",
    telemetry: "DUTY: 18,500 CFM • TOTAL STATIC: 450 Pa • VFD CONTROLLED",
    x0: 262,
    x1: 440,
    text: "High-efficiency backward-curved or plug fan dynamically balanced to ISO 1940 Grade G2.5, delivering uniform static pressure across the distribution duct.",
  },
  {
    id: "hepa",
    label: "HEPA Terminal Stage (H14)",
    telemetry: "EFFICIENCY: 99.995% @ 0.3μm • ISO 14644 CLASS 5 COMPLIANT",
    x0: 440,
    x1: 500,
    text: "Gel-sealed or gasketed H14 HEPA filters provide certified particulate barrier for pharmaceutical, hospital OT, and cleanroom environments.",
  },
  {
    id: "supply",
    label: "Conditioned Supply Air Outlet",
    telemetry: "VELOCITY: 5.2 m/s • NOISE: < 55 dBA • LAMINAR DISTRIBUTION",
    x0: 500,
    x1: 580,
    text: "Ultra-pure, thermally conditioned laminar airflow discharges into the ducted building distribution network with acoustic attenuation.",
  },
] as const;

const VB_W = 640;
const VB_H = 340;
const TOP = 96;
const BOTTOM = 286;

/**
 * Interactive layer over the AHU drawing: hotspots for each section, an
 * aerodynamic highlight that glides between them, live telemetry metrics,
 * and an engineered caption panel.
 */
export function HeroSchematic({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(6);
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
    const id = window.setInterval(() => setActive((i) => (i + 1) % STAGES.length), 3400);
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
      <div className="relative rounded-xl border border-cyan/20 bg-navy-950/40 p-2 shadow-[0_0_35px_rgba(0,180,216,0.12)] backdrop-blur-sm">
        {children}

        {/* Aerodynamic highlight that glides to the active section */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute rounded-md border-2 border-cyan bg-cyan/15 shadow-[0_0_28px_rgba(0,229,255,0.4)]"
          initial={false}
          animate={{ left: pct(stage.x0, VB_W), width: pct(stage.x1 - stage.x0, VB_W) }}
          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 280, damping: 28 }}
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
                "absolute cursor-pointer rounded-md outline-offset-0 transition-colors hover:bg-cyan/10 focus-visible:outline-cyan",
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

      {/* Engineering Caption & Real-time Telemetry Panel */}
      <div className="relative mx-auto mt-3.5 min-h-[120px] max-w-[640px] rounded-xl border border-cyan/25 bg-navy-900/90 p-4.5 shadow-[0_8px_24px_rgba(4,12,23,0.5)] backdrop-blur-md">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={stage.id}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            aria-live="polite"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
              <p className="flex items-center gap-2.5 font-display text-lg font-bold text-white sm:text-xl">
                <span className="rounded bg-cyan/20 px-1.5 py-0.5 font-mono text-xs font-semibold text-cyan tabular-nums">
                  STAGE {active + 1}/{STAGES.length}
                </span>
                {stage.label}
              </p>
              <span className="font-mono text-[11px] font-medium tracking-wide text-cyan-light">
                {stage.telemetry}
              </span>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{stage.text}</p>
          </motion.div>
        </AnimatePresence>

        {/* Stage progress timeline dots */}
        <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2.5" aria-hidden>
          <span className="font-mono text-[10px] tracking-wider text-mist/70 uppercase">
            Interactive AHU Cross-Section • Click stage to inspect
          </span>
          <div className="flex gap-1.5">
            {STAGES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => pick(i)}
                aria-label={`Jump to stage ${i + 1}: ${s.label}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === active ? "w-6 bg-cyan shadow-[0_0_8px_#00e5ff]" : "w-2 bg-white/25 hover:bg-white/40",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
