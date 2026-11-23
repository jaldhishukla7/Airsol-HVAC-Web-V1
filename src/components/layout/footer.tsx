import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { CopyrightYear } from "@/components/layout/copyright-year";
import { Logo } from "@/components/layout/logo";
import { FOOTER_NAV, LEGAL_NAV } from "@/lib/nav";
import { LOCATIONS, SITE, mailto } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-cyan/20 bg-[#040C18] text-slate-300">
      {/* Top hairline accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr]">
        {/* Left Column: Brand & Direct Contact */}
        <div>
          <Logo tone="dark" className="h-10 w-auto" />
          <p className="mt-5 max-w-sm font-display text-2xl font-bold tracking-tight text-white">
            {SITE.tagline}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
            {SITE.name} is a {SITE.legalForm.toLowerCase()}: an HVAC manufacturer and engineering contractor serving
            India, the UAE, the USA and international markets.
          </p>

          <ul className="mt-7 space-y-3.5 text-sm">
            {SITE.phones.map((p) => (
              <li key={p.tel}>
                <a
                  href={`tel:${p.tel}`}
                  className="inline-flex items-center gap-3 no-underline text-slate-300 transition-colors hover:text-cyan"
                >
                  <Phone className="size-4 shrink-0 text-cyan" strokeWidth={1.5} aria-hidden />
                  <span className="font-mono">{p.display}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={mailto("Enquiry from website")}
                className="inline-flex items-center gap-3 no-underline text-slate-300 transition-colors hover:text-cyan"
              >
                <Mail className="size-4 shrink-0 text-cyan" strokeWidth={1.5} aria-hidden />
                <span>{SITE.email}</span>
              </a>
            </li>
            {LOCATIONS.map((loc) => (
              <li key={loc.id} className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" strokeWidth={1.5} aria-hidden />
                <span className="text-sm">
                  <span className="block font-semibold text-white">{loc.label}</span>
                  <span className="text-slate-400">{loc.addressLines.join(", ")}</span>
                  {loc.mapUrl ? (
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex w-fit items-center gap-1 text-xs font-semibold text-cyan no-underline transition-colors hover:text-white"
                    >
                      View on Google Maps &rarr;<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: 4 Category Navigation Columns */}
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {FOOTER_NAV.map((group) => (
            <div key={group.heading}>
              <p className="font-display text-base font-bold tracking-tight text-white">
                {group.heading}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-block no-underline text-slate-400 transition-all duration-200 hover:text-cyan hover:translate-x-0.5"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-white/10 bg-[#030914]">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; <CopyrightYear /> {SITE.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {LEGAL_NAV.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="no-underline text-slate-400 transition-colors hover:text-cyan"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
