import { AchCalculator } from "@/components/tools/ach-calculator";
import { CfmConverter } from "@/components/tools/cfm-converter";
import { KitchenExhaustCalculator } from "@/components/tools/kitchen-exhaust-calculator";
import { PageHeader } from "@/components/sections/page-header";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "HVAC Calculators: CFM, ACH & Kitchen Exhaust | Airsol",
  description:
    "Free preliminary HVAC calculators: CFM to CMH converter, air changes per hour airflow calculator and commercial kitchen exhaust airflow estimate.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Tools", href: "/tools" }]}
        title="Engineering calculators"
        summary="Preliminary airflow estimates you can use before a site survey. Each tool shows its formula and assumptions. Results are not a final engineering design."
        icon="gauge"
      >
        <nav aria-label="Calculators" className="flex flex-wrap gap-2">
          {[
            ["#converter", "CFM and CMH"],
            ["#ach", "Air changes per hour"],
            ["#kitchen", "Kitchen exhaust"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="rounded-md border border-white/30 px-4 py-2 text-sm font-medium text-white hover:border-cyan">
              {label}
            </a>
          ))}
        </nav>
      </PageHeader>
      <div className="container-x space-y-10 py-14">
        <CfmConverter />
        <AchCalculator />
        <KitchenExhaustCalculator />
      </div>
    </>
  );
}
