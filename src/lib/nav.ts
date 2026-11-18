import { INDUSTRIES } from "@content/industries";
import { PRODUCTS, PRODUCT_EXTRAS } from "@content/products";
import { SERVICES } from "@content/services";
import type { IconName } from "@/components/icons/hvac-icons";

export type NavLeaf = { label: string; href: string; icon?: IconName; description?: string };
export type NavItem = NavLeaf & { mega?: { heading: string; items: NavLeaf[]; footer?: NavLeaf } };

export const MAIN_NAV: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    mega: {
      heading: "Equipment we manufacture",
      items: [
        ...PRODUCTS.map((p) => ({ label: p.short, href: `/products/${p.slug}`, icon: p.icon, description: p.summary })),
        ...PRODUCT_EXTRAS.map((p) => ({ label: p.name, href: p.href, icon: p.icon, description: p.summary })),
      ],
      footer: { label: "All products", href: "/products" },
    },
  },
  {
    label: "Services",
    href: "/services",
    mega: {
      heading: "Engineering and site services",
      items: SERVICES.map((s) => ({ label: s.short, href: `/services/${s.slug}`, icon: s.icon, description: s.summary })),
      footer: { label: "All services", href: "/services" },
    },
  },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Tools", href: "/tools" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV: { heading: string; links: NavLeaf[] }[] = [
  { heading: "Products", links: PRODUCTS.map((p) => ({ label: p.short, href: `/products/${p.slug}` })) },
  { heading: "Services", links: SERVICES.map((s) => ({ label: s.short, href: `/services/${s.slug}` })) },
  { heading: "Industries", links: INDUSTRIES.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })) },
  {
    heading: "Company",
    links: [
      { label: "About Airsol", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "International", href: "/international" },
      { label: "Engineering tools", href: "/tools" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
      { label: "Request a quote", href: "/request-a-quote" },
    ],
  },
];

export const LEGAL_NAV: NavLeaf[] = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms of use", href: "/terms" },
];
