export type Market = {
  id: string;
  name: string;
  heading: string;
  paragraphs: string[];
  points: string[];
};

/**
 * TODO_CONFIRM: confirm with the client which services (supply only, or
 * supply plus installation) are offered in each overseas market.
 */
export const MARKETS: Market[] = [
  {
    id: "india",
    name: "India",
    heading: "India: design, manufacture and installation",
    paragraphs: [
      "Our head office, manufacturing facility and engineering team are in Gujarat. For projects in India we can take on the full scope: system design, manufacture of AHUs, ducting, hoods, fans and filtration equipment, installation by our own site teams, commissioning and ongoing maintenance.",
      "For projects across India, we plan dispatch and site mobilisation as part of the project programme.",
    ],
    points: [
      "Full design-manufacture-install-maintain scope",
      "Metric and imperial units in drawings and data",
      "Site teams mobilised across India",
      "Maintenance contracts after handover",
    ],
  },
  {
    id: "uae",
    name: "UAE",
    heading: "UAE: equipment built to your consultant's specification",
    paragraphs: [
      "For projects in the UAE we manufacture equipment in India to the specification and drawings issued by your consultant or contractor, and supply it for installation on site. Typical requirements in the region include kitchen exhaust for hospitality, fresh-air treatment for humid coastal conditions and ventilation for industrial and logistics buildings.",
      "Hot and humid outdoor air places a heavy latent load on fresh-air systems, so coil selection and condensate handling get particular attention in our designs for this market. Local authority and civil defence requirements are set by your project's consultant, and we build to the approved specification.",
    ],
    points: [
      "Supply to the approved specification and drawings",
      "Fresh-air units selected for humid outdoor conditions",
      "Kitchen exhaust equipment for hotels and restaurants",
      "Installation arrangements agreed per project",
    ],
  },
  {
    id: "usa",
    name: "USA",
    heading: "USA: custom fabrication against submitted drawings",
    paragraphs: [
      "For buyers in the USA we manufacture custom HVAC equipment and sheet-metal components against submitted drawings and specifications, with data in imperial units: airflow in CFM, pressure in inches of water gauge and dimensions in inches.",
      "Code compliance in the USA is the responsibility of the engineer of record and the local authority having jurisdiction. Some equipment, such as commercial kitchen hoods, may require specific third-party listings. If your project needs a particular listing or certification, tell us at the enquiry stage so we can confirm whether it can be met before you place an order.",
    ],
    points: [
      "Imperial units throughout: CFM, in. w.g., inches",
      "Built to submitted drawings and specifications",
      "Listing and certification requirements checked at enquiry",
      "Export packing and documentation per order",
    ],
  },
];
