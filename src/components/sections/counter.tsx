"use client";

import { animate } from "motion";
import { useEffect, useRef } from "react";

/**
 * Counts up to `value` when first scrolled into view, using Motion's small
 * vanilla `animate`. The final number is server-rendered, so it is correct
 * without JavaScript and under reduced motion.
 */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let stop: (() => void) | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const controls = animate(0, value, {
          duration: 1.1,
          ease: "easeOut",
          onUpdate: (v) => {
            el.textContent = `${Math.round(v)}${suffix}`;
          },
        });
        stop = () => controls.stop();
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      stop?.();
    };
  }, [value, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
