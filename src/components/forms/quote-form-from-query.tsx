"use client";

import { useSearchParams } from "next/navigation";
import { PROJECT_TYPES, type ProjectType } from "@content/types";
import { QuoteForm } from "@/components/forms/quote-form";

/** Pre-selects the project type from ?type=… (used by calculator CTAs). */
export function QuoteFormFromQuery() {
  const type = useSearchParams().get("type");
  const valid = PROJECT_TYPES.some((p) => p.value === type) ? (type as ProjectType) : undefined;
  return <QuoteForm key={valid ?? "none"} defaultProjectType={valid} />;
}
