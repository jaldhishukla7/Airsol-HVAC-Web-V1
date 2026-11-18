import { PRODUCTS, getProduct } from "@content/products";
import { OG_SIZE, renderOg } from "@/lib/og";

export const alt = "Airsol HVAC Industry";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return PRODUCTS.map((x) => ({ slug: x.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getProduct(slug);
  return renderOg({ title: item?.h1 ?? "Airsol HVAC Industry", eyebrow: item?.short });
}
