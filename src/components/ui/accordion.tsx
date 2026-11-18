"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item className={cn("border-b border-line", className)} {...props} />;
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex flex-1 items-center justify-between gap-6 py-5 text-left font-sans text-[16px] font-semibold text-navy transition-colors hover:text-steel",
          className,
        )}
        {...props}
      >
        {children}
        <Plus
          aria-hidden
          className="size-5 shrink-0 text-steel transition-transform duration-200 group-data-[state=open]:rotate-45"
          strokeWidth={1.5}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.2s_ease-out] data-[state=open]:animate-[accordion-down_0.2s_ease-out]"
      {...props}
    >
      <div className={cn("max-w-[68ch] pb-5 text-[15px] leading-relaxed text-graphite", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
