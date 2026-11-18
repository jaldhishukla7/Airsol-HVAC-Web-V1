import { PROJECTS, SECTORS, SITE_PHOTOS } from "@content/projects";
import { Gallery } from "@/components/sections/gallery";
import { PageHeader } from "@/components/sections/page-header";
import { ProjectsExplorer } from "@/components/sections/projects-explorer";
import { QuoteCta } from "@/components/sections/quote-cta";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "HVAC Projects & Clients | Airsol",
  description:
    "HVAC, ventilation and kitchen exhaust projects by Airsol for healthcare, hospitality, industrial and commercial clients.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Projects", href: "/projects" }]}
        title={
          <>
            Projects and
            <br />
            End-Consumer Clients
          </>
        }
        summary="Hospitals, hotels, resorts, restaurants, industrial plants and commercial developments. Filter by sector and open any project for details."
      />
      <section className="container-x py-14">
        <ProjectsExplorer projects={PROJECTS} sectors={SECTORS} />
      </section>
      <section aria-labelledby="sites-title" className="blueprint border-t border-line bg-ice">
        <div className="container-x py-16">
          <h2 id="sites-title" className="font-display text-4xl font-semibold">
            From our sites
          </h2>
          <p className="mt-2 max-w-[62ch] text-muted">
            Equipment and ductwork installed by our teams. Select a photo to view it full size.
          </p>
          <Gallery images={SITE_PHOTOS} variant="bento" className="mt-8" />
        </div>
      </section>
      <QuoteCta />
    </>
  );
}
