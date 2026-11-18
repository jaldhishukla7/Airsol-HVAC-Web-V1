import { Clock, MessageCircle } from "lucide-react";
import { LazyQuoteForm } from "@/components/forms/lazy-quote-form";
import { LocationsSection } from "@/components/sections/locations-section";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import { SITE, whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Airsol HVAC Industry | Airsol",
  description: `Contact Airsol HVAC Industry: ${SITE.phones.map((p) => p.display).join(", ")}, ${SITE.email}. Office location and map.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Contact", href: "/contact" }]}
        title="Contact Airsol"
        summary="Call either number, message us on WhatsApp, email our sales team, or send the form and we will come back to you."
      >
        {SITE.phones.map((p) => (
          <Button key={p.tel} asChild size="lg" variant="ghostDark">
            <a href={`tel:${p.tel}`}>{p.display}</a>
          </Button>
        ))}
        <Button asChild size="lg">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden strokeWidth={1.5} />
            WhatsApp us<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Button>
      </PageHeader>

      <LocationsSection />

      <section aria-labelledby="message-title" className="blueprint border-t border-line bg-ice">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 id="message-title" className="font-display text-4xl font-semibold">
              Send a message
            </h2>
            <p className="mt-3 max-w-[46ch] text-graphite">
              Tell us what you need. If you have drawings or specifications, mention them and we will ask for them by
              email.
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <Clock className="size-4 text-steel" strokeWidth={1.5} aria-hidden />
              {SITE.hours.value}
            </p>
          </div>
          <div className="relative rounded-xl border border-line bg-white p-5 sm:p-8">
            <LazyQuoteForm defaultProjectType="other" />
          </div>
        </div>
      </section>
    </>
  );
}
