import Link from "next/link";
import { HeroSchematic } from "@/components/sections/hero-schematic";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

/**
 * Home hero. The signature element is a cut-away AHU schematic: air enters
 * through a louvre, passes the filter stages and coil, is driven by a
 * rotating centrifugal impeller and leaves through a HEPA stage. All motion
 * is CSS (no JS) and stops under prefers-reduced-motion.
 */
export function Hero() {
  return (
    <section className="on-dark blueprint-dark relative overflow-hidden text-white">
      <div className="container-x grid items-center gap-10 pt-14 pb-16 lg:grid-cols-[1fr_1.05fr] lg:gap-6 lg:pt-20 lg:pb-24">
        <div className="relative z-10">
          <p className="animate-page-in text-[15px] font-medium text-cyan">{SITE.tagline}</p>
          <h1
            className="animate-page-in mt-4 font-display text-[2.6rem] leading-[0.98] font-semibold text-white sm:text-6xl xl:text-[4.4rem]"
            style={{ animationDelay: "80ms" }}
          >
            HVAC Manufacturer &amp; Engineering Contractor
          </h1>
          <p
            className="animate-page-in mt-6 max-w-[54ch] text-[17px] leading-relaxed text-mist"
            style={{ animationDelay: "160ms" }}
          >
            We design, manufacture and install air handling units, ducting, filtration, ventilation and kitchen
            exhaust systems for industrial, pharmaceutical and commercial projects across India, the UAE and
            international markets.
          </p>
          <div className="animate-page-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <Button asChild size="lg">
              <Link href="/request-a-quote">Request a quote</Link>
            </Button>
            <Button asChild size="lg" variant="ghostDark">
              <Link href="/products">Explore products</Link>
            </Button>
          </div>
        </div>
        <div className="animate-schematic-in">
          <HeroSchematic>
            <AhuSchematic />
          </HeroSchematic>
        </div>
      </div>
    </section>
  );
}

const FAN = { cx: 352, cy: 190, r: 62 };

function impellerBlades() {
  const blades: string[] = [];
  for (let i = 0; i < 12; i++) {
    const a = (i * Math.PI * 2) / 12;
    const r1 = 24;
    const r2 = FAN.r - 6;
    const x1 = FAN.cx + r1 * Math.cos(a);
    const y1 = FAN.cy + r1 * Math.sin(a);
    const a2 = a + 0.45;
    const x2 = FAN.cx + r2 * Math.cos(a2);
    const y2 = FAN.cy + r2 * Math.sin(a2);
    const am = a + 0.12;
    const rm = (r1 + r2) / 2 + 6;
    const cx = FAN.cx + rm * Math.cos(am);
    const cy = FAN.cy + rm * Math.sin(am);
    blades.push(`M${x1.toFixed(1)} ${y1.toFixed(1)}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`);
  }
  return blades;
}

const zigzag = (x: number, y0: number, y1: number, w: number, n: number) => {
  const step = (y1 - y0) / n;
  let d = `M${x} ${y0}`;
  for (let i = 1; i <= n; i++) d += `L${i % 2 ? x + w : x} ${y0 + i * step}`;
  return d;
};

const VB = { w: 640, h: 340 };

/**
 * Moving airflow dashes. Each line is an HTML strip with a repeating dash
 * background, animated with transform only, so the browser's compositor runs
 * it without main-thread paint work.
 */
function AirflowLayer({ ys }: { ys: number[] }) {
  const segments = [
    { from: 0, to: FAN.cx - 70, lines: ys },
    { from: FAN.cx + 70, to: VB.w, lines: ys.slice(1, 4) },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {segments.map((seg) =>
        seg.lines.map((y, i) => (
          <div
            key={`${seg.from}-${y}`}
            className="absolute h-[2px] overflow-hidden"
            style={{
              left: `${(seg.from / VB.w) * 100}%`,
              width: `${((seg.to - seg.from) / VB.w) * 100}%`,
              top: `calc(${(y / VB.h) * 100}% - 1px)`,
            }}
          >
            <div
              className="airflow-strip h-full w-[calc(100%+48px)]"
              style={{ animationDelay: `${i * -0.37}s` }}
            />
          </div>
        )),
      )}
    </div>
  );
}

/** Centrifugal impeller in its own HTML layer, rotated with a composited CSS transform. */
function Impeller({ blades }: { blades: string[] }) {
  const d = (FAN.r - 4) * 2;
  const x0 = FAN.cx - d / 2;
  const y0 = FAN.cy - d / 2;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute"
      style={{
        left: `${(x0 / VB.w) * 100}%`,
        top: `${(y0 / VB.h) * 100}%`,
        width: `${(d / VB.w) * 100}%`,
        aspectRatio: "1",
      }}
    >
      <svg viewBox={`${x0} ${y0} ${d} ${d}`} className="animate-spin-med h-full w-full will-change-transform">
        <circle cx={FAN.cx} cy={FAN.cy} r={FAN.r - 5} stroke="#00B4D8" strokeWidth="1.5" fill="none" />
        {blades.map((p) => (
          <path key={p} d={p} stroke="#00B4D8" strokeWidth="2" fill="none" strokeLinecap="round" />
        ))}
        <circle cx={FAN.cx} cy={FAN.cy} r="20" stroke="#00B4D8" strokeWidth="1.5" fill="#0B2545" />
        <circle cx={FAN.cx} cy={FAN.cy} r="5" fill="#00B4D8" />
      </svg>
    </div>
  );
}

