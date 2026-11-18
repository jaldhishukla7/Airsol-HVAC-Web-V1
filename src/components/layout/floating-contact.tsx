"use client";

import { MessageCircle, Phone, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SITE, whatsappUrl } from "@/lib/site";

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-6" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.7-.6z" />
    </svg>
  );
}

/**
 * Floating contact: WhatsApp button plus a call button that opens a small
 * menu with both phone numbers.
 */
export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open ? (
          <motion.ul
            id="call-menu"
            initial={reduce ? false : { opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-64 origin-bottom-right overflow-hidden rounded-xl border border-line bg-white shadow-2xl"
          >
            {SITE.phones.map((p) => (
              <li key={p.tel} className="border-b border-line last:border-0">
                <a href={`tel:${p.tel}`} className="flex items-center gap-3 px-4 py-3 hover:bg-ice">
                  <span className="grid size-9 place-items-center rounded-full bg-navy text-cyan">
                    <Phone className="size-4" strokeWidth={1.5} aria-hidden />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy">{p.display}</span>
                    <span className="block text-[13px] text-muted">{p.name}</span>
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 hover:bg-ice"
              >
                <span className="grid size-9 place-items-center rounded-full bg-[#1f7a4c] text-white">
                  <MessageCircle className="size-4" strokeWidth={1.5} aria-hidden />
                </span>
                <span className="font-semibold text-navy">
                  WhatsApp {SITE.phone.display}
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            </li>
          </motion.ul>
        ) : null}
      </AnimatePresence>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Airsol on WhatsApp (opens in a new tab)"
        className="grid size-13 place-items-center rounded-full bg-[#1f7a4c] text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppGlyph />
      </a>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="call-menu"
        aria-label={open ? "Close call options" : "Call Airsol"}
        className="relative grid size-13 place-items-center rounded-full bg-navy text-white shadow-lg ring-1 ring-cyan/40 transition-transform hover:scale-105"
      >
        {open ? <X className="size-5" strokeWidth={1.5} aria-hidden /> : <Phone className="size-5" strokeWidth={1.5} aria-hidden />}
      </button>
    </div>
  );
}
