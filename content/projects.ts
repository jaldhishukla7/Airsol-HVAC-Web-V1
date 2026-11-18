import type { IconName } from "@/components/icons/hvac-icons";

/**
 * Projects and clients.
 *
 * The client list comes from the "Our Specialties" section of the previous
 * airsolhvac.com website. The overview text describes each client and sector
 * only; it does not claim a specific scope.
 *
 * TO COMPLETE A CASE STUDY, fill in the optional fields below. Each one
 * appears on the project page as soon as it has content:
 *   scope         – what Airsol delivered, one line per item
 *   equipment     – equipment supplied
 *   designCriteria– airflow, pressure, filtration or other design basis
 *   outcome       – result for the client
 *   images        – photos in /public/images/projects/<slug>/ (+ alt text)
 *   year          – completion year
 * TODO_CONFIRM: confirm each client is happy to be named, and add details.
 */

export type ProjectImage = { src: string; alt: string; width: number; height: number };

export type Sector = {
  id: string;
  label: string;
  icon: IconName;
  /** Industry page the sector links to. */
  industrySlug: string;
};

export const SECTORS: Sector[] = [
  { id: "healthcare", label: "Healthcare", icon: "pharma", industrySlug: "pharmaceutical-healthcare" },
  { id: "hospitality", label: "Hotels, resorts and restaurants", icon: "hotel", industrySlug: "hotels-restaurants" },
  { id: "industrial", label: "Industrial and energy", icon: "factory", industrySlug: "manufacturing" },
  { id: "commercial", label: "Commercial and real estate", icon: "building", industrySlug: "commercial-buildings" },
];

export type Project = {
  slug: string;
  client: string;
  sector: Sector["id"];
  /** Only where the client has a single, well-known location. */
  location?: string;
  overview: string;
  featured?: boolean;
  year?: string;
  scope?: string[];
  equipment?: string[];
  designCriteria?: string[];
  outcome?: string;
  images?: ProjectImage[];
};

export const PROJECTS: Project[] = [
  {
    slug: "apollo-cvhf",
    client: "Apollo CVHF Heart Institute",
    sector: "healthcare",
    location: "Ahmedabad, Gujarat",
    featured: true,
    overview:
      "Apollo CVHF Heart Institute is a cardiac care hospital. It is one of the healthcare facilities in Airsol's client portfolio, where clean, controlled air and reliable ventilation are part of patient care.",
  },
  {
    slug: "namostu-te-hospitals",
    client: "Namo'stu Te Hospitals",
    sector: "healthcare",
    overview:
      "Namo'stu Te Hospitals is a healthcare client of Airsol. Hospitals need filtered supply air, controlled pressures between clean and dirty areas, and ventilation that runs reliably around the clock.",
  },
  {
    slug: "adani-shantigram",
    client: "Adani Shantigram",
    sector: "commercial",
    location: "Ahmedabad, Gujarat",
    featured: true,
    overview:
      "Adani Shantigram is a large integrated township development. It is one of the commercial and real-estate clients in Airsol's portfolio, where air handling, ducting and ventilation must be coordinated with every other building service.",
  },
  {
    slug: "indian-oil",
    client: "Indian Oil",
    sector: "industrial",
    featured: true,
    overview:
      "Indian Oil is one of India's largest energy companies and an industrial client of Airsol. Industrial and energy facilities ask for ventilation and air management equipment that is robust, serviceable and selected for demanding conditions.",
  },
  {
    slug: "aia-engineering",
    client: "AIA Engineering",
    sector: "industrial",
    featured: true,
    overview:
      "AIA Engineering is an engineering and manufacturing company and an industrial client of Airsol. Manufacturing plants typically need heat removal, fresh-air supply, and dust and fume extraction at the source.",
  },
  {
    slug: "club-mahindra",
    client: "Club Mahindra",
    sector: "hospitality",
    featured: true,
    overview:
      "Club Mahindra is a leisure and resort brand and a hospitality client of Airsol. Resorts combine guest comfort, kitchen ventilation and back-of-house systems that must work quietly and reliably.",
  },
  {
    slug: "kensville-golf-country-club",
    client: "Kensville Golf and Country Club",
    sector: "hospitality",
    location: "Ahmedabad, Gujarat",
    featured: true,
    overview:
      "Kensville Golf and Country Club is a golf and leisure destination and a hospitality client of Airsol, with the dining, banquet and guest areas that demand good kitchen exhaust and fresh-air design.",
  },
  {
    slug: "hotel-dakshinayan",
    client: "Hotel Dakshinayan",
    sector: "hospitality",
    overview:
      "Hotel Dakshinayan is a hospitality client of Airsol. Hotels need kitchen exhaust and make-up air in the back of house, and fresh air and comfortable conditions in guest areas.",
  },
  {
    slug: "hotel-saffron",
    client: "Hotel Saffron",
    sector: "hospitality",
    overview:
      "Hotel Saffron is a hospitality client of Airsol. Hotel kitchens and banquet areas swing between light and heavy loads, so exhaust and fresh-air systems have to be sized for the busiest service.",
  },
  {
    slug: "the-biryani-legend",
    client: "The Biryani Legend",
    sector: "hospitality",
    overview:
      "The Biryani Legend is a restaurant client of Airsol. Restaurant kitchens produce heat, smoke and grease all service long, which a well-designed hood, exhaust and make-up air system has to remove.",
  },
  {
    slug: "niro-by-ninis",
    client: "Niro by Nini's",
    sector: "hospitality",
    overview:
      "Niro by Nini's is a food and hospitality client of Airsol. Cafés and restaurants need kitchen ventilation that keeps cooking areas workable and dining areas free of kitchen smells.",
  },
];

/**
 * Real site photos from the previous website. Which client each shows is
 * TODO_CONFIRM, so they are shown as a general gallery without attribution.
 */
export const SITE_PHOTOS: ProjectImage[] = [
  { src: "/images/work/site-1.webp", alt: "Rooftop air handling units connected to insulated supply ductwork", width: 720, height: 406 },
  { src: "/images/work/site-6.webp", alt: "Plant room with an air handling unit and chilled-water piping", width: 1024, height: 461 },
  { src: "/images/work/site-3.webp", alt: "Commercial kitchen with stainless steel exhaust hoods over the cooking line", width: 1024, height: 768 },
  { src: "/images/work/site-8.webp", alt: "Centrifugal exhaust blower with galvanised ducting on a rooftop", width: 768, height: 1024 },
  { src: "/images/work/site-2.webp", alt: "Louvred ventilation units mounted on a rooftop frame", width: 576, height: 1024 },
  { src: "/images/work/site-7.webp", alt: "Portable axial ventilation fan on a steel stand", width: 492, height: 566 },
  { src: "/images/work/site-4.webp", alt: "Restaurant dining area with ceiling-mounted air distribution", width: 768, height: 1024 },
  { src: "/images/work/site-5.webp", alt: "Rooftop ductwork and ventilation equipment against the skyline", width: 720, height: 960 },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const getSector = (id: string) => SECTORS.find((s) => s.id === id)!;
