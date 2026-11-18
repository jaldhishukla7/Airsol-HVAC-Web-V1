import localFont from "next/font/local";

/*
 * Fonts are self-hosted from the @fontsource packages, so builds need no
 * network access and visitors make no request to Google.
 */
export const barlow = localFont({
  src: [
    { path: "../../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-500-normal.woff2", weight: "500" },
    { path: "../../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-600-normal.woff2", weight: "600" },
    { path: "../../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-barlow",
  display: "swap",
  fallback: ["Arial Narrow", "sans-serif"],
  adjustFontFallback: "Arial",
});

export const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});
