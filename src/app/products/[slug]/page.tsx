import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, getProduct } from "@content/products";
import { DetailTemplate } from "@/components/sections/detail-template";
import { pageMetadata } from "@/lib/metadata";
import { productSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return pageMetadata({ title: p.seoTitle, description: p.metaDescription, path: `/products/${p.slug}` });
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  return <DetailTemplate page={p} kind="products" schema={productSchema(p, `/products/${p.slug}`)} />;
}