function AhuSchematic() {
  const blades = impellerBlades();
  const flowYs = [128, 156, 184, 212, 240];
  const labels = [
    { x: 52, text: "Fresh air" },
    { x: 104, text: "Pre-filter" },
    { x: 160, text: "Fine filter" },
    { x: 226, text: "Coil" },
    { x: 352, text: "Fan" },
    { x: 470, text: "HEPA" },
    { x: 560, text: "Supply" },
  ];
  return (
    <figure className="relative mx-auto w-full max-w-[640px]" aria-labelledby="ahu-caption">
      <svg viewBox="0 0 640 340" className="h-auto w-full" role="img" aria-labelledby="ahu-title">
        <title id="ahu-title">
          Cut-away drawing of an air handling unit: fresh air passes a pre-filter, fine filter and cooling coil, is
          driven by a centrifugal fan and leaves through a HEPA filter.
        </title>
        {/* Section labels with leader lines */}
        <g fontFamily="var(--font-barlow), sans-serif" fontSize="15" fill="#A9C1D9" textAnchor="middle">
          {labels.map((l, i) => (
            <g key={l.text}>
              <text x={l.x} y={i % 2 ? 62 : 44}>
                {l.text}
              </text>
              <path d={`M${l.x} ${i % 2 ? 68 : 50}V94`} stroke="#A9C1D9" strokeOpacity=".5" strokeWidth="1" />
            </g>
          ))}
        </g>

        {/* Casing */}
        <rect x="20" y="96" width="560" height="190" rx="4" fill="#0F2E55" stroke="#A9C1D9" strokeWidth="1.5" />
        {/* Discharge duct */}
        <path d="M580 140h50M580 242h50" stroke="#A9C1D9" strokeWidth="1.5" />
        <path d="M630 132v118" stroke="#A9C1D9" strokeWidth="1.5" strokeDasharray="3 5" />

        {/* Static streamlines; the moving dashes are composited HTML layers (see AirflowLayer). */}
        <g stroke="#00B4D8" strokeWidth="1" opacity=".25">
          {flowYs.map((y) => (
            <path key={y} d={`M0 ${y}H640`} />
          ))}
        </g>

        {/* Inlet louvre */}
        <g stroke="#A9C1D9" strokeWidth="1.5">
          {[116, 140, 164, 188, 212, 236, 260].map((y) => (
            <path key={y} d={`M24 ${y}l52 14`} />
          ))}
          <path d="M80 96v190" />
        </g>
        {/* Pre-filter */}
        <path d={zigzag(96, 100, 282, 16, 14)} stroke="#E8F6FB" strokeWidth="1.5" fill="none" />
        <path d="M128 96v190" stroke="#A9C1D9" strokeWidth="1.5" />
        {/* Fine (bag) filter */}
        <g stroke="#E8F6FB" strokeWidth="1.5" fill="none">
          {[104, 150, 196, 242].map((y) => (
            <path key={y} d={`M140 ${y}h26l10 18-10 18h-26`} />
          ))}
        </g>
        <path d="M190 96v190" stroke="#A9C1D9" strokeWidth="1.5" />
        {/* Cooling coil with fins and drain pan */}
        <g stroke="#E8F6FB" strokeWidth="1.5" fill="none">
          <rect x="204" y="108" width="44" height="160" />
          {Array.from({ length: 9 }, (_, i) => (
            <path key={i} d={`M204 ${118 + i * 17}h44`} strokeOpacity=".55" />
          ))}
          <path d="M200 274h52v8h-52z" />
        </g>
        <path d="M262 96v190" stroke="#A9C1D9" strokeWidth="1.5" />

        {/* Fan scroll housing */}
        <path
          d={`M${FAN.cx - 76} ${FAN.cy}a76 76 0 1 1 76 76h-6`}
          stroke="#A9C1D9"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx={FAN.cx} cy={FAN.cy} r={FAN.r} stroke="#A9C1D9" strokeOpacity=".4" fill="none" />
        <path d="M440 96v190" stroke="#A9C1D9" strokeWidth="1.5" />

        {/* HEPA stage */}
        <rect x="452" y="104" width="36" height="174" stroke="#E8F6FB" strokeWidth="1.5" fill="#0B2545" />
        <path d={zigzag(456, 106, 276, 28, 34)} stroke="#E8F6FB" strokeOpacity=".7" strokeWidth="1" fill="none" />
        <path d="M500 96v190" stroke="#A9C1D9" strokeWidth="1.5" />

        {/* Dimension line, drafting style */}
        <g stroke="#A9C1D9" strokeOpacity=".6" strokeWidth="1">
          <path d="M20 306v16M580 306v16M20 314h560" />
          <path d="M20 314l8-4v8zM580 314l-8-4v8z" fill="#A9C1D9" />
        </g>
        <text
          x="300"
          y="334"
          textAnchor="middle"
          fontSize="13"
          fill="#A9C1D9"
          fontFamily="var(--font-inter), sans-serif"
        >
          Select a section to see what it does
        </text>
      </svg>
      <AirflowLayer ys={flowYs} />
      <Impeller blades={blades} />
      <figcaption id="ahu-caption" className="sr-only">
        Schematic of the sections inside an air handling unit.
      </figcaption>
    </figure>
  );
}
