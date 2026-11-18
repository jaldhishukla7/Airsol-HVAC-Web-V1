# Airsol HVAC Industry website

Production website for **Airsol HVAC Industry** (Partnership Firm), HVAC manufacturer and engineering contractor in Odhav, Ahmedabad.
Replaces the previous static Bootstrap site at https://www.airsolhvac.com.

Built with Next.js 16 (App Router, Turbopack), React 19, TypeScript (strict), Tailwind CSS 4, shadcn/ui-style components on Radix,
Motion, react-hook-form + zod, MDX and Resend.

## Quick start

Requires Node.js 20.9 or newer (tested on Node 22).

```bash
npm install
cp .env.example .env.local   # optional in development
npm run dev                  # http://localhost:3000
```

Without `RESEND_API_KEY`, quote requests still succeed in development: the email is printed to the server console and a copy is
appended to `.data/quotes.jsonl`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (type-checks during build) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (flat config, Next core-web-vitals + TypeScript rules) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check:links` | Crawls the running site and fails on any broken internal link or `#anchor` |

Link check: run `npm run build && npm start` in one terminal and `npm run check:links` in another
(set `BASE_URL` to check a deployed URL).

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project**, import the repo. The framework preset is detected as Next.js; no build settings need changing.
3. Add environment variables from `.env.example` (at minimum `RESEND_API_KEY` and `QUOTE_FROM_EMAIL`).
4. In Resend, verify the `airsolhvac.com` domain (DNS records), so mail can be sent from `website@airsolhvac.com`.
5. Deploy, then add `www.airsolhvac.com` and `airsolhvac.com` under **Settings → Domains** and set the apex to redirect to `www`.
6. Submit `https://www.airsolhvac.com/sitemap.xml` in Google Search Console.

Old URLs (`/index.html`, `/about-us.html`, `/contact-us.html`, `/blogs.html`) redirect permanently to the new pages
(see `next.config.ts`).

## Where to edit things

All company facts and copy live outside the components:

| File | Contents |
| --- | --- |
| `src/lib/site.ts` | Name, both phone numbers (`SITE.phones`), email, founding year, hours, certifications, markets. Unverified values are marked `TODO_CONFIRM`. |
| `src/lib/site.ts` → `LOCATIONS` | Offices with address and Google Maps embed. Add a UAE entry here when that office opens; it appears on the home and contact pages with its own map. |
| `content/products.ts` | Product pages: H1, SEO title/description, body sections, spec table, FAQs, related links |
| `content/services.ts` | Service pages (same structure) |
| `content/industries.ts` | Industry pages |
| `content/projects.ts` | Clients and project pages, grouped by sector. Optional fields (`scope`, `equipment`, `designCriteria`, `outcome`, `images`, `year`) appear on the project page as soon as they are filled in. The first image replaces the designed cover. |
| `content/international.ts` | India / UAE / USA sections |
| `content/articles/*.mdx` | Articles. Add the new file to `content/articles/index.ts`. |
| `src/lib/calculators.ts` | Calculator formulas and kitchen hood rate table |

"X+ years" is computed everywhere from `SITE.foundedYear` and the footer year is computed at runtime, so neither goes stale.

## Project structure

```
content/                 Editable copy (TS data + MDX articles)
public/images/           WebP images (products, site photos, project placeholders)
scripts/check-links.mjs  Internal link and anchor checker
src/app/                 Routes, metadata, sitemap.ts, robots.ts, OG images, server action
src/components/icons/    Custom HVAC icon set (1.5px stroke, 24px grid)
src/components/layout/   Header (server wrapper + client UI), footer, breadcrumbs, JSON-LD, floating contact
src/components/sections/ Hero, page header, cards, FAQ, detail template, gallery lightbox, CTAs
src/components/forms/    Quote form (full, compact, lazy-loaded)
src/components/tools/    CFM/CMH converter, ACH calculator, kitchen exhaust estimate
src/components/ui/       shadcn/ui-style primitives (button, inputs, label, accordion)
src/lib/                 site.ts, schema.ts, calculators.ts, metadata, email, storage, rate limit
```

## Design tokens

Defined in `src/app/globals.css` (`@theme`):

