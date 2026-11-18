import type { DetailPage } from "./types";

export const SERVICES: DetailPage[] = [
  {
    slug: "commercial-kitchen-exhaust",
    name: "Commercial Kitchen Exhaust and Fresh Air Ventilation",
    short: "Commercial kitchen exhaust",
    icon: "hood",
    seoTitle: "Commercial Kitchen Exhaust System Manufacturer | Airsol",
    metaDescription:
      "Kitchen exhaust hoods, grease-duty ducting, exhaust blowers and make-up air for hotels, restaurants and central kitchens. Designed, built and installed by Airsol.",
    h1: "Commercial kitchen exhaust and fresh air systems",
    summary:
      "Hoods, grease-duty ducting, exhaust blowers and make-up air designed as one system, so smoke, heat and grease leave the kitchen and fresh air replaces them.",
    image: { src: "/images/work/site-3.webp", alt: "Commercial kitchen with stainless steel exhaust hoods over the cooking line" },
    quoteProjectType: "kitchen-exhaust",
    sections: [
      {
        heading: "A kitchen exhaust system is four systems working together",
        paragraphs: [
          "Cooking releases heat, smoke, steam and grease vapour. To keep a commercial kitchen workable and safe, all of that has to be captured above the cooking line and carried out of the building. The hood captures it, the ductwork carries it, the exhaust fan moves it and the make-up air system replaces the air that leaves. If any one of these is undersized or poorly connected, the others cannot compensate.",
          "We design these four parts together. We start with the cooking line itself: which appliances sit where, how heavily they are used and whether the hood will be against a wall or over an island. That determines the hood style, its length and overhang, and the exhaust airflow it needs.",
        ],
      },
      {
        heading: "Hoods, grease filters and ductwork",
        paragraphs: [
          "Our canopy hoods are fabricated in stainless steel with grease filters that can be removed for washing, a grease collection channel and lighting where required. Ductwork from the hood to the fan carries grease-laden air, so it is built heavier than ordinary ventilation duct, sealed at the joints, sloped where needed and provided with access for cleaning.",
          "Where exhaust is discharged near neighbours or occupied areas, the system may need additional treatment of smoke and odour before discharge. We discuss this with you at the design stage, along with any requirements of your building management or local authority.",
        ],
      },
      {
        heading: "Make-up air keeps the kitchen in balance",
        paragraphs: [
          "Every cubic metre of air the exhaust fan removes has to come back from somewhere. Without a planned make-up air supply, it is pulled in through doors and gaps, the kitchen goes into strong negative pressure, doors become hard to open, and the hood stops capturing properly. We size a fresh-air supply to replace most of the exhausted air and introduce it so that it does not blow across the hood and disturb capture.",
          "Our airflow calculator gives a preliminary exhaust estimate from hood length and cooking duty. Use it to get a sense of scale, then send us your kitchen layout for a full design.",
        ],
      },
    ],
    specs: [
      { label: "Hood styles", value: "Wall-mounted canopy, single island, double island" },
      { label: "Hood material", value: "Stainless steel with removable grease filters" },
      { label: "Exhaust duct", value: "Heavier-gauge sealed duct with cleaning access" },
      { label: "Exhaust fan", value: "Centrifugal blower selected for airflow and system pressure" },
      { label: "Make-up air", value: "Filtered fresh-air supply, ducted to the kitchen" },
      { label: "Scope", value: "Design, fabrication, installation, testing and maintenance" },
    ],
    selectionInputs: [
      "Kitchen layout with appliance positions",
      "Type of cooking on each line (light to extra-heavy duty)",
      "Ceiling height and the route to the discharge point",
      "Whether the kitchen is air-conditioned",
      "Any building or authority requirements on discharge",
    ],
    applications: [
      "Hotel and banquet kitchens",
      "Restaurants and quick-service outlets",
      "Central and cloud kitchens",
      "Hospital and institutional kitchens",
      "Industrial canteens",
    ],
    faqs: [
      {
        q: "How much exhaust airflow does my kitchen hood need?",
        a: "It depends on the hood style, its length and the cooking duty. Our kitchen exhaust tool gives a preliminary estimate; our engineers confirm the design from your layout.",
      },
      {
        q: "Why is my kitchen hot and smoky even with an exhaust fan?",
        a: "Common causes are an undersized hood or fan, high duct resistance, or no make-up air, which starves the hood. A site survey usually shows which one.",
      },
      {
        q: "Do you supply the hood only, or the whole system?",
        a: "We can do either, but kitchen exhaust performs best when the hood, duct, fan and make-up air are designed together.",
      },
      {
        q: "Do you clean kitchen exhaust systems?",
        a: "Our maintenance team can inspect and service hoods, filters, ducts and fans on a schedule. Contact us to discuss a maintenance plan.",
      },
    ],
    related: [
      { label: "Tool: kitchen exhaust airflow estimate", href: "/tools#kitchen" },
      { label: "Article: commercial kitchen exhaust CFM calculation", href: "/resources/commercial-kitchen-exhaust-cfm-calculation" },
      { label: "Hotels and restaurants", href: "/industries/hotels-restaurants" },
      { label: "Blowers and fans", href: "/products/blowers-and-fans" },
    ],
  },
  {
    slug: "cleanroom-hvac",
    name: "Pharmaceutical and Cleanroom HVAC",
    short: "Cleanroom HVAC",
    icon: "cleanroom",
    seoTitle: "Cleanroom HVAC & HEPA Filtration Solutions | Airsol",
    metaDescription:
      "HVAC for pharmaceutical cleanrooms and controlled areas: AHUs, HEPA terminals, pressure cascades and air-change design, manufactured and installed by Airsol.",
    h1: "Pharmaceutical and cleanroom HVAC",
    summary:
      "Air handling, filtration, pressure control and air distribution for controlled environments, designed around your room classes and process.",
    quoteProjectType: "cleanroom",
    sections: [
      {
        heading: "What a cleanroom HVAC system has to do",
        paragraphs: [
          "In a pharmaceutical or controlled area, the HVAC system is part of the process. It has to keep particle counts within the room's classification, hold temperature and humidity within limits, maintain the pressure differences that stop contamination moving from dirty to clean areas, and do all of this consistently enough to be validated.",
          "We design to those requirements. Starting from the room data sheet, we work out air-change rates, supply and return quantities, the pressure each room must hold relative to its neighbours, and the filtration needed to reach the classification.",
        ],
      },
      {
        heading: "Air handling and filtration",
        paragraphs: [
          "The AHU serving a controlled area carries staged filtration, a coil sized for both sensible and latent load, and a fan selected for the dirty-filter condition so airflow holds as filters load. Terminal HEPA filters deliver clean air into each room at ceiling level, and returns are positioned low to sweep particles away from critical zones.",
          "Because we manufacture AHUs, HEPA housings and ducting ourselves, these components can be designed to fit together and to the space available, rather than adapted from stock items.",
        ],
      },
      {
        heading: "Pressure cascade and balancing",
        paragraphs: [
          "Pressure differences between rooms are set by the balance of supply, return and exhaust air in each one. We plan the cascade on the drawing, then set it on site by adjusting dampers until each room reaches its design pressure, and record the readings for your validation team.",
          "Our role ends where your validation protocol begins: we provide the installation and commissioning records and can support qualification activities as agreed in the project scope.",
        ],
      },
    ],
    specs: [
      { label: "Design basis", value: "Room data sheet: class, temperature, humidity, pressure" },
      { label: "Air handling", value: "AHU with staged filtration and coil for sensible and latent load" },
      { label: "Terminal filtration", value: "Ceiling HEPA modules with test access as required" },
      { label: "Pressure control", value: "Cascade set by balancing supply, return and exhaust" },
      { label: "Records", value: "Installation and commissioning readings for validation support" },
    ],
    selectionInputs: [
      "Room layout and room data sheet",
      "Required cleanroom classification per room",
      "Temperature and humidity limits",
      "Pressure cascade between rooms",
      "Process heat loads and exhaust points",
    ],
    applications: [
      "Pharmaceutical manufacturing and packing",
      "Hospital operating theatres and ICUs",
      "Laboratories",
      "Food and nutraceutical processing",
    ],
    faqs: [
      {
        q: "Do you design cleanroom HVAC or only install it?",
        a: "Both. We can design from your room data sheet, or build and install to a consultant's design.",
      },
      {
        q: "Can you help with validation?",
        a: "We provide installation and commissioning records and can support qualification activities as agreed in the project scope.",
      },
      {
        q: "How are room pressures maintained?",
        a: "By balancing supply, return and exhaust air in each room. We set the cascade with dampers during commissioning and record the readings.",
      },
    ],
    related: [
      { label: "HEPA filtration", href: "/products/hepa-filtration" },
      { label: "Air handling units", href: "/products/air-handling-units" },
      { label: "Pharmaceutical and healthcare", href: "/industries/pharmaceutical-healthcare" },
      { label: "Article: selecting an AHU for a pharmaceutical facility", href: "/resources/ahu-selection-pharmaceutical-facility" },
    ],
  },
  {
    slug: "industrial-ventilation",
    name: "Industrial and Commercial Ventilation",
    short: "Industrial ventilation",
    icon: "airflow",
    seoTitle: "Industrial & Commercial Ventilation Systems | Airsol",
    metaDescription:
      "Fresh air and exhaust ventilation for factories, warehouses and commercial buildings, designed around air changes, heat load and static pressure.",
    h1: "Industrial and commercial ventilation systems",
    summary:
      "Fresh-air supply and exhaust systems that remove heat, fumes and stale air from factories, warehouses and commercial buildings.",
    image: { src: "/images/work/site-8.webp", alt: "Centrifugal exhaust blower with galvanised ducting on a rooftop" },
    quoteProjectType: "industrial-ventilation",
    sections: [
      {
        heading: "Ventilation starts with what you are removing",
        paragraphs: [
          "Every ventilation system exists to remove something: heat from machines and roofs, fumes from processes, moisture, or simply the stale air of an occupied building. The quantity of air needed depends on which of these dominates. For general ventilation it is often expressed as air changes per hour; for heat removal it follows from the heat load and the temperature rise you can accept; for fumes it follows from capture at the source.",
          "We look at the space and the process first, then decide which basis governs the design.",
        ],
      },
      {
        heading: "Supply, exhaust and the path in between",
        paragraphs: [
          "Good ventilation is about air paths as much as airflow. Fresh air should enter low and cool, sweep through the occupied zone and leave high, where heat collects. Exhaust points should sit near heat and fume sources. Supply and exhaust quantities are balanced so that the building runs at a slight negative or positive pressure as intended, rather than whatever the fans happen to produce.",
          "We select axial fans, centrifugal blowers, air washers or treated fresh air units for each part of the job, and design the ductwork to deliver air where it is needed with the least resistance.",
        ],
      },
      {
        heading: "Commercial buildings",
        paragraphs: [
          "In offices, malls, hotels and hospitals, ventilation provides outdoor air for occupants and removes air from toilets, kitchens and service areas. We design fresh-air and exhaust systems that integrate with the building's air-conditioning, so that conditioned air is not wasted and odours stay where they belong.",
        ],
      },
    ],
    specs: [
      { label: "Design basis", value: "Air changes per hour, heat removal or source capture" },
      { label: "Equipment", value: "Axial fans, centrifugal blowers, air washers, TFA units" },
      { label: "Distribution", value: "Ducted supply and exhaust or direct wall and roof units" },
      { label: "Balancing", value: "Supply and exhaust balanced to the intended building pressure" },
      { label: "Scope", value: "Design, fabrication, installation and commissioning" },
    ],
    selectionInputs: [
      "Building dimensions and layout",
      "Heat sources, processes and fume points",
      "Number of occupants, if relevant",
      "Existing openings, roof vents and fans",
      "Problems you are seeing: heat, fumes, odour or condensation",
    ],
    applications: [
      "Factory and production floors",
      "Warehouses and logistics buildings",
      "Malls, offices and hotels",
      "Toilets, service areas and plant rooms",
    ],
    faqs: [
      {
        q: "How many air changes per hour does my factory need?",
        a: "It depends on the heat load, processes and occupancy. Our ACH calculator converts a chosen rate into airflow; our engineers will recommend the rate for your space.",
      },
      {
        q: "Should I use exhaust fans or a fresh-air system?",
        a: "Usually both. Exhaust removes heat and fumes; a planned fresh-air supply replaces that air through a clean, intended path.",
      },
      {
        q: "Can you improve an existing ventilation system?",
        a: "Yes. A site survey with airflow measurements usually shows where an existing system is falling short.",
      },
    ],
    related: [
      { label: "Blowers and fans", href: "/products/blowers-and-fans" },
      { label: "Air washers and TFA units", href: "/products/air-washers" },
      { label: "Tool: air changes per hour", href: "/tools#ach" },
      { label: "Article: industrial ventilation, ACH and static pressure", href: "/resources/industrial-ventilation-ach-static-pressure" },
    ],
  },
  {
    slug: "basement-ventilation",
    name: "Basement Ventilation",
    short: "Basement ventilation",
    icon: "basement",
    seoTitle: "Basement & Car Park Ventilation Systems | Airsol",
    metaDescription:
      "Basement and underground car-park ventilation: supply and exhaust fans, ductwork and air paths designed to remove vehicle fumes and stale air.",
    h1: "Basement and underground car-park ventilation",
    summary:
      "Supply and exhaust systems that keep basements and car parks clear of vehicle fumes and stale air, with air paths planned across the whole floor.",
    image: { src: "/images/general/basement.webp", alt: "Large covered interior floor of a building basement" },
    quoteProjectType: "basement-ventilation",
    sections: [
      {
        heading: "Why basements need mechanical ventilation",
        paragraphs: [
          "Basements have little or no natural airflow. In car parks, vehicle exhaust adds carbon monoxide and other pollutants that settle and accumulate if they are not removed. Even basements used for storage or services become damp and stale without air movement. A mechanical ventilation system brings in outdoor air and extracts the contaminated air, keeping the space usable and safe.",
        ],
      },
      {
        heading: "Designing the air path",
        paragraphs: [
          "The quantity of air is only half the design. The other half is making sure it actually sweeps the whole floor. Fresh air brought in at one end and extracted at the other, with no dead zones behind ramps, cores or parked cars, is what clears pollutants effectively. We plan supply and exhaust locations on the basement layout, and use ducted systems where the geometry demands them.",
          "Air quantities are set from the ventilation rate required for the space and the applicable building and fire regulations for your project. Where the basement ventilation system also serves smoke extraction, the fire-safety requirements of your project and local authority govern the design and are coordinated with your fire consultant.",
        ],
      },
      {
        heading: "Equipment and control",
        paragraphs: [
          "We supply and install axial or centrifugal fans, ductwork, grilles and dampers. Fans can be arranged in stages so the system runs at a lower level during light use and higher when traffic is heavy. Where the client wants it, controls can respond to gas sensors so that fans speed up when pollution rises.",
          "Our maintenance team can service fans and check airflow periodically, so the system continues to do its job long after handover.",
        ],
      },
    ],
    specs: [
      { label: "System type", value: "Ducted supply and exhaust, or fan-assisted air paths" },
      { label: "Fans", value: "Axial or centrifugal, selected for airflow and pressure" },
      { label: "Air distribution", value: "Supply and extract points planned on the basement layout" },
      { label: "Control", value: "Staged operation; sensor-based control optional" },
      { label: "Coordination", value: "With fire consultant where smoke extraction is required" },
    ],
    selectionInputs: [
      "Basement layout with ramps, cores and parking bays",
      "Floor area and clear height",
      "Use: car park, storage, services or mixed",
      "Available shafts and openings to outdoors",
      "Fire and smoke requirements from your consultant",
    ],
    applications: [
      "Residential and commercial building car parks",
      "Mall and hotel basements",
      "Hospital service floors",
      "Underground storage areas",
    ],
    faqs: [
      {
        q: "How is basement ventilation airflow calculated?",
        a: "From the required ventilation rate for the space, usually expressed as air changes per hour, together with any building and fire regulations that apply. Our ACH tool shows the arithmetic.",
      },
      {
        q: "Can the same fans be used for smoke extraction?",
        a: "Sometimes, but smoke extraction carries its own fire-safety requirements. We coordinate with your fire consultant whenever this applies.",
      },
      {
        q: "Can the system run at lower speed when the basement is quiet?",
        a: "Yes. Fans can be staged or controlled from gas sensors so that they run harder only when needed.",
      },
    ],
    related: [
      { label: "Blowers and fans", href: "/products/blowers-and-fans" },
      { label: "Industrial ventilation", href: "/services/industrial-ventilation" },
      { label: "Commercial buildings", href: "/industries/commercial-buildings" },
      { label: "Tool: air changes per hour", href: "/tools#ach" },
    ],
  },
  {
    slug: "hvac-ducting-installation",
    name: "Duct Fabrication and Installation",
    short: "Ducting installation",
    icon: "duct",
    seoTitle: "HVAC Ducting Manufacturer & Installation | Airsol",
    metaDescription:
      "Duct fabrication in our own facility and site installation by Airsol's own teams: shop drawings, supports, sealing, insulation and air balancing.",
    h1: "Duct fabrication and installation",
    summary:
      "From shop drawing to balanced system: ductwork fabricated in our workshop and installed, sealed, insulated and balanced by our own site teams.",
    image: { src: "/images/general/duct-installation.webp", alt: "Installer fixing an overhead round duct in a ceiling space" },
    quoteProjectType: "ducting",
    sections: [
      {
        heading: "One team from drawing to handover",
        paragraphs: [
          "Ducting projects go wrong in the gaps: between the design and the shop drawing, between the workshop and the site, between installation and balancing. We close those gaps by keeping all of them in-house. Our engineers prepare the shop drawings, our workshop fabricates to them, and our site teams install and commission what was built.",
          "When something on site does not match the drawing, such as a beam, a sprinkler main or a changed ceiling level, the same team that drew the duct can revise it and the workshop can make the change without a new supplier enquiry.",
        ],
      },
      {
        heading: "Installation standards we work to",
        paragraphs: [
          "Ducts are supported at the spacing shown on the drawings, with hangers sized for the duct and any insulation. Joints are sealed, flexible connections isolate fans and AHUs from vibration, and access doors are fitted at dampers, coils and other points that need inspection. Insulation and vapour barriers are applied without gaps so that condensation does not form on cold ducts.",
          "We coordinate with the electrical, plumbing and fire-fighting contractors on shared ceilings, and we keep the site clean and the work area safe as we go.",
        ],
      },
      {
        heading: "Testing and balancing",
        paragraphs: [
          "Once the system runs, we measure airflow at the main branches and terminals and adjust the dampers until each part of the building receives its design quantity. The readings are recorded and handed over with the as-installed drawings, so you have a baseline for future maintenance.",
        ],
      },
    ],
    specs: [
      { label: "Shop drawings", value: "Prepared in-house and issued for approval" },
      { label: "Fabrication", value: "Our own manufacturing facility" },
      { label: "Installation", value: "Supports, sealing, flexible connections, access doors" },
      { label: "Insulation", value: "Thermal and acoustic, with vapour barrier where needed" },
      { label: "Balancing", value: "Airflow measured and dampers set; readings handed over" },
    ],
    selectionInputs: [
      "Consultant's HVAC layout or architectural drawings",
      "Airflow per zone or terminal",
      "Insulation specification",
      "Site programme and access",
      "Coordination drawings from other services, if available",
    ],
    applications: [
      "Commercial buildings and offices",
      "Hotels and hospitals",
      "Factories and warehouses",
      "Cleanroom and pharmaceutical facilities",
    ],
    faqs: [
      {
        q: "Do you take ducting-only contracts?",
        a: "Yes. We can fabricate and install ducting for a system designed by others, or include it in a complete HVAC package.",
      },
      {
        q: "Do you balance the system after installation?",
        a: "Yes. We measure airflow, set dampers and hand over the readings with the as-installed drawings.",
      },
      {
        q: "Can you work on an occupied building?",
        a: "Yes, with a programme agreed in advance to keep disruption and dust to a minimum.",
      },
    ],
    related: [
      { label: "HVAC ducting and accessories", href: "/products/hvac-ducting" },
      { label: "AHU installation and commissioning", href: "/services/ahu-installation-commissioning" },
      { label: "Commercial buildings", href: "/industries/commercial-buildings" },
      { label: "Tool: CFM and CMH converter", href: "/tools#converter" },
    ],
  },
  {
    slug: "ahu-installation-commissioning",
    name: "AHU Installation and Commissioning",
    short: "AHU installation and commissioning",
    icon: "ahu",
    seoTitle: "AHU Installation & Commissioning Services | Airsol",
    metaDescription:
      "Air handling unit installation, connection, start-up and commissioning: airflow, pressure and functional checks recorded and handed over.",
    h1: "AHU installation and commissioning",
    summary:
      "Setting, connecting, starting and proving air handling units, with measured airflow and pressure readings handed over at the end.",
    image: { src: "/images/work/site-6.webp", alt: "Plant room with an air handling unit and chilled-water piping" },
    quoteProjectType: "ahu",
    sections: [
      {
        heading: "Installation",
        paragraphs: [
          "An air handling unit arrives in sections or as a single assembly, and it has to be moved, set level on its base and connected without damage. We plan the lifting and access route in advance, set the unit on vibration isolation where specified, join sections with their seals, and connect ductwork through flexible connections.",
          "Coil connections, condensate drains with traps of the right depth, and electrical supply to the fan motor complete the installation. We check that filters are seated, doors close and seal, and that the inside of the unit is clean before it is run.",
        ],
      },
      {
        heading: "Commissioning",
        paragraphs: [
          "Commissioning proves that the unit does what the design asked of it. We check fan rotation, measure motor current, and then measure the airflow delivered and the static pressures across the filters, coils and fan. Where the airflow is off target, we adjust the drive or the system dampers until it is within the design tolerance.",
          "For units with controls, we check that sensors read correctly and that the unit responds to them as intended. For cleanroom AHUs, commissioning extends to room airflow and pressure balancing.",
        ],
      },
      {
        heading: "Handover",
        paragraphs: [
          "At handover you receive the measured readings, the as-installed details and the operating and maintenance guidance for the unit. Those readings become the baseline for future maintenance: if airflow falls or pressure drops rise, you will know by how much.",
          "We commission AHUs we manufacture and can also commission units supplied by others, subject to a site inspection.",
        ],
      },
    ],
    specs: [
      { label: "Installation", value: "Rigging, levelling, section joining, isolation, connections" },
      { label: "Pre-start checks", value: "Filters seated, doors sealed, drains trapped, unit clean" },
      { label: "Measurements", value: "Airflow, static pressures, motor current, rotation" },
      { label: "Adjustment", value: "Drive and damper adjustment to design airflow" },
      { label: "Handover", value: "Readings, as-installed details and O&M guidance" },
    ],
    selectionInputs: [
      "AHU make, model and drawings",
      "Design airflow and static pressure",
      "Site access and lifting route",
      "Services available: chilled water, power, drains",
      "Commissioning and documentation requirements",
    ],
    applications: [
      "New AHU installations",
      "AHU replacements in existing buildings",
      "Cleanroom and pharmaceutical AHUs",
      "Re-commissioning of units that underperform",
    ],
    faqs: [
      {
        q: "Do you commission AHUs made by other manufacturers?",
        a: "Yes, after a site inspection to check the unit's condition and documentation.",
      },
      {
        q: "What readings will I receive at handover?",
        a: "Measured airflow, static pressures across filters, coils and fan, and motor current, together with as-installed details.",
      },
      {
        q: "My AHU is not delivering enough air. Can you help?",
        a: "Yes. Re-commissioning usually starts with measuring airflow and pressures to find where the losses are.",
      },
    ],
    related: [
      { label: "Air handling units", href: "/products/air-handling-units" },
      { label: "Maintenance and after-sales support", href: "/services/maintenance-support" },
      { label: "Cleanroom HVAC", href: "/services/cleanroom-hvac" },
      { label: "Ducting installation", href: "/services/hvac-ducting-installation" },
    ],
  },
  {
    slug: "maintenance-support",
    name: "Maintenance and After-Sales Support",
    short: "Maintenance and support",
    icon: "wrench",
    seoTitle: "HVAC Maintenance & After-Sales Support | Airsol",
    metaDescription:
      "Planned maintenance and after-sales support for AHUs, kitchen exhaust, ventilation fans, filters and ductwork installed by Airsol.",
    h1: "Maintenance and after-sales support",
    summary:
      "Planned maintenance and responsive support for the AHUs, fans, filters, ductwork and kitchen exhaust systems we install.",
    image: { src: "/images/general/technician-diffuser.webp", alt: "Technician servicing a ceiling air diffuser" },
    quoteProjectType: "other",
    sections: [
      {
        heading: "Why HVAC systems drift",
        paragraphs: [
          "An HVAC system that performed well at handover will not stay that way on its own. Filters load and their pressure drop rises, belts stretch, bearings wear, coils collect dirt, grease builds up in kitchen ducts and dampers get knocked out of position. Each change is small, but together they reduce airflow, raise energy use and, in kitchens and cleanrooms, create real risk.",
          "Planned maintenance catches these changes before they become failures.",
        ],
      },
      {
        heading: "What a maintenance visit covers",
        paragraphs: [
          "The scope depends on the equipment. For air handling units we inspect and change filters, clean coils and drain pans, check belts, bearings and motor current, and measure airflow against the commissioning baseline. For fans and blowers we check vibration, alignment, guards and drives. For kitchen exhaust we inspect hoods, grease filters, ducts and the exhaust fan. For cleanroom systems we check filter pressure drops and room pressures.",
          "After each visit you receive a short report of what was found, what was done and what we recommend next.",
        ],
      },
      {
        heading: "After-sales support",
        paragraphs: [
          "If something stops working, call us. Because we designed, built or installed the system, we already have its drawings and readings, which makes diagnosis quicker. We can supply spare parts and replacement filters for the equipment we manufacture.",
          "Maintenance contracts are agreed per site, with a visit frequency matched to the equipment and how hard it works.",
        ],
      },
    ],
    specs: [
      { label: "AHUs", value: "Filters, coils, drain pans, belts, bearings, airflow check" },
      { label: "Fans and blowers", value: "Vibration, alignment, drive, guards, motor current" },
      { label: "Kitchen exhaust", value: "Hoods, grease filters, ducts, exhaust fan" },
      { label: "Cleanrooms", value: "Filter pressure drops and room pressure checks" },
      { label: "Reporting", value: "Visit report with findings and recommendations" },
    ],
    selectionInputs: [
      "List of equipment and its location",
      "Age and service history of the equipment",
      "Operating hours and seasonal use",
      "Any current problems",
      "Preferred visit frequency",
    ],
    applications: [
      "Systems installed by Airsol",
      "Kitchen exhaust in hotels and restaurants",
      "Industrial ventilation and dust collection",
      "Cleanroom and healthcare HVAC",
    ],
    faqs: [
      {
        q: "Do you maintain systems that you did not install?",
        a: "Yes, after an initial survey to understand the equipment and its condition.",
      },
      {
        q: "How often should HVAC equipment be serviced?",
        a: "It depends on the equipment and how hard it works. Kitchen exhaust and dusty environments need more frequent attention than comfort systems. We agree the frequency per site.",
      },
      {
        q: "Do you supply replacement filters?",
        a: "Yes, for the equipment we manufacture, and we can source filters for other units.",
      },
    ],
    related: [
      { label: "AHU installation and commissioning", href: "/services/ahu-installation-commissioning" },
      { label: "Commercial kitchen exhaust", href: "/services/commercial-kitchen-exhaust" },
      { label: "HEPA filtration", href: "/products/hepa-filtration" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

/** Service on the facts list without its own route; shown on /services. */
export const DESIGN_SERVICE = {
  name: "HVAC system design and engineering",
  summary:
    "Load and airflow calculations, equipment selection, duct sizing and drawings, prepared for our own builds or for your contractor.",
};

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
