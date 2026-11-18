/**
 * Airsol HVAC Industry – single source of truth for company facts.
 *
 * Every value the client still has to verify is wrapped in `todo()` and
 * carries `confirmed: false`. Search the codebase for "TODO_CONFIRM" to
 * find them all. Flip `confirmed` to `true` once the client signs off;
 * some values (e.g. the street address in JSON-LD) are only published
 * after confirmation.
 */

export type Confirmable<T> = {
  value: T;
  confirmed: boolean;
  /** Where the current value came from, so the client knows what to check. */
  note: string;
};

const todo = <T>(value: T, note: string): Confirmable<T> => ({
  value,
  confirmed: false, // TODO_CONFIRM
  note,
});

export const SITE = {
  name: "Airsol HVAC Industry",
  legalName: "Airsol HVAC Industry",
  legalForm: "Partnership Firm",
  shortName: "Airsol",
  tagline: "Engineered Air. Efficient Environments.",
  positioning: "HVAC manufacturer and HVAC engineering contractor",
  url: "https://www.airsolhvac.com",
  email: "sales@airsolhvac.com",
  /** Primary number: used for WhatsApp and the header call button. */
  phone: {
    display: "+91 81418 48212",
    tel: "+918141848212",
    whatsapp: "918141848212",
  },
  /** All public numbers. Contact names are from the previous website's contact page. */
  phones: [
    { display: "+91 81418 48212", tel: "+918141848212", whatsapp: "918141848212", name: "Saumil Shukla" },
    { display: "+91 79905 44540", tel: "+917990544540", whatsapp: "917990544540", name: "Swapnil Pancholi" },
  ],
  city: "Ahmedabad",
  locality: "Odhav",
  region: "Gujarat",
  country: "India",
  countryCode: "IN",

  /** TODO_CONFIRM: taken from the previous airsolhvac.com contact page. */
  address: todo(
    {
      streetAddress: "12, Maruti Estate, Opp. Hindustan Marble, GIDC Odhav",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "", // TODO_CONFIRM
      addressCountry: "IN",
    },
    "Street address copied from the old website. Confirm spelling and add the PIN code.",
  ),

  /** TODO_CONFIRM: the old About page says "Founded in 2019". */
  foundedYear: todo(2019, "Old About page states 2019. Confirm the year the firm started."),

  /** TODO_CONFIRM: Google Maps link used on the old website. */
  mapUrl: todo("https://maps.app.goo.gl/pK5wBCJXmsS5oNzA9", "Map pin from the old website."),

  /** TODO_CONFIRM: hours shown on the old website. */
  hours: todo("Monday to Saturday, 9:00 AM to 6:00 PM. Sunday closed.", "Hours from the old website."),

  /** TODO_CONFIRM: list only certifications the firm actually holds, with certificate numbers. */
  certifications: todo<string[]>([], "No certifications are published until supplied with evidence."),

  /** TODO_CONFIRM: add profile URLs the firm actually owns. */
  social: todo<{ label: string; href: string }[]>([], "Add LinkedIn / other official profiles if any."),

  markets: ["India", "UAE", "USA", "Other international markets"],
} as const;

export type Location = {
  id: string;
  /** Short label, e.g. "India". */
  label: string;
  role: string;
  addressLines: string[];
  /** Google Maps embed URL (Share → Embed a map → copy the src). */
  mapEmbed?: string;
  /** Google Maps link for "Get directions". */
  mapUrl?: string;
};

/**
 * Office and facility locations. The site is not tied to one city: every
 * location listed here appears on the home and contact pages with its own map.
 * To add the UAE office later, append an entry with its address and map embed.
 */
export const LOCATIONS: Location[] = [
  {
    id: "india",
    label: "India",
    role: "Head office and manufacturing facility",
    addressLines: [
      "12, Maruti Estate, Opp. Hindustan Marble",
      "GIDC Odhav, Ahmedabad",
      "Gujarat, India",
    ],
    // From the previous website's "Find location" map.
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9477033887633!2d72.64408087485096!3d23.025692316212574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87533ed6af2b%3A0xae93677830c59e51!2sAirsol%20HVAC%20industry!5e0!3m2!1sen!2sin!4v1696755166631!5m2!1sen!2sin",
    mapUrl: "https://maps.app.goo.gl/pK5wBCJXmsS5oNzA9",
  },
  // { id: "uae", label: "UAE", role: "Regional office", addressLines: ["…"], mapEmbed: "…", mapUrl: "…" },
];

/** Years in operation, computed from the single founding-year value. */
export function yearsInOperation(now: Date = new Date()): number {
  return Math.max(1, now.getFullYear() - SITE.foundedYear.value);
}

export const absoluteUrl = (path = "/") => new URL(path, SITE.url).toString();

export const mailto = (subject?: string) =>
  `mailto:${SITE.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const whatsappUrl = (text = "Hello Airsol, I would like to discuss an HVAC requirement.") =>
  `https://wa.me/${SITE.phone.whatsapp}?text=${encodeURIComponent(text)}`;

/**
 * Collects every unconfirmed value so the README / admin can list them.
 * Content files (projects, images) register their own items via `TODO_ITEMS`.
 */
export function unconfirmedSiteValues(): { key: string; note: string }[] {
  const out: { key: string; note: string }[] = [];
  for (const [key, v] of Object.entries(SITE) as [string, unknown][]) {
    if (typeof v === "object" && v !== null && "confirmed" in v && "note" in v) {
      const c = v as Confirmable<unknown>;
      if (!c.confirmed) out.push({ key, note: c.note });
    }
  }
  return out;
}
