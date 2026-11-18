import { LegalPage } from "@/components/sections/legal-page";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Use | Airsol",
  description: "Terms for using the Airsol HVAC Industry website and its engineering calculators.",
  path: "/terms",
});

// TODO_CONFIRM: have these terms reviewed before launch.
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of use"
      path="/terms"
      updated="18 November 2026"
      sections={[
        {
          heading: "About this website",
          body: [
            `This website is provided by ${SITE.name} to describe its products and services. By using it you agree to these terms.`,
          ],
        },
        {
          heading: "Information on this site",
          body: [
            "Product and service descriptions are general. Specifications, capacities and prices for any project are set out only in a written quotation from us.",
          ],
        },
        {
          heading: "Calculators and articles",
          body: [
            "The calculators and articles give preliminary estimates and general guidance. They are not a final engineering design and must not be relied on for construction, safety or code compliance without a site-specific design by a qualified engineer.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            `Text, drawings and images on this site belong to ${SITE.name} or are used with permission. Do not copy them for commercial use without written consent.`,
          ],
        },
        {
          heading: "Liability",
          body: [
            "We take care to keep this site accurate but do not guarantee that it is complete or free of errors. To the extent the law allows, we are not liable for loss arising from use of the site.",
          ],
        },
        {
          heading: "Governing law",
          body: ["These terms are governed by the laws of India, and courts in Ahmedabad, Gujarat have jurisdiction."],
        },
      ]}
    />
  );
}
