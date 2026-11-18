import "server-only";
import { Resend } from "resend";
import { PROJECT_TYPES } from "@content/types";
import type { Quote } from "@/lib/quote-schema";
import { SITE } from "@/lib/site";

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function rows(q: Quote, reference: string) {
  const type = PROJECT_TYPES.find((p) => p.value === q.projectType)?.label ?? q.projectType;
  return [
    ["Reference", reference],
    ["Name", q.name],
    ["Company", q.company || "-"],
    ["Phone", q.phone],
    ["Email", q.email],
    ["Project type", type],
    ["Area (sq ft)", q.area || "-"],
    ["City", q.city || "-"],
    ["Sent from", q.source || "-"],
    ["Message", q.message],
  ] as const;
}

/**
 * Sends the quote request to sales@airsolhvac.com via Resend.
 * Without RESEND_API_KEY (local dev) the email is logged instead, and the
 * function reports `mocked: true` so the form still succeeds.
 */
export async function sendQuoteEmail(q: Quote, reference: string): Promise<{ sent: boolean; mocked: boolean }> {
  const data = rows(q, reference);
  const text = data.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<h2 style="font-family:Arial,sans-serif;color:#0B2545">New quote request ${escape(reference)}</h2>
<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
${data.map(([k, v]) => `<tr><td style="color:#5B6B7A;vertical-align:top">${k}</td><td style="white-space:pre-wrap">${escape(String(v))}</td></tr>`).join("")}
</table>`;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info("[email:mock] To: %s\nSubject: Quote request %s\n%s", SITE.email, reference, text);
    return { sent: false, mocked: true };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.QUOTE_FROM_EMAIL || "Airsol Website <website@airsolhvac.com>",
    to: process.env.QUOTE_TO_EMAIL || SITE.email,
    replyTo: q.email,
    subject: `Quote request ${reference}: ${q.name}${q.company ? ` (${q.company})` : ""}`,
    text,
    html,
  });
  if (error) throw new Error(`Resend error: ${error.message}`);
  return { sent: true, mocked: false };
}
