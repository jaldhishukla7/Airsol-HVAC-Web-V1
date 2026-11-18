#!/usr/bin/env node
/**
 * Crawls the running site from "/" and checks every internal link and
 * in-page anchor (#id). Usage:
 *   npm run build && npm start   (in one terminal)
 *   npm run check:links          (in another; BASE_URL defaults to http://localhost:3000)
 * Exits with code 1 if any link is broken.
 */
const BASE = process.env.BASE_URL || "http://localhost:3000";
const seen = new Map(); // path -> { status, ids }
const queue = ["/"];
const links = []; // { from, href }

const hrefRe = /<a\b[^>]*?\shref="([^"]+)"/g;
const idRe = /\sid="([^"]+)"/g;

const decode = (s) => s.replace(/&amp;/g, "&");

async function visit(path) {
  const res = await fetch(BASE + path, { redirect: "manual" });
  const html = res.headers.get("content-type")?.includes("text/html") ? await res.text() : "";
  const ids = new Set([...html.matchAll(idRe)].map((m) => m[1]));
  seen.set(path, { status: res.status, ids });
  for (const m of html.matchAll(hrefRe)) {
    const href = decode(m[1]);
    if (/^(mailto:|tel:|https?:|\/\/)/.test(href)) continue;
    links.push({ from: path, href });
    const url = new URL(href, BASE + path);
    const p = url.pathname;
    if (!seen.has(p) && !queue.includes(p)) queue.push(p);
  }
}

while (queue.length) {
  const p = queue.shift();
  if (seen.has(p)) continue;
  try {
    await visit(p);
  } catch (e) {
    seen.set(p, { status: 0, ids: new Set(), error: e.message });
  }
}

const broken = [];
for (const { from, href } of links) {
  const url = new URL(href, BASE + from);
  const target = seen.get(url.pathname);
  if (!target || target.status >= 400 || target.status === 0) {
    broken.push(`${from} -> ${href} (status ${target?.status ?? "unvisited"})`);
  } else if (url.hash && url.hash.length > 1 && !target.ids.has(decodeURIComponent(url.hash.slice(1)))) {
    broken.push(`${from} -> ${href} (missing anchor ${url.hash})`);
  }
}

const pages = [...seen.entries()];
console.log(`Crawled ${pages.length} pages, checked ${links.length} links.`);
for (const [p, v] of pages) if (v.status !== 200) console.log(`  ${v.status} ${p}`);
if (broken.length) {
  console.log(`\nBroken links (${new Set(broken).size}):`);
  for (const b of new Set(broken)) console.log("  " + b);
  process.exit(1);
}
console.log("All internal links and anchors resolve.");
