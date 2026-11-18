import { z } from "zod";
import { PROJECT_TYPES } from "@content/types";

const projectTypeValues = PROJECT_TYPES.map((p) => p.value) as [string, ...string[]];

/** Shared by the client form and the server action. */
export const quoteSchema = z.object({
  name: z.string().trim().min(2, { error: "Enter your name." }).max(80),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9][0-9\s\-()]{6,19}$/, { error: "Enter a phone number with country code, e.g. +91 98765 43210." }),
  email: z.email({ error: "Enter a valid email address." }).max(160),
  projectType: z.enum(projectTypeValues, { error: "Choose a project type." }),
  area: z
    .string()
    .trim()
    .regex(/^\d{0,9}(\.\d{1,2})?$/, { error: "Enter the area as a number of square feet." })
    .optional()
    .or(z.literal("")),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, { error: "Tell us a little about the project (at least 10 characters)." })
    .max(4000),
  /** Honeypot: hidden from people, often filled by bots. Must stay empty. */
  website: z.string().max(0).optional().or(z.literal("")),
  /** Page the request was sent from, for the sales team's context. */
  source: z.string().max(200).optional(),
});

export type QuoteInput = z.input<typeof quoteSchema>;
export type Quote = z.output<typeof quoteSchema>;

export type QuoteResult =
  | { ok: true; reference: string }
  | { ok: false; error: string; fieldErrors?: Partial<Record<keyof QuoteInput, string>> };
