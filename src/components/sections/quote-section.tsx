import type { ProjectType } from "@content/types";
import { LazyQuoteForm } from "@/components/forms/lazy-quote-form";
import { SITE } from "@/lib/site";

/** Compact quote form placed at the bottom of product and service pages. */
export function QuoteSection({ projectType, subject }: { projectType?: ProjectType; subject: string }) {
  return (
    <section aria-labelledby="quote-title" className="blueprint border-t border-line bg-ice">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 id="quote-title" className="font-display text-4xl leading-tight font-semibold">
            Request a quote for {subject.toLowerCase()}
          </h2>
          <p className="mt-3 max-w-[48ch] text-[16px] leading-relaxed text-graphite">
            Tell us about the application. If you have drawings, mention them and we will ask for them by email.
          </p>
          <p className="mt-6 text-sm text-muted">
            Prefer to talk?{" "}
            <a href={`tel:${SITE.phone.tel}`} className="font-semibold text-steel underline">
              {SITE.phone.display}
            </a>
          </p>
        </div>
        <div className="relative rounded-lg border border-line bg-white p-5 sm:p-7">
          <LazyQuoteForm variant="compact" defaultProjectType={projectType} />
        </div>
      </div>
    </section>
  );
}
