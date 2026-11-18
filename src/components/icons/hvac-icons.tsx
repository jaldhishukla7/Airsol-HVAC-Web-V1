import type { SVGProps } from "react";

/**
 * Custom HVAC icon set. 24×24 grid, 1.5px stroke, round joins, currentColor,
 * matching lucide-react so the two families can sit side by side.
 */
type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Base({ title, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

const paths = {
  /** Air handling unit: casing with filter, coil and fan sections. */
  ahu: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="1" />
      <path d="M7 6v12M12 6v12" />
      <path d="M3.5 9l2 2-2 2M3.5 13l2 2" />
      <path d="M8.5 8.5v7M10.5 8.5v7" />
      <circle cx="17" cy="12" r="3" />
      <path d="M17 9.8v2.2l1.9 1.1" />
    </>
  ),
  /** Rectangular duct elbow with flange lines. */
  duct: (
    <>
      <path d="M2 9h10a3 3 0 0 1 3 3v10" />
      <path d="M2 15h6a1 1 0 0 1 1 1v6" />
      <path d="M5 9v6M2 9v6" />
      <path d="M9 19h6M9 22h6" />
      <path d="M17 3h5v5h-5z" />
      <path d="M19.5 5.5l-3 3" />
    </>
  ),
  /** Pleated filter in a frame. */
  filter: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M6 6l2 12 2-12 2 12 2-12 2 12 2-12" />
    </>
  ),
  /** Impeller / axial fan. */
  fan: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="12" r="1.5" />
      <path d="M12 10.5c0-3 1-5.5 3.5-6 1 2.2-.5 5-3.5 6" />
      <path d="M13.3 12.8c2.6 1.5 4.3 3.6 3.5 6-2.4.2-4.1-2.5-3.5-6" />
      <path d="M10.7 12.8c-2.6 1.5-5.3 1.9-6.9 0 1-2.2 4.1-2.4 6.9 0" />
    </>
  ),
  /** Air washer: spray nozzles over media with droplets. */
  airWasher: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="1" />
      <path d="M5 8h14" />
      <path d="M7 8v1.5M12 8v1.5M17 8v1.5" />
      <path d="M7 12v.5M12 12v.5M17 12v.5M9.5 14v.5M14.5 14v.5" />
      <path d="M2 17h20" />
    </>
  ),
  /** Cyclone dust collector. */
  dust: (
    <>
      <path d="M6 3h12v6l-4 8h-4L6 9z" />
      <path d="M10 17v3h4v-3" />
      <path d="M2 6h4M18 4.5h4" />
      <path d="M9 9.5c1.5 1 4.5 1 6 0M10 12.5c1 .7 3 .7 4 0" />
    </>
  ),
  /** Kitchen canopy hood with rising plume. */
  hood: (
    <>
      <path d="M9 2h6v5" />
      <path d="M9 2v5" />
      <path d="M3 13l6-6h6l6 6z" />
      <path d="M3 13v1.5h18V13" />
      <path d="M8 21c0-1.5 1.2-1.5 1.2-3S8 16.5 8 16.5M12 21c0-1.5 1.2-1.5 1.2-3S12 16.5 12 16.5M16 21c0-1.5 1.2-1.5 1.2-3S16 16.5 16 16.5" />
    </>
  ),
  /** Cleanroom: room with ceiling HEPA terminals and downward flow. */
  cleanroom: (
    <>
      <path d="M2 21V4h20v17" />
      <path d="M5 4v2h5V4M14 4v2h5V4" />
      <path d="M7.5 9v8M16.5 9v8" />
      <path d="M6 15.5l1.5 1.5 1.5-1.5M15 15.5l1.5 1.5 1.5-1.5" />
      <path d="M12 9v4" />
      <path d="M1 21h22" />
    </>
  ),
  thermometer: (
    <>
      <path d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z" />
      <path d="M12 9v8" />
      <path d="M17 6h3M17 9h2M17 12h3" />
    </>
  ),
  /** Airflow streamlines. */
  airflow: (
    <>
      <path d="M2 8h11a3 3 0 1 0-3-3" />
      <path d="M2 12h17a3 3 0 1 1-3 3" />
      <path d="M2 16h7" />
    </>
  ),
  /** Basement / car park with an exhaust arrow. */
  basement: (
    <>
      <path d="M1 10h22" />
      <path d="M3 10v11h18V10" />
      <path d="M6 18h3l.8-2h4.4l.8 2h3" />
      <circle cx="8" cy="18.5" r=".5" />
      <circle cx="16" cy="18.5" r=".5" />
      <path d="M18 7V2M16 4l2-2 2 2" />
      <path d="M8 2l-3 5h6z" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8a1.5 1.5 0 0 0 2.1 2.1l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.5 2.5-2-.5-.5-2z" />
      <path d="M17 18l2 2M19 16l2 2" />
    </>
  ),
  factory: (
    <>
      <path d="M2 21V11l5 3v-3l5 3v-3l5 3V3h4v18z" />
      <path d="M6 18h2M11 18h2M16 18h2" />
      <path d="M1 21h22" />
    </>
  ),
  hotel: (
    <>
      <path d="M4 21V3h16v18" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
      <path d="M10 21v-3h4v3" />
      <path d="M2 21h20" />
    </>
  ),
  pharma: (
    <>
      <rect x="3" y="9" width="18" height="12" rx="1" />
      <path d="M12 12v6M9 15h6" />
      <path d="M7 9V6h10v3" />
      <path d="M9 6V3h6v3" />
    </>
  ),
  food: (
    <>
      <path d="M3 11h18a9 9 0 0 1-18 0z" />
      <path d="M8 7c0-1 1-1 1-2s-1-1-1-2M12 7c0-1 1-1 1-2s-1-1-1-2M16 7c0-1 1-1 1-2s-1-1-1-2" />
    </>
  ),
  building: (
    <>
      <path d="M3 21V7l7-4v18" />
      <path d="M10 9h11v12" />
      <path d="M6 9v.5M6 13v.5M6 17v.5M14 13h3M14 17h3" />
      <path d="M1 21h22" />
    </>
  ),
  warehouse: (
    <>
      <path d="M2 21V9l10-6 10 6v12" />
      <path d="M6 21v-8h12v8" />
      <path d="M6 16h12M6 19h12" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M12 2.5c2.6 2.8 3.8 6 3.8 9.5s-1.2 6.7-3.8 9.5c-2.6-2.8-3.8-6-3.8-9.5S9.4 5.3 12 2.5z" />
    </>
  ),
  gauge: (
    <>
      <path d="M3.5 17a9 9 0 1 1 17 0" />
      <path d="M12 14l4-5" />
      <circle cx="12" cy="14" r="1.2" />
      <path d="M6 13h1M17 13h1M12 6v1" />
    </>
  ),
  ruler: (
    <>
      <path d="M3 17L17 3l4 4L7 21z" />
      <path d="M7 13l2 2M10 10l1.5 1.5M13 7l2 2" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

export function HvacIcon({ name, ...props }: IconProps & { name: IconName }) {
  return <Base {...props}>{paths[name]}</Base>;
}
