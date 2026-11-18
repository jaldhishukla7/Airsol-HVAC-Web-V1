import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 };

/** Shared Open Graph card: navy blueprint grid, title, tagline and airflow lines. */
export async function renderOg({ title, eyebrow }: { title: string; eyebrow?: string }) {
  const font = await readFile(
    path.join(process.cwd(), "node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-600-normal.woff"),
  );
  const grid =
    "linear-gradient(rgba(0,180,216,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.10) 1px, transparent 1px)";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0B2545",
          backgroundImage: grid,
          backgroundSize: "60px 60px",
          color: "white",
          fontFamily: "Barlow",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#00B4D8" }}>{eyebrow ?? SITE.name}</div>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 64 : 80, lineHeight: 1.02, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 30, color: "#A9C1D9" }}>
          <span>{SITE.tagline}</span>
          <span style={{ color: "#F77F00" }}>airsolhvac.com</span>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: [{ name: "Barlow", data: font, weight: 600, style: "normal" }] },
  );
}
