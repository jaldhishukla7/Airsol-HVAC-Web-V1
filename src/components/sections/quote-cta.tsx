import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function QuoteCta({
  title = "Share your drawings or requirements",
  body = "Send room sizes, airflow, layouts or a consultant's specification. Our engineering team will review them and come back with a proposal.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="on-dark blueprint-dark text-white">
      <div className="container-x flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="max-w-[30ch] font-display text-4xl leading-tight font-semibold text-white">{title}</h2>
          <p className="mt-3 max-w-[60ch] text-[16px] text-mist">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/request-a-quote">Request a quote</Link>
          </Button>
          <Button asChild size="lg" variant="ghostDark">
            <a href={`tel:${SITE.phone.tel}`}>
              <Phone aria-hidden strokeWidth={1.5} />
              {SITE.phone.display}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
