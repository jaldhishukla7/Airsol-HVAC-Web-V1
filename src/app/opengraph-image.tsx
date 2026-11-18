import { OG_SIZE, renderOg } from "@/lib/og";

export const alt = "Airsol HVAC Industry: HVAC manufacturer and engineering contractor";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ title: "HVAC Manufacturer & Engineering Contractor" });
}