| Token | Hex | Use |
| --- | --- | --- |
| `navy` | #0B2545 | Hero, page headers, footer, headings |
| `steel` | #13518A | Links and accents |
| `cyan` | #00B4D8 | Airflow graphics; on navy only |
| `cyan-ink` | #0077A0 | Cyan-toned text on light backgrounds (AA) |
| `ice` | #E8F6FB | Light section backgrounds |
| `graphite` | #1F2933 | Body text |
| `orange` | #F77F00 | Primary CTAs only, always with navy text (5.85:1) |

Fonts: Barlow Condensed (headings) and Inter (body), self-hosted from `@fontsource` via `next/font/local`, so builds need no
network access and visitors make no request to Google.

## Quote form

- Client: react-hook-form + zod (`src/lib/quote-schema.ts`, shared with the server).
- Server: `src/app/actions/quote.ts` re-validates, checks a honeypot field, rate-limits per IP (5 per 10 minutes),
  emails `sales@airsolhvac.com` via Resend with the sender as reply-to, and stores a copy.
- The compact form at the bottom of product and service pages loads only when scrolled near, to keep page JavaScript small.

### Quote storage

`src/lib/quote-store.ts` defines a `QuoteStore` interface. The default `FileQuoteStore` appends JSON lines to `.data/quotes.jsonl`.
On Vercel the filesystem is temporary, so for durable copies implement `QuoteStore` against a database
(Vercel Postgres/Neon, Supabase, or a Google Sheet) and use it in `saveQuote()`. The email to sales remains the primary record.

### Rate limiting

The limiter is in memory, which works on a single server or warm serverless instance. For strict limits across many instances,
back it with Upstash Redis or Vercel KV.

## SEO and structured data

- Unique title, description and canonical URL on every page (`src/lib/metadata.ts`).
- `app/sitemap.ts`, `app/robots.ts` (allows all crawlers, explicit `OAI-SearchBot` allow, sitemap URL).
- Open Graph images generated per product and service page and for the home page.
- JSON-LD: Organization + WebSite (home), BreadcrumbList (all inner pages), FAQPage (product, service, industry pages),
  Service, Product (no offers, ratings or prices), Article.
- The full street address is added to Organization JSON-LD only after `SITE.address.confirmed` is set to `true`.
- Every project page is in the sitemap.

## Accessibility and motion

- Skip link, semantic landmarks, visible focus outlines, labelled form fields with `aria-invalid`/`aria-describedby`,
  keyboard-operable mega menu (Escape closes), Radix dialogs for the mobile menu and lightbox (focus trapped, Escape closes).
- `prefers-reduced-motion` disables all animation and transitions.
- Scroll reveals use CSS scroll-driven animations (no JavaScript); unsupported browsers just show the content.
- The hero drawing is interactive: each AHU section can be hovered, tapped or reached by keyboard, and a caption explains it.
  It auto-tours the sections after load until the visitor picks one. Its loops run on composited layers and pause off-screen.
- Projects can be filtered by sector with animated re-flow (Motion). Cards have a cursor-follow glow; galleries open in a lightbox.

## Content still to confirm (TODO_CONFIRM)

Search the codebase for `TODO_CONFIRM`. Summary:

1. Street address and PIN code (`SITE.address`); currently from the old website.
2. Founding year (`SITE.foundedYear`, currently 2019 from the old About page).
3. Google Maps link and office hours (copied from the old website).
4. Certifications (none published until supplied with evidence).
5. Official social profiles.
6. Logo as SVG or transparent PNG (currently the old JPG).
7. Project details for each client in `content/projects.ts` (scope, equipment, design criteria, outcome, year, photos),
   and confirmation that each client is happy to be named. The client list is taken from the previous website.
8. Permission and project details for the site photos in `public/images/work/`.
9. Usage rights for product photos in `public/images/products/` and `public/images/general/`.
10. International scope: supply only, or supply and installation, in the UAE and USA.
11. Confirmation that VRV/VRF, cassette and ductable AC, chillers, insulation and fire safety (on the old site) are no longer offered.
12. Legal review of the privacy policy and terms.
13. A durable store for quote copies on Vercel, and a verified Resend domain.
