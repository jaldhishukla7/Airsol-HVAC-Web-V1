import "server-only";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import type { Quote } from "@/lib/quote-schema";

export type StoredQuote = Quote & { reference: string; receivedAt: string; emailed: boolean };

/** Storage abstraction so the JSONL file can later be swapped for a database. */
export interface QuoteStore {
  save(quote: StoredQuote): Promise<void>;
}

/**
 * Appends each request as one JSON line.
 * Local dev: ./.data/quotes.jsonl. On Vercel the filesystem is read-only except
 * /tmp, which is temporary, so set QUOTE_STORE_DIR=/tmp and replace this with a
 * database-backed store (e.g. Postgres, Vercel KV or Google Sheets) for durable copies.
 */
export class FileQuoteStore implements QuoteStore {
  constructor(private dir = process.env.QUOTE_STORE_DIR || path.join(process.cwd(), ".data")) {}
  async save(quote: StoredQuote) {
    await mkdir(this.dir, { recursive: true });
    await appendFile(path.join(this.dir, "quotes.jsonl"), JSON.stringify(quote) + "\n", "utf8");
  }
}

/** Fallback used when the file store cannot be written (e.g. read-only filesystem). */
export class ConsoleQuoteStore implements QuoteStore {
  async save(quote: StoredQuote) {
    console.info("[quote-store] %s", JSON.stringify(quote));
  }
}

export async function saveQuote(quote: StoredQuote) {
  try {
    await new FileQuoteStore().save(quote);
  } catch (err) {
    console.warn("[quote-store] file store unavailable, logging instead:", (err as Error).message);
    await new ConsoleQuoteStore().save(quote);
  }
}
