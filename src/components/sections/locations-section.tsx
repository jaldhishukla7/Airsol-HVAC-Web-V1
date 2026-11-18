import { Mail, MapPin, Navigation, Phone } from "lucide-react";
import { LOCATIONS, SITE, mailto } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Office locations with embedded Google Maps. Add more entries to LOCATIONS in site.ts. */
export function LocationsSection({ className, headingLevel = "h2" }: { className?: string; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <section aria-labelledby="locations-title" className={cn("container-x py-20", className)}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <H id="locations-title" className="font-display text-4xl font-semibold sm:text-[2.75rem]">
            Find us
          </H>
          <p className="mt-3 max-w-[60ch] text-muted">
            Visit our office and manufacturing facility, or call either of our numbers. We work with clients across
            India, the UAE and international markets.
          </p>
        </div>
      </div>
      <div className="mt-10 space-y-8">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.id}
            className="grid overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_0_rgb(11_37_69/0.04)] lg:grid-cols-[380px_1fr]"
          >
            <div className="on-dark blueprint-dark flex flex-col gap-6 p-7 text-white">
              <div>
                <p className="text-sm font-medium text-cyan">{loc.label}</p>
                <p className="mt-1 font-display text-3xl font-semibold text-white">{loc.role}</p>
              </div>
              <address className="flex gap-3 text-[15px] leading-relaxed text-mist not-italic">
                <MapPin className="mt-1 size-5 shrink-0 text-cyan" strokeWidth={1.5} aria-hidden />
                {loc.mapUrl ? (
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-colors hover:text-white"
                  >
                    {loc.addressLines.map((l) => (
                      <span key={l} className="block group-hover:underline">
                        {l}
                      </span>
                    ))}
                  </a>
                ) : (
                  <span>
                    {loc.addressLines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </span>
                )}
              </address>
              <ul className="space-y-3 text-[15px]">
                {SITE.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`} className="group flex items-center gap-3 hover:text-cyan">
                      <Phone className="size-5 shrink-0 text-cyan" strokeWidth={1.5} aria-hidden />
                      <span>
                        <span className="block font-semibold text-white group-hover:text-cyan">{p.display}</span>
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href={mailto("Enquiry from website")} className="flex items-center gap-3 font-semibold hover:text-cyan">
                    <Mail className="size-5 shrink-0 text-cyan" strokeWidth={1.5} aria-hidden />
                    {SITE.email}
                  </a>
                </li>
              </ul>
              {loc.mapUrl ? (
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-md bg-orange px-5 py-3 text-[15px] font-semibold text-navy transition-colors hover:bg-orange-600"
                >
                  <Navigation className="size-4" strokeWidth={1.5} aria-hidden />
                  Get directions
                  <span className="sr-only"> (opens Google Maps in a new tab)</span>
                </a>
              ) : null}
            </div>
            <div className="relative min-h-[340px] bg-ice lg:min-h-[460px]">
              {loc.mapEmbed ? (
                <iframe
                  src={loc.mapEmbed}
                  title={`Map showing the Airsol ${loc.role.toLowerCase()} in ${loc.label}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0 grayscale-[35%] transition-[filter] duration-500 hover:grayscale-0"
                />
              ) : null}
              {loc.mapUrl ? (
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-lg bg-navy/90 px-3.5 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur transition hover:bg-orange hover:text-navy"
                >
                  <Navigation className="size-3.5 text-cyan" strokeWidth={1.5} aria-hidden />
                  Open in Google Maps
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
