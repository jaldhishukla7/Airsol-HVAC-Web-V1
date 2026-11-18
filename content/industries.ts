import type { IconName } from "@/components/icons/hvac-icons";
import type { Faq, RelatedLink } from "./types";

export type Industry = {
  slug: string;
  name: string;
  icon: IconName;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  challenges: { title: string; body: string }[];
  intro: string[];
  solutions: RelatedLink[];
  faqs: Faq[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "hotels-restaurants",
    name: "Hotels and restaurants",
    icon: "hotel",
    seoTitle: "HVAC & Kitchen Exhaust for Hotels and Restaurants | Airsol",
    metaDescription:
      "Kitchen exhaust, fresh air, ventilation and air handling for hotels, banquet halls, restaurants and central kitchens.",
    h1: "HVAC and kitchen ventilation for hotels and restaurants",
    summary: "Kitchen exhaust, make-up air and guest-area ventilation that keep heat, smoke and odour where they belong.",
    intro: [
      "Hospitality buildings combine some of the hardest HVAC loads with some of the most demanding guests. Kitchens produce heat, smoke and grease all day; banquet halls swing from empty to full in an hour; guest rooms and dining areas have to stay comfortable and free of kitchen smells.",
      "We work on the parts of these buildings where air movement matters most: the kitchen exhaust and make-up air, the fresh-air supply to guest and dining areas, toilet and service exhaust, and the ductwork that ties them together.",
    ],
    challenges: [
      { title: "Smoke and heat in the kitchen", body: "Hoods sized for the cooking line and exhaust fans selected for the full duct resistance." },
      { title: "Kitchen smells reaching guests", body: "Kitchens held at negative pressure relative to dining areas, with balanced make-up air." },
      { title: "Grease in the ductwork", body: "Sealed, heavier-gauge exhaust duct with access for cleaning, plus scheduled maintenance." },
      { title: "Fresh air for crowded halls", body: "Treated fresh air sized for occupancy, delivered through the air-conditioning system." },
    ],
    solutions: [
      { label: "Commercial kitchen exhaust", href: "/services/commercial-kitchen-exhaust" },
      { label: "Blowers and fans", href: "/products/blowers-and-fans" },
      { label: "Air washers and TFA units", href: "/products/air-washers" },
      { label: "Maintenance and support", href: "/services/maintenance-support" },
    ],
    faqs: [
      {
        q: "Can you work on a running hotel kitchen?",
        a: "Yes, with work planned around service hours and phased so the kitchen can keep operating.",
      },
      {
        q: "Do you handle both the kitchen and the guest areas?",
        a: "Yes. Kitchen exhaust, make-up air and fresh air for guest areas work best when designed together.",
      },
    ],
  },
  {
    slug: "pharmaceutical-healthcare",
    name: "Pharmaceutical and healthcare",
    icon: "pharma",
    seoTitle: "Pharmaceutical & Hospital HVAC Solutions | Airsol",
    metaDescription:
      "Cleanroom HVAC, HEPA filtration, AHUs and pressure control for pharmaceutical plants, hospitals, operating theatres and laboratories.",
    h1: "HVAC for pharmaceutical and healthcare facilities",
    summary: "Controlled air for cleanrooms, operating theatres and laboratories: filtration, pressure cascades and stable conditions.",
    intro: [
      "In pharmaceutical plants and hospitals, air is part of the product and part of patient safety. Rooms must hold particle counts, temperature, humidity and pressure within defined limits, and the HVAC system must be documented well enough to support validation and audits.",
      "We design, manufacture and install the air handling units, HEPA filtration and ductwork for these spaces, and commission them so that room conditions and pressure differences are measured and recorded.",
    ],
    challenges: [
      { title: "Meeting the room classification", body: "Air-change rates and staged filtration up to HEPA terminals, chosen from the room data sheet." },
      { title: "Keeping contamination contained", body: "Pressure cascades set by balancing supply, return and exhaust in each room." },
      { title: "Stable humidity", body: "AHU coils selected for latent as well as sensible load." },
      { title: "Documentation", body: "Installation and commissioning records handed over for your validation team." },
    ],
    solutions: [
      { label: "Cleanroom HVAC", href: "/services/cleanroom-hvac" },
      { label: "HEPA filtration", href: "/products/hepa-filtration" },
      { label: "Air handling units", href: "/products/air-handling-units" },
      { label: "AHU installation and commissioning", href: "/services/ahu-installation-commissioning" },
    ],
    faqs: [
      {
        q: "Do you work on hospital operating theatres?",
        a: "Yes. Operating theatres use the same principles as cleanrooms: filtered supply, controlled airflow patterns and pressure relative to adjoining spaces.",
      },
      {
        q: "Can you upgrade an existing pharmaceutical HVAC system?",
        a: "Yes. We start by surveying and measuring the existing system against the room requirements.",
      },
    ],
  },
  {
    slug: "food-processing",
    name: "Food processing",
    icon: "food",
    seoTitle: "HVAC & Ventilation for Food Processing Plants | Airsol",
    metaDescription:
      "Ventilation, filtration, fresh air and exhaust for food processing, packaging and storage areas, designed for hygiene and heat removal.",
    h1: "Ventilation and air handling for food processing",
    summary: "Clean, filtered air for processing and packing rooms, and exhaust for cooking, frying and steam.",
    intro: [
      "Food processing plants need air that is clean enough not to contaminate the product, and enough of it to remove heat, steam and cooking fumes from production lines. Different areas of the same plant often need different treatment: a frying line needs heavy exhaust, a packing room needs filtered, positively pressurised air.",
      "We look at each area separately and design ventilation, filtration and exhaust to suit, using equipment that can be cleaned and maintained in a hygienic environment.",
    ],
    challenges: [
      { title: "Steam and cooking fumes", body: "Exhaust hoods and fans sized for the process, with make-up air." },
      { title: "Keeping packing areas clean", body: "Filtered supply air that holds clean rooms at positive pressure." },
      { title: "Heat on the production floor", body: "Ventilation sized for heat removal, with air washers where the climate suits." },
      { title: "Hygiene", body: "Equipment and ductwork with access for regular cleaning." },
    ],
    solutions: [
      { label: "Industrial ventilation", href: "/services/industrial-ventilation" },
      { label: "HEPA filtration", href: "/products/hepa-filtration" },
      { label: "Commercial kitchen exhaust", href: "/services/commercial-kitchen-exhaust" },
      { label: "Air washers and TFA units", href: "/products/air-washers" },
    ],
    faqs: [
      {
        q: "Can different rooms in our plant have different air treatment?",
        a: "Yes. Processing, packing and storage areas are usually designed separately and balanced against each other.",
      },
      {
        q: "Do you supply exhaust for frying and cooking lines?",
        a: "Yes, using the same principles as commercial kitchen exhaust, scaled to the process.",
      },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "factory",
    seoTitle: "Industrial Ventilation & Dust Collection for Manufacturing | Airsol",
    metaDescription:
      "Shop-floor ventilation, dust and fume extraction, air washers and blowers for manufacturing plants.",
    h1: "Ventilation and dust control for manufacturing plants",
    summary: "Heat removal, fresh air, and dust and fume extraction for production floors and process areas.",
    intro: [
      "Manufacturing floors deal with heat from machines and roofs, dust from cutting, grinding and handling, and fumes from welding, coating and chemical processes. The right answer is rarely a few more wall fans; it is a ventilation and extraction system designed around where these loads come from.",
      "We design and build that system, from capture hoods at the machine to the blower and collector at the end of the duct, and the fresh-air supply that replaces what is extracted.",
    ],
    challenges: [
      { title: "Hot shop floors", body: "Ventilation sized for heat removal, with air washers or fresh-air supply." },
      { title: "Dust at the machine", body: "Capture hoods, conveying duct and collectors designed together." },
      { title: "Fumes from processes", body: "Local exhaust at the source, discharged safely." },
      { title: "Equipment wear", body: "Blowers built for the air stream they handle." },
    ],
    solutions: [
      { label: "Dust collection", href: "/products/dust-collection" },
      { label: "Blowers and fans", href: "/products/blowers-and-fans" },
      { label: "Industrial ventilation", href: "/services/industrial-ventilation" },
      { label: "Air washers and TFA units", href: "/products/air-washers" },
    ],
    faqs: [
      {
        q: "Can you design extraction for a specific machine?",
        a: "Yes. We study how the machine releases dust or fumes and design a hood and duct connection for it.",
      },
      {
        q: "Will more exhaust fans fix a hot factory?",
        a: "Not always. Heat removal also depends on fresh-air supply and the air path through the building. A survey shows what is needed.",
      },
    ],
  },
  {
    slug: "commercial-buildings",
    name: "Commercial buildings",
    icon: "building",
    seoTitle: "HVAC Ducting, AHUs & Ventilation for Commercial Buildings | Airsol",
    metaDescription:
      "AHUs, ducting, fresh-air systems, toilet exhaust and basement ventilation for offices, malls and mixed-use buildings.",
    h1: "HVAC for offices, malls and commercial buildings",
    summary: "Air handling, ducting, fresh air and basement ventilation coordinated with the building's other services.",
    intro: [
      "Commercial buildings need HVAC that is comfortable for occupants, efficient to run and coordinated with every other service in the ceiling. Air handling units, ducted distribution, fresh-air supply, toilet exhaust and basement ventilation all have to be planned together and installed without clashes.",
      "We manufacture the AHUs and ducting, install them with our own teams and balance the system so each floor and zone receives its design airflow.",
    ],
    challenges: [
      { title: "Uneven comfort between zones", body: "Ducting sized per zone and balanced at commissioning." },
      { title: "Stale indoor air", body: "Treated fresh air delivered to each zone in the intended quantity." },
      { title: "Crowded ceilings", body: "Shop drawings coordinated with electrical, plumbing and fire services." },
      { title: "Basement fumes", body: "Mechanical basement ventilation with planned air paths." },
    ],
    solutions: [
      { label: "Air handling units", href: "/products/air-handling-units" },
      { label: "Ducting installation", href: "/services/hvac-ducting-installation" },
      { label: "Basement ventilation", href: "/services/basement-ventilation" },
      { label: "Maintenance and support", href: "/services/maintenance-support" },
    ],
    faqs: [
      {
        q: "Can you take on the HVAC package for a new building?",
        a: "Yes, from AHUs and ducting through to ventilation and commissioning, or any part of that scope.",
      },
      {
        q: "Do you coordinate with other contractors?",
        a: "Yes. Our shop drawings are coordinated with other services before fabrication.",
      },
    ],
  },
  {
    slug: "warehouses-industrial-facilities",
    name: "Warehouses and industrial facilities",
    icon: "warehouse",
    seoTitle: "Warehouse Ventilation & Industrial Air Management | Airsol",
    metaDescription:
      "Ventilation, air washers, roof and wall exhaust, and fresh-air systems for warehouses, logistics buildings and industrial sheds.",
    h1: "Ventilation for warehouses and industrial facilities",
    summary: "Large-volume air movement for tall sheds and storage buildings, sized for heat and the people working inside.",
    intro: [
      "Warehouses and industrial sheds are large, tall and often hot. Metal roofs absorb sun all day, and the air near the roof can be far warmer than at floor level. Without enough air movement, the working zone becomes uncomfortable and stored goods may be affected.",
      "We size ventilation for these buildings from their volume and heat load, and choose equipment that moves large quantities of air efficiently: axial fans, roof and wall exhausts, and air washers where the climate allows evaporative cooling.",
    ],
    challenges: [
      { title: "Heat under the roof", body: "High-level exhaust with low-level fresh-air inlets to create a through-draught." },
      { title: "Large air volumes", body: "Axial fans and air washers chosen for volume at low pressure." },
      { title: "Uneven conditions", body: "Inlets and outlets placed to sweep the whole floor." },
      { title: "Running costs", body: "Fans selected near their efficient operating point; staged operation where useful." },
    ],
    solutions: [
      { label: "Industrial ventilation", href: "/services/industrial-ventilation" },
      { label: "Air washers and TFA units", href: "/products/air-washers" },
      { label: "Blowers and fans", href: "/products/blowers-and-fans" },
      { label: "Tool: air changes per hour", href: "/tools#ach" },
    ],
    faqs: [
      {
        q: "How much ventilation does a warehouse need?",
        a: "It depends on the volume, the heat load and how the building is used. Our ACH tool turns a chosen rate into airflow; we recommend the rate after a survey.",
      },
      {
        q: "Are air washers suitable for warehouses?",
        a: "Often, in hot and dry weather. Their cooling effect drops when outdoor air is humid, so we check the local climate first.",
      },
    ],
  },
];

export const getIndustry = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);
