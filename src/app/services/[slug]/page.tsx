import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@content/services";
import { DetailTemplate } from "@/components/sections/detail-template";
import { pageMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.seoTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  return <DetailTemplate page={s} kind="services" schema={serviceSchema(s, `/services/${s.slug}`)} />;
}
