"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { ProjectType } from "@content/types";

const QuoteForm = dynamic(() => import("@/components/forms/quote-form").then((m) => m.QuoteForm), {
  ssr: false,
  loading: () => <FormPlaceholder />,
});

function FormPlaceholder() {
  return (
    <div aria-hidden className="grid gap-4 sm:grid-cols-2">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="space-y-1.5">
          <div className="h-4 w-24 rounded-sm bg-ice" />
          <div className="h-11 rounded-md border border-line" />
        </div>
      ))}
      <div className="space-y-1.5 sm:col-span-2">
        <div className="h-4 w-28 rounded-sm bg-ice" />
        <div className="h-[92px] rounded-md border border-line" />
      </div>
      <div className="flex justify-end sm:col-span-2">
        <div className="h-12 w-48 rounded-md bg-orange/40" />
      </div>
    </div>
  );
}

/**
 * Loads the quote form (react-hook-form, zod and the server action client)
 * only when it comes within 600px of the viewport, keeping that JavaScript
 * off the critical path of product and service pages.
 */
export function LazyQuoteForm(props: { variant?: "full" | "compact"; defaultProjectType?: ProjectType }) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref}>{near ? <QuoteForm {...props} /> : <FormPlaceholder />}</div>;
}
