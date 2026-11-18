import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { CopyrightYear } from "@/components/layout/copyright-year";
import { Logo } from "@/components/layout/logo";
import { FOOTER_NAV, LEGAL_NAV } from "@/lib/nav";
import { LOCATIONS, SITE, mailto } from "@/lib/site";

export function Footer() {
  return (
    <footer className="on-dark blueprint-dark relative text-mist">
      {/* Duct-profile divider: a flanged duct seam running across the top edge. */}
      <svg aria-hidden viewBox="0 0 1200 16" preserveAspectRatio="none" className="block h-4 w-full">
        <path d="M0 8h1200" stroke="#00B4D8" strokeOpacity=".35" strokeDasharray="2 10" />
      </svg>
      <div className="container-x grid gap-12 py-14 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Logo plate className="h-9" />
          <p className="mt-5 max-w-sm font-display text-2xl font-semibold text-white">{SITE.tagline}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            {SITE.name} is a {SITE.legalForm.toLowerCase()}: an HVAC manufacturer and engineering contractor serving
            India, the UAE, the USA and other international markets.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {SITE.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="inline-flex items-center gap-3 hover:text-white">
                  <Phone className="size-4 text-cyan" strokeWidth={1.5} aria-hidden />
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={mailto("Enquiry from website")} className="inline-flex items-center gap-3 hover:text-white">
                <Mail className="size-4 text-cyan" strokeWidth={1.5} aria-hidden />
                {SITE.email}
              </a>
            </li>
            {LOCATIONS.map((loc) => (
              <li key={loc.id} className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" strokeWidth={1.5} aria-hidden />
                <span>
                  <span className="block text-white">{loc.label}</span>
                  {loc.addressLines.join(", ")}
                  {loc.mapUrl ? (
                    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-cyan hover:underline">
                      View on map<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {FOOTER_NAV.map((group) => (
            <div key={group.heading}>
              <p className="font-display text-lg font-semibold text-white">{group.heading}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link-underline hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="border-t border-line-dark">
        <div className="container-x flex flex-col gap-3 py-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {SITE.name}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {LEGAL_NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline hover:text-white">
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
