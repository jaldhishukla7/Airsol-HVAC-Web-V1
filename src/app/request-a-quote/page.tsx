import { Clock, FileText, Mail, Phone } from "lucide-react";
import { Suspense } from "react";
import { QuoteForm } from "@/components/forms/quote-form";
import { QuoteFormFromQuery } from "@/components/forms/quote-form-from-query";
import { PageHeader } from "@/components/sections/page-header";
import { pageMetadata } from "@/lib/metadata";
import { SITE, mailto } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Request an HVAC Quote | Airsol",
  description:
    "Request a quote for AHUs, ducting, kitchen exhaust, cleanroom HVAC, industrial or basement ventilation from Airsol HVAC Industry.",
  path: "/request-a-quote",
});

export default function RequestQuotePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Request a quote", href: "/request-a-quote" }]}
        title="Request a quote"
        summary="Tell us about your project. The more we know about the application, airflow and layout, the more specific our first response can be."
      />
      <div className="container-x grid gap-12 py-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
        <div className="relative rounded-lg border border-line bg-white p-5 sm:p-8">
          <Suspense fallback={<QuoteForm />}>
            <QuoteFormFromQuery />
          </Suspense>
        </div>
        <aside className="space-y-6">
          <div className="rounded-md border border-line bg-ice p-6">
            <h2 className="font-display text-2xl font-semibold">What happens next</h2>
            <ol className="mt-4 space-y-4 text-[15px] text-graphite">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-steel" strokeWidth={1.5} aria-hidden />
                Your request goes to our sales team at {SITE.email}.
              </li>
              <li className="flex gap-3">
                <FileText className="mt-0.5 size-5 shrink-0 text-steel" strokeWidth={1.5} aria-hidden />
                We reply to confirm the scope and ask for drawings or data we need.
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-steel" strokeWidth={1.5} aria-hidden />
                Our engineers prepare a proposal, with a site visit where it helps.
              </li>
            </ol>
          </div>
          <div className="rounded-md border border-line p-6">
            <h2 className="font-display text-2xl font-semibold">Have drawings?</h2>
            <p className="mt-2 text-[15px] text-graphite">
              Email layouts, room data sheets or specifications to{" "}
              <a href={mailto("Drawings for quote")} className="font-semibold text-steel underline">
                {SITE.email}
              </a>{" "}
              and mention your name so we can match them to this request.
            </p>
            <a href={`tel:${SITE.phone.tel}`} className="mt-4 inline-flex items-center gap-2 font-semibold text-navy hover:text-steel">
              <Phone className="size-4" strokeWidth={1.5} aria-hidden />
              {SITE.phone.display}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
