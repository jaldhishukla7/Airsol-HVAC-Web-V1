"use server";

import { headers } from "next/headers";
import { sendQuoteEmail } from "@/lib/email";
import { quoteSchema, type QuoteInput, type QuoteResult } from "@/lib/quote-schema";
import { saveQuote } from "@/lib/quote-store";
import { rateLimit } from "@/lib/rate-limit";
import { SITE } from "@/lib/site";

function makeReference() {
  const d = new Date();
  const stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  return `AQ-${stamp}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

export async function submitQuote(input: QuoteInput): Promise<QuoteResult> {
  const parsed = quoteSchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      fieldErrors[key] ??= issue.message;
    }
    // A filled honeypot means a bot: pretend success so it learns nothing.
    if (fieldErrors.website) return { ok: true, reference: makeReference() };
    return { ok: false, error: "Some fields need attention.", fieldErrors };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  const limit = rateLimit(`quote:${ip}`);
  if (!limit.allowed) {
    return {
      ok: false,
      error: `Too many requests from this connection. Try again in ${Math.ceil(limit.retryAfterSec / 60)} minutes, or call ${SITE.phone.display}.`,
    };
  }

  const reference = makeReference();
  let emailed = false;
  try {
    const res = await sendQuoteEmail(parsed.data, reference);
    emailed = res.sent;
  } catch (err) {
    console.error("[quote] email failed", err);
    await saveQuote({ ...parsed.data, reference, receivedAt: new Date().toISOString(), emailed: false });
    return {
      ok: false,
      error: `Your request could not be emailed. Please email ${SITE.email} or call ${SITE.phone.display}.`,
    };
  }

  await saveQuote({ ...parsed.data, reference, receivedAt: new Date().toISOString(), emailed });
  return { ok: true, reference };
}
