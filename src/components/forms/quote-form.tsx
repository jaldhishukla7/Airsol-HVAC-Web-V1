"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, LoaderCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { useForm, type FieldPath } from "react-hook-form";
import { submitQuote } from "@/app/actions/quote";
import { Button } from "@/components/ui/button";
import { Input, NativeSelect, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PROJECT_TYPES, type ProjectType } from "@content/types";
import { quoteSchema, type QuoteInput } from "@/lib/quote-schema";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "full" | "compact";
  defaultProjectType?: ProjectType;
  className?: string;
};

export function QuoteForm({ variant = "full", defaultProjectType, className }: Props) {
  const uid = useId();
  const pathname = usePathname();
  const [serverError, setServerError] = useState<string | null>(null);
  const [done, setDone] = useState<{ reference: string; name: string } | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      projectType: defaultProjectType ?? ("" as ProjectType),
      area: "",
      city: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    try {
      const res = await submitQuote({ ...values, source: pathname });
      if (res.ok) {
        setDone({ reference: res.reference, name: values.name });
        reset();
        return;
      }
      if (res.fieldErrors) {
        for (const [k, msg] of Object.entries(res.fieldErrors)) {
          if (msg) setError(k as FieldPath<QuoteInput>, { message: msg });
        }
      }
      setServerError(res.error);
    } catch {
      setServerError(`The request could not be sent. Check your connection, or email ${SITE.email}.`);
    }
  });

  if (done) {
    return (
      <div role="status" className={cn("rounded-lg border border-success/30 bg-white p-6", className)}>
        <CircleCheck className="size-8 text-success" strokeWidth={1.5} aria-hidden />
        <p className="mt-3 font-display text-2xl font-semibold text-navy">Request sent</p>
        <p className="mt-2 text-[15px] text-graphite">
          Thank you, {done.name.split(" ")[0]}. Our sales team has your request (reference{" "}
          <strong>{done.reference}</strong>) and will reply from {SITE.email}. For anything urgent, call{" "}
          <a className="font-semibold text-steel underline" href={`tel:${SITE.phone.tel}`}>
            {SITE.phone.display}
          </a>
          .
        </p>
        <Button variant="outline" size="sm" className="mt-5" onClick={() => setDone(null)}>
          Send another request
        </Button>
      </div>
    );
  }

  const compact = variant === "compact";
  const field = (name: keyof QuoteInput, label: string, node: React.ReactNode, opts?: { optional?: boolean; wide?: boolean }) => {
    const err = errors[name]?.message;
    return (
      <div className={cn("space-y-1.5", opts?.wide && "sm:col-span-2")}>
        <Label htmlFor={`${uid}-${name}`}>
          {label}
          {opts?.optional ? <span className="font-normal text-muted"> (optional)</span> : null}
        </Label>
        {node}
        {err ? (
          <p id={`${uid}-${name}-err`} className="text-[13px] text-danger">
            {err}
          </p>
        ) : null}
      </div>
    );
  };
  const a11y = (name: keyof QuoteInput) => ({
    id: `${uid}-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${uid}-${name}-err` : undefined,
  });

  return (
    <form noValidate onSubmit={onSubmit} className={cn("grid gap-4 sm:grid-cols-2", className)} aria-label="Quote request">
      {field("name", "Name", <Input autoComplete="name" {...a11y("name")} {...register("name")} />)}
      {field(
        "company",
        "Company",
        <Input autoComplete="organization" {...a11y("company")} {...register("company")} />,
        { optional: true },
      )}
      {field("phone", "Phone", <Input type="tel" autoComplete="tel" {...a11y("phone")} {...register("phone")} />)}
      {field("email", "Email", <Input type="email" autoComplete="email" {...a11y("email")} {...register("email")} />)}
      {field(
        "projectType",
        "Project type",
        <NativeSelect {...a11y("projectType")} {...register("projectType")}>
          <option value="" disabled>
            Choose one
          </option>
          {PROJECT_TYPES.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </NativeSelect>,
      )}
      {compact
        ? field("city", "City", <Input autoComplete="address-level2" {...a11y("city")} {...register("city")} />, {
            optional: true,
          })
        : field("area", "Area (sq ft)", <Input inputMode="decimal" {...a11y("area")} {...register("area")} />, {
            optional: true,
          })}
      {compact
        ? null
        : field("city", "City", <Input autoComplete="address-level2" {...a11y("city")} {...register("city")} />, {
            optional: true,
          })}
      {field(
        "message",
        "Project details",
        <Textarea
          rows={compact ? 3 : 5}
          placeholder="Application, airflow or room sizes if known, drawings available, timeline"
          {...a11y("message")}
          {...register("message")}
        />,
        { wide: true },
      )}

      {/* Honeypot field: visually hidden and skipped by keyboard and screen readers. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input id={`${uid}-website`} tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-muted">
          Sent to {SITE.email}. We use your details only to respond to this request.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting} className="sm:min-w-48">
          {isSubmitting ? (
            <>
              <LoaderCircle className="animate-spin" aria-hidden />
              Sending
            </>
          ) : (
            "Send quote request"
          )}
        </Button>
      </div>
      {serverError ? (
        <p role="alert" className="rounded-md border border-danger/30 bg-danger/5 p-3 text-sm text-danger sm:col-span-2">
          {serverError}
        </p>
      ) : null}
    </form>
  );
}
