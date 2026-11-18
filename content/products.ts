import type { DetailPage } from "./types";

/**
 * Product pages. Copy describes what Airsol manufactures and how units are
 * engineered. No capacities, certifications or performance figures are
 * stated; those come from project-specific selections.
 */
export const PRODUCTS: DetailPage[] = [
  {
    slug: "air-handling-units",
    name: "Air Handling Units (AHU)",
    short: "Air handling units",
    icon: "ahu",
    seoTitle: "Air Handling Unit Manufacturer in India | Airsol",
    metaDescription:
      "Custom air handling units manufactured by Airsol for pharmaceutical, commercial and industrial HVAC. Sized to your airflow, static pressure and filtration needs.",
    h1: "Air handling units, built to your airflow and filtration brief",
    summary:
      "Double-skin and single-skin AHUs configured section by section, from fresh-air mixing to final filtration, for comfort, process and cleanroom applications.",
    image: { src: "/images/products/ahu-rooftop.webp", alt: "Modular air handling units installed on a building rooftop" },
    quoteProjectType: "ahu",
    sections: [
      {
        heading: "How we configure an AHU",
        paragraphs: [
          "An air handling unit is the part of an HVAC system that conditions air and moves it through the ductwork. It filters, cools or heats, and sometimes dehumidifies the air before a fan pushes it to the rooms it serves. Because every building asks something different of that air, we do not start from a catalogue model. We start from the application: what the space is used for, how much air it needs, what the air must be cleaned of, and what the ducted system will resist.",
          "From those inputs we arrange the sections in the order the air will meet them. A typical sequence is a mixing box for return and fresh air, a pre-filter, a fine filter, a cooling coil with a drain pan, an optional heating coil, the fan section and, where the brief calls for it, a terminal HEPA stage. Each section is drawn into a general arrangement drawing that you approve before fabrication begins.",
        ],
      },
      {
        heading: "Selecting the fan and coil",
        paragraphs: [
          "Two numbers decide most of an AHU's selection: the airflow it must deliver and the external static pressure of the duct system downstream. We take both from the design, add the internal losses of the filters and coils at their dirty condition, and select a fan that runs near its efficient operating point at that duty rather than at the edge of its curve.",
          "Coil selection follows the cooling or heating load, the entering air conditions and the chilled-water or refrigerant supply available on site. For pharmaceutical and process areas, where humidity matters as much as temperature, we check the coil's latent capacity and the face velocity across it so that condensate is carried to the drain pan and not into the airstream.",
        ],
      },
      {
        heading: "Construction details that matter on site",
        paragraphs: [
          "Panels, framework and access doors are chosen for the environment the unit will live in, whether that is a plant room, a rooftop or a process floor. Inspection and service access is planned in from the drawing stage so that filters can be changed and coils cleaned without dismantling the casing. Leakage, insulation thickness and the finish of internal surfaces are specified to match your project standard.",
          "After dispatch, our installation team can set, connect and commission the unit, measure delivered airflow and pressure drops, and hand over the readings with the as-installed drawings.",
        ],
      },
    ],
    specs: [
      { label: "Construction", value: "Single-skin or double-skin panels, per project specification" },
      { label: "Typical sections", value: "Mixing box, pre-filter, fine filter, cooling coil, heating coil, fan, HEPA terminal stage" },
      { label: "Fan", value: "Selected for the design airflow and total static pressure" },
      { label: "Coils", value: "Chilled water, hot water or DX, sized to the project load" },
      { label: "Filtration", value: "Staged filtration up to HEPA, as the application requires" },
      { label: "Access", value: "Hinged inspection doors and removable filter frames" },
      { label: "Drawings", value: "General arrangement drawing issued for approval before fabrication" },
    ],
    selectionInputs: [
      "Design airflow (CFM or CMH) and the share of fresh air",
      "External static pressure of the duct system",
      "Cooling or heating load and the chilled-water or DX source",
      "Required filtration stages and any cleanroom class",
      "Installation location, available footprint and access route",
    ],
    applications: [
      "Pharmaceutical production and cleanrooms",
      "Hospitals and healthcare facilities",
      "Commercial buildings and offices",
      "Hotels and banquet areas",
      "Manufacturing and process areas",
    ],
    faqs: [
      {
        q: "Do you make standard AHU models or only custom units?",
        a: "Each unit is configured to the project's airflow, static pressure, coil load and filtration stages. We issue a general arrangement drawing for your approval before fabrication starts.",
      },
      {
        q: "What information do you need to quote an AHU?",
        a: "Design airflow, fresh-air percentage, external static pressure, the cooling or heating load, the filtration stages required and where the unit will be installed. If you only have room sizes and usage, our engineering team can help derive these.",
      },
      {
        q: "Can you supply an AHU for a pharmaceutical cleanroom?",
        a: "Yes. For cleanroom work we design the AHU together with the room pressure cascade, filtration stages and air-change requirements. See our cleanroom HVAC service for how we approach those projects.",
      },
      {
        q: "Do you install and commission the AHUs you manufacture?",
        a: "Yes. We can set, connect, test and commission the unit, then hand over measured airflow and pressure readings.",
      },
    ],
    related: [
      { label: "AHU installation and commissioning", href: "/services/ahu-installation-commissioning" },
      { label: "Cleanroom HVAC", href: "/services/cleanroom-hvac" },
      { label: "HEPA filtration", href: "/products/hepa-filtration" },
      { label: "Article: selecting an AHU for a pharmaceutical facility", href: "/blogs/ahu-selection-pharmaceutical-facility" },
    ],
  },
  {
    slug: "hvac-ducting",
    name: "HVAC Ducting and Accessories",
    short: "HVAC ducting",
    icon: "duct",
    seoTitle: "HVAC Ducting Manufacturer & Installation | Airsol",
    metaDescription:
      "Rectangular and round GI ducting, fittings, dampers, grilles and diffusers fabricated in-house and installed by our own teams.",
    h1: "HVAC ducting and accessories, fabricated and installed",
    summary:
      "Rectangular and round ductwork, fittings, dampers, grilles and diffusers, made in our own facility and installed to the approved shop drawings.",
    image: { src: "/images/products/ducting-fittings.webp", alt: "Galvanised sheet-metal duct fittings and transitions" },
    quoteProjectType: "ducting",
    sections: [
      {
        heading: "Ducting is where airflow is won or lost",
        paragraphs: [
          "A well-selected fan can still under-deliver if the ductwork between it and the room adds more resistance than the design allowed for. Sharp elbows, abrupt transitions, undersized branches and leaking joints all eat into the static pressure the fan can provide. That is why we treat duct fabrication as an engineering task and not only a sheet-metal one.",
          "Every job starts from a duct layout sized for the airflow in each run. We prepare shop drawings that show sizes, gauges, fittings, supports and access panels, and we fabricate only after those drawings are approved.",
        ],
      },
      {
        heading: "What we fabricate",
        paragraphs: [
          "Our workshop produces rectangular ducts, round and spiral-style ducts, reducers, transitions, bends with turning vanes where needed, take-offs, plenums and collars. Material and gauge follow the application: galvanised steel for most supply, return and ventilation systems, and heavier or different materials for kitchen exhaust and corrosive or high-temperature duty, as the specification requires.",
          "We also supply and fit the accessories that make a duct system controllable and serviceable: volume control dampers, fire dampers where specified, non-return dampers, flexible connections, access doors, grilles, registers and diffusers. Insulation and acoustic lining are applied to the thickness your project calls for.",
        ],
      },
      {
        heading: "Installation and handover",
        paragraphs: [
          "Our installation teams hang and seal the ductwork, fix supports at the spacing the drawings show, and connect to the air handling units, fans and terminals. Before handover we check joints, run the system, balance branch flows with the dampers and record the readings.",
          "Because fabrication and installation are under one roof, changes found on site can be handled quickly, without waiting on a separate supplier.",
        ],
      },
    ],
    specs: [
      { label: "Duct types", value: "Rectangular, round, plenums, transitions, take-offs" },
      { label: "Material", value: "Galvanised steel as standard; other materials as specified" },
      { label: "Accessories", value: "Volume control dampers, non-return dampers, access doors, flexible connections" },
      { label: "Terminals", value: "Grilles, registers, linear and square diffusers" },
      { label: "Insulation", value: "Thermal and acoustic insulation to project thickness" },
      { label: "Drawings", value: "Shop drawings issued for approval before fabrication" },
    ],
    selectionInputs: [
      "HVAC layout or architectural drawings",
      "Airflow per zone or per terminal",
      "Required insulation and finish",
      "Ceiling void and routing constraints",
      "Site access and installation schedule",
    ],
    applications: [
      "Central air-conditioning supply and return",
      "Fresh-air and exhaust ventilation",
      "Commercial kitchen exhaust (to kitchen-duty specification)",
      "Basement and car-park ventilation",
      "Industrial process ventilation",
    ],
    faqs: [
      {
        q: "Do you only fabricate, or also install ducting?",
        a: "Both. We fabricate in our own facility and install with our own teams, which keeps drawings, fabrication and site changes in one place.",
      },
      {
        q: "Can you work from our consultant's drawings?",
        a: "Yes. We prepare shop drawings from the consultant's layout, issue them for approval and fabricate to the approved revision.",
      },
      {
        q: "Do you supply grilles, diffusers and dampers?",
        a: "Yes. We supply and fit the terminals and dampers needed to control and balance the system.",
      },
      {
        q: "Is kitchen exhaust duct made the same way?",
        a: "No. Kitchen exhaust ducts carry grease-laden air and are built to a heavier, sealed specification with cleaning access. See our commercial kitchen exhaust service.",
      },
    ],
    related: [
      { label: "Ducting installation", href: "/services/hvac-ducting-installation" },
      { label: "Industrial ventilation", href: "/services/industrial-ventilation" },
      { label: "Blowers and fans", href: "/products/blowers-and-fans" },
      { label: "Tool: air changes per hour calculator", href: "/tools#ach" },
    ],
  },
  {
    slug: "hepa-filtration",
    name: "Clean Room and HEPA Filtration Systems",
    short: "Clean Room",
    icon: "cleanroom",
    seoTitle: "Cleanroom HVAC & HEPA Filtration Solutions | Airsol",
    metaDescription:
      "Pre-filters, fine filters, HEPA housings and terminal filter modules for pharmaceutical, healthcare and process environments.",
    h1: "Clean room and staged air filtration for controlled environments",
    summary:
      "Clean rooms, pre-filters, fine filters and HEPA stages arranged for controlled environments, in AHUs, ducted housings and terminal modules.",
    image: { src: "/images/products/filter-panel.webp", alt: "Technician holding a pleated panel air filter" },
    quoteProjectType: "cleanroom",
    sections: [
      {
        heading: "Filtration is a sequence, not a single filter",
        paragraphs: [
          "A HEPA filter is designed to capture very fine particles, but it is also the most expensive filter in the system and the slowest to replace. If it is asked to catch coarse dust as well, it loads quickly and its pressure drop climbs. Good filtration design therefore stages the job: coarse pre-filters take the larger particles, fine filters take the next band, and the HEPA stage handles what remains.",
          "We arrange these stages in the air handling unit and, where the room requires it, at the terminal. The filter classes are taken from your process requirement and the cleanroom classification you are designing to, not chosen by habit.",
        ],
      },
      {
        heading: "Housings and terminal modules",
        paragraphs: [
          "Filters only work if air cannot bypass them. Our housings and frames are built to seal the filter against its seat and to allow safe removal when it is changed. Terminal HEPA modules are fitted at the ceiling of controlled rooms so that clean air is delivered directly into the space, and we can provide test ports where your validation protocol calls for filter integrity testing.",
          "For industrial applications where the aim is to protect equipment or the outdoor environment rather than a product, we combine filtration with our dust collection equipment.",
        ],
      },
      {
        heading: "Planning for the life of the filters",
        paragraphs: [
          "Each stage adds resistance that grows as the filter loads. We size the fan for the dirty-filter condition so that airflow holds up between changes, and we recommend differential pressure gauges across each stage so your maintenance team can see when a change is due rather than guessing.",
          "Our after-sales team can schedule filter inspections and replacements as part of a maintenance contract.",
        ],
      },
    ],
    specs: [
      { label: "Stages", value: "Pre-filter, fine filter, HEPA terminal or in-duct" },
      { label: "Filter class", value: "Selected to the project's process and cleanroom requirement" },
      { label: "Housings", value: "Sealed frames and housings for AHU, in-duct or ceiling terminal mounting" },
      { label: "Monitoring", value: "Differential pressure gauges across stages (recommended)" },
      { label: "Testing access", value: "Test ports where the validation protocol requires them" },
    ],
    selectionInputs: [
      "Room classification or process cleanliness requirement",
      "Airflow per room and the number of terminals",
      "Outdoor air conditions and dust load",
      "Validation and testing requirements",
      "Maintenance access constraints",
    ],
    applications: [
      "Pharmaceutical cleanrooms and controlled areas",
      "Hospital operating theatres and critical care",
      "Food processing and packaging rooms",
      "Electronics and precision assembly areas",
      "Laboratories",
    ],
    faqs: [
      {
        q: "Which HEPA grade do I need?",
        a: "That depends on the room classification and the process. Share your requirement or your consultant's specification and we will select the filter class and staging to suit.",
      },
      {
        q: "Why do I need pre-filters if I have HEPA?",
        a: "Pre-filters and fine filters capture the larger particles so the HEPA stage is not overloaded. This keeps pressure drop stable and extends HEPA life.",
      },
      {
        q: "Do you provide filter replacement?",
        a: "Yes. Filter inspection and replacement can be part of a maintenance contract with our after-sales team.",
      },
    ],
    related: [
      { label: "Cleanroom HVAC", href: "/services/cleanroom-hvac" },
      { label: "Air handling units", href: "/products/air-handling-units" },
      { label: "Pharmaceutical and healthcare", href: "/industries/pharmaceutical-healthcare" },
      { label: "Maintenance and after-sales support", href: "/services/maintenance-support" },
    ],
  },
  {
    slug: "blowers-and-fans",
    name: "Industrial Ventilation Fans and Blowers",
    short: "Blowers and fans",
    icon: "fan",
    seoTitle: "Industrial Blowers & Ventilation Fans Manufacturer | Airsol",
    metaDescription:
      "Centrifugal blowers, axial and inline fans for exhaust, fresh air, kitchen and process ventilation, selected to your airflow and static pressure.",
    h1: "Industrial blowers and ventilation fans",
    summary:
      "Centrifugal blowers and axial fans selected to the airflow and static pressure of your system, for exhaust, fresh air and process duty.",
    image: { src: "/images/products/centrifugal-blower.webp", alt: "Centrifugal blower with motor on a base frame" },
    quoteProjectType: "industrial-ventilation",
    sections: [
      {
        heading: "Choosing between a centrifugal blower and an axial fan",
        paragraphs: [
          "Both move air, but they suit different jobs. Axial fans move large volumes against low resistance, which makes them a good fit for wall exhaust, shed ventilation and short duct runs. Centrifugal blowers develop higher pressure, so they are the usual choice for long duct systems, systems with filters or scrubbers, kitchen exhaust and process extraction.",
          "We make that choice from the system, not from the fan. Once the duct layout is known, we estimate its resistance, add the losses of any filters, hoods or collectors, and select a fan whose curve meets that duty at a sensible operating point.",
        ],
      },
      {
        heading: "Construction for the duty",
        paragraphs: [
          "Impeller type, housing material, drive arrangement and motor enclosure all depend on what the fan will handle. Clean air at ambient temperature asks little of a fan; grease-laden kitchen exhaust, dusty process air or warm air from an oven asks a great deal more. We specify the construction for the air stream and the location, including weather protection for rooftop units and vibration isolation where the fan sits on a structure.",
          "Direct-drive and belt-drive arrangements are both available. Belt drives allow the fan speed to be adjusted during commissioning; direct drives reduce maintenance. Variable frequency drives can be added where airflow needs to change with demand.",
        ],
      },
      {
        heading: "Installed and balanced",
        paragraphs: [
          "A fan is only as good as its connection to the system. Our teams install fans with flexible connections, proper inlet and outlet conditions, and access for maintenance. At commissioning we measure the delivered airflow and static pressure, adjust the drive if needed and record the results.",
        ],
      },
    ],
    specs: [
      { label: "Types", value: "Centrifugal blowers, axial fans, inline duct fans" },
      { label: "Drive", value: "Direct drive or belt drive; VFD optional" },
      { label: "Construction", value: "Specified for the air stream: clean, grease-laden, dusty or warm air" },
      { label: "Mounting", value: "Floor, wall, ceiling-suspended or rooftop with weather protection" },
      { label: "Accessories", value: "Flexible connections, vibration isolators, guards, dampers" },
    ],
    selectionInputs: [
      "Required airflow (CFM or CMH)",
      "System static pressure, or the duct layout so we can estimate it",
      "Nature of the air stream: clean, grease, dust, fumes or heat",
      "Mounting location and available space",
      "Power supply and any control requirement",
    ],
    applications: [
      "Factory and warehouse ventilation",
      "Commercial kitchen exhaust and make-up air",
      "Basement and car-park ventilation",
      "Dust and fume extraction",
      "Fresh-air supply for buildings",
    ],
    faqs: [
      {
        q: "How do I know what size blower I need?",
        a: "You need the airflow and the system static pressure. Our calculators give a preliminary airflow estimate, and our engineers estimate static pressure from the duct layout before selecting the fan.",
      },
      {
        q: "Can one fan serve several exhaust points?",
        a: "Often, yes, if the ductwork is designed and balanced so each branch draws its share. We size the branches and the fan together.",
      },
      {
        q: "Do you supply fans for kitchen exhaust?",
        a: "Yes, as part of a complete kitchen exhaust system with hoods, ducting and make-up air.",
      },
    ],
    related: [
      { label: "Industrial ventilation", href: "/services/industrial-ventilation" },
      { label: "Article: how to select a centrifugal blower", href: "/blogs/how-to-select-centrifugal-blower" },
      { label: "Dust collection", href: "/products/dust-collection" },
      { label: "Tool: CFM and CMH converter", href: "/tools#converter" },
    ],
  },
  {
    slug: "air-washers",
    name: "Air Washers and Treated Fresh Air Units",
    short: "Air washers and TFA units",
    icon: "airWasher",
    seoTitle: "Air Washer & Treated Fresh Air Unit Manufacturer | Airsol",
    metaDescription:
      "Air washers for evaporative cooling of industrial spaces and treated fresh air (TFA) units that condition outdoor air before it enters a building.",
    h1: "Air washers and treated fresh air units",
    summary:
      "Evaporative air washers for large industrial spaces, and TFA units that filter and condition outdoor air before it reaches occupied rooms.",
    quoteProjectType: "industrial-ventilation",
    sections: [
      {
        heading: "Air washers for large, hot spaces",
        paragraphs: [
          "In many factories and warehouses, conventional air-conditioning is neither practical nor necessary. What workers and processes need is a steady supply of cooler, cleaner air. An air washer delivers this by drawing outdoor air through wetted media or a spray section, where evaporation lowers its temperature, and then blowing it into the space through ducts or direct outlets.",
          "The cooling effect of an air washer depends on the dryness of the outdoor air. It works best in hot, dry conditions, such as much of Gujarat's summer, and less well when the air is already humid. We look at the local climate and the space's heat load before recommending one, and we will tell you when a different approach suits better.",
        ],
      },
      {
        heading: "Treated fresh air units",
        paragraphs: [
          "Buildings need outdoor air for the people inside them, but untreated outdoor air carries dust, heat and moisture into a conditioned space. A treated fresh air (TFA) unit takes that outdoor air, filters it, and cools or dehumidifies it before it joins the building's air-conditioning system. This lets the main units work on the room load rather than fighting raw outdoor air.",
          "We configure TFA units with the filtration stages, coil and fan that the fresh-air quantity and the outdoor design conditions require, and connect them into the duct system so that fresh air reaches each zone in the intended amount.",
        ],
      },
      {
        heading: "Built for maintenance",
        paragraphs: [
          "Units that handle water need regular attention. We design for drainage, access to the pump, nozzles or media, and easy cleaning of the tank, and we can include these units in a maintenance schedule so that water quality and airflow are kept in check.",
        ],
      },
    ],
    specs: [
      { label: "Air washer type", value: "Wetted media or spray type, per application" },
      { label: "TFA conditioning", value: "Filtration with cooling and/or dehumidification coil" },
      { label: "Fan", value: "Selected for the required airflow and static pressure" },
      { label: "Filtration", value: "Pre-filter and fine filter stages as required" },
      { label: "Access", value: "Service doors for media, pump, nozzles, tank and filters" },
    ],
    selectionInputs: [
      "Floor area, height and heat sources in the space",
      "Required fresh-air quantity",
      "Local outdoor design conditions",
      "Water and drainage availability",
      "Air distribution: ducted or direct",
    ],
    applications: [
      "Textile, engineering and assembly shop floors",
      "Warehouses and distribution centres",
      "Fresh-air supply for offices, hotels and hospitals",
      "Food processing areas needing ventilation",
    ],
    faqs: [
      {
        q: "Will an air washer work in humid weather?",
        a: "Evaporative cooling is less effective when outdoor air is already humid. We assess your location and season before recommending an air washer, and suggest alternatives where it would not perform.",
      },
      {
        q: "What is the difference between an air washer and a TFA unit?",
        a: "An air washer cools air by evaporation and is mainly used for industrial spaces. A TFA unit filters and conditions outdoor air before it enters an air-conditioned building.",
      },
      {
        q: "Do air washers need maintenance?",
        a: "Yes. Water quality, media or nozzles, the pump and the tank need periodic attention. We can include this in a maintenance contract.",
      },
    ],
    related: [
      { label: "Industrial ventilation", href: "/services/industrial-ventilation" },
      { label: "Air handling units", href: "/products/air-handling-units" },
      { label: "Warehouses and industrial facilities", href: "/industries/warehouses-industrial-facilities" },
      { label: "Tool: air changes per hour", href: "/tools#ach" },
    ],
  },
  {
    slug: "dust-collection",
    name: "Dust Collection and Industrial Air Management Equipment",
    short: "Dust collection",
    icon: "dust",
    seoTitle: "Dust Collection & Industrial Air Management Systems | Airsol",
    metaDescription:
      "Dust collectors, extraction hoods and ducting for industrial processes, designed around capture velocity, conveying velocity and system pressure.",
    h1: "Dust collection and industrial air management equipment",
    summary:
      "Extraction hoods, conveying ductwork, collectors and fans designed together, so dust is captured at the source and carried to where it can be handled.",
    quoteProjectType: "industrial-ventilation",
    sections: [
      {
        heading: "Capture at the source",
        paragraphs: [
          "Dust that escapes into a workshop is far harder to deal with than dust caught where it is made. A dust collection system therefore begins at the hood: an enclosure, slot or canopy placed close to the process, with enough air drawn through it to pull the dust in. The airflow needed depends on the hood shape, its distance from the source and how forcefully the process throws material out.",
          "We visit the process, look at how dust is generated and design hoods that capture it without getting in the operator's way.",
        ],
      },
      {
        heading: "Conveying and collecting",
        paragraphs: [
          "Once captured, dust has to be carried through the ductwork without settling. That means keeping air velocity in the ducts high enough for the material being conveyed, using gradual bends and branch entries, and providing clean-out points. Undersized ducts waste energy; oversized ducts let dust drop out and block the system.",
          "At the end of the duct, a collector separates the dust from the air. The right collector depends on the particle size, the dust load and how the collected material will be handled: cyclones for coarse material, filter-based collectors for fine dust, and wet arrangements for some sticky or combustible dusts as the process demands. The fan is then sized for the total resistance of hoods, ducts and collector.",
        ],
      },
      {
        heading: "A system you can maintain",
        paragraphs: [
          "We plan for dust discharge, filter cleaning and access from the start, and recommend pressure gauges across the collector so your team can see how it is performing. Where combustible dusts are involved, the safety measures required by the applicable standards and your insurer must be part of the design, and we work with your safety team on these.",
        ],
      },
    ],
    specs: [
      { label: "Components", value: "Capture hoods, conveying ductwork, collector, fan, discharge" },
      { label: "Collector type", value: "Cyclone, filter-based or wet, selected for the dust" },
      { label: "Duct design", value: "Sized to keep conveying velocity for the material handled" },
      { label: "Monitoring", value: "Differential pressure across the collector (recommended)" },
      { label: "Access", value: "Clean-out points and filter access planned in" },
    ],
    selectionInputs: [
      "Process description and the type of dust or fume",
      "Number and location of extraction points",
      "Approximate dust load and particle size, if known",
      "How collected material will be handled or disposed of",
      "Any combustibility or safety requirements",
    ],
    applications: [
      "Grinding, cutting and machining areas",
      "Powder handling and mixing",
      "Packaging and bagging lines",
      "Woodworking and fabrication shops",
    ],
    faqs: [
      {
        q: "Can you add extraction to an existing machine?",
        a: "Usually, yes. We study the machine and the way dust is released, then design a hood and duct connection that fits it.",
      },
      {
        q: "Which type of dust collector do I need?",
        a: "It depends on particle size, dust load and how the material is handled afterwards. We recommend the collector after reviewing the process.",
      },
      {
        q: "Do you handle combustible dust?",
        a: "Combustible dust systems need specific safety measures under the applicable standards. We design these with your safety team and do not treat them as a standard extraction job.",
      },
    ],
    related: [
      { label: "Blowers and fans", href: "/products/blowers-and-fans" },
      { label: "Industrial ventilation", href: "/services/industrial-ventilation" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Article: industrial ventilation, ACH and static pressure", href: "/blogs/industrial-ventilation-ach-static-pressure" },
    ],
  },
];

/** Products on the facts list that are covered on a service page rather than a product page. */
export const PRODUCT_EXTRAS = [
  {
    name: "Commercial kitchen exhaust hoods",
    icon: "hood" as const,
    summary: "Wall and island canopy hoods with grease filters, supplied as part of a full kitchen exhaust system.",
    href: "/services/commercial-kitchen-exhaust",
  },
  {
    name: "Fresh air and exhaust ventilation systems",
    icon: "airflow" as const,
    summary: "Supply and extract systems for buildings, basements and industrial spaces.",
    href: "/services/industrial-ventilation",
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
