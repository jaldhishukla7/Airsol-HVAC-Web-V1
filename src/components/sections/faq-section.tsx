import type { Faq } from "@content/types";
import { JsonLd } from "@/components/layout/json-ld";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqSchema } from "@/lib/schema";

export function FaqSection({ faqs, title = "Frequently asked questions" }: { faqs: Faq[]; title?: string }) {
  return (
    <section aria-labelledby="faq-title">
      <h2 id="faq-title" className="font-display text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      <Accordion type="multiple" className="mt-4 border-t border-line">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`faq-${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
