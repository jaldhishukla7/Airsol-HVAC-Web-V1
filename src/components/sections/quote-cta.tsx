import { ArrowRight, FileText, Phone } from "lucide-react";
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
    <section className="relative overflow-hidden border-t border-cyan/20 bg-gradient-to-b from-[#061224] via-[#091C36] to-[#040D1A] py-16 text-white sm:py-20">
      {/* Ambient background volumetric glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 h-72 w-96 rounded-full bg-cyan/15 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-96 rounded-full bg-steel/25 blur-[100px]"
      />

      <div className="container-x relative z-10">
        <div className="relative overflow-hidden rounded-2xl border border-cyan/35 bg-navy-950/80 p-8 shadow-[0_16px_50px_rgba(0,180,216,0.15)] backdrop-blur-xl sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          {/* Subtle blueprint line accent */}
          <div aria-hidden className="blueprint-lines pointer-events-none absolute inset-0 opacity-30" />

          <div className="relative z-10 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3.5 py-1 font-mono text-xs font-semibold tracking-wider text-cyan-light uppercase">
              <FileText className="size-3.5 text-cyan" />
              <span>RAPID ENGINEERING ESTIMATE &bull; 24-HOUR RESPONSE</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
              {title}
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-slate-300 sm:text-lg">
              {body}
            </p>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap items-center gap-4 lg:mt-0 lg:shrink-0">
            <Button asChild size="lg" className="font-semibold shadow-[0_0_24px_rgba(247,127,0,0.4)]">
              <Link href="/request-a-quote" className="flex items-center gap-2">
                <span>Request a quote</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
