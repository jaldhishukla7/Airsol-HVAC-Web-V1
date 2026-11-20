import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroSchematic } from "@/components/sections/hero-schematic";
import { Button } from "@/components/ui/button";

/**
 * Modern HVAC Industrial Hero Section.
 * Features live HVAC telemetry HUD indicators, cut-away AHU cross-section
 * schematic with multi-temperature thermodynamic airflow streams, rotating
 * aerodynamic centrifugal impeller, and precision engineering typography.
 */
export function Hero() {
  return (
    <section className="on-dark blueprint-dark relative overflow-hidden text-white">
      {/* Background radial aero-glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-cyan/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-steel/20 blur-[100px]"
      />

      <div className="container-x relative z-10 grid items-center gap-12 pt-12 pb-16 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:pt-16 lg:pb-24">
        <div>
          {/* Live HVAC Telemetry HUD Indicator */}
          <div className="animate-page-in inline-flex flex-wrap items-center gap-2.5 rounded-full border border-cyan/35 bg-navy-900/85 px-3.5 py-1.5 shadow-[0_0_20px_rgba(0,180,216,0.2)] backdrop-blur-md">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75 [animation-duration:2s]" />
              <span className="relative inline-flex size-2.5 rounded-full bg-cyan" />
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan-light uppercase">
              HVAC TELEMETRY: OPTIMAL
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" />
            <span className="hidden font-mono text-[11px] text-slate-300 sm:block">
              18,500 CFM • 450 Pa • HEPA 99.995%
            </span>
          </div>

          <h1
            className="animate-page-in mt-5 font-display text-[2.75rem] leading-[1.02] font-extrabold tracking-tight text-white sm:text-6xl xl:text-[4.25rem]"
            style={{ animationDelay: "80ms" }}
          >
            HVAC Manufacturer &amp;{" "}
            <span className="bg-gradient-to-r from-white via-cyan-light to-cyan bg-clip-text text-transparent">
              Engineering Contractor
            </span>
          </h1>

          <p
            className="animate-page-in mt-6 max-w-[54ch] text-[17px] leading-relaxed text-slate-300"
            style={{ animationDelay: "160ms" }}
          >
            We design, fabricate and commission custom double-skin AHUs, precision ductwork, certified cleanroom HEPA
            filtration, heavy-duty industrial blowers and complete commercial exhaust systems across India, the UAE and
            international markets.
          </p>

          {/* Action CTAs */}
          <div className="animate-page-in mt-8 flex flex-wrap items-center gap-3.5" style={{ animationDelay: "240ms" }}>
            <Button asChild size="lg" className="shadow-[0_0_24px_rgba(247,127,0,0.4)]">
              <Link href="/request-a-quote" className="flex items-center gap-2">
                <span>Request engineering quote</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghostDark" className="border border-cyan/30 hover:border-cyan/70">
              <Link href="/products">Explore equipment range</Link>
            </Button>
          </div>

          {/* Engineering credentials bar */}
          <div
            className="animate-page-in mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3"
            style={{ animationDelay: "320ms" }}
          >
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="size-4 shrink-0 text-cyan" />
              <span>AMCA &amp; ASHRAE Standards</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="size-4 shrink-0 text-cyan" />
              <span>ISO 14644 Cleanrooms</span>
            </div>
            <div className="col-span-2 flex items-center gap-2 text-xs text-slate-300 sm:col-span-1">
              <CheckCircle2 className="size-4 shrink-0 text-cyan" />
              <span>In-House Fabrication</span>
            </div>
          </div>
        </div>

        {/* Interactive AHU Schematic */}
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
  // 16 backward-curved aerodynamic airfoil blades
  for (let i = 0; i < 16; i++) {
    const a = (i * Math.PI * 2) / 16;
    const r1 = 22;
    const r2 = FAN.r - 4;
    const x1 = FAN.cx + r1 * Math.cos(a);
    const y1 = FAN.cy + r1 * Math.sin(a);
    const a2 = a + 0.52;
    const x2 = FAN.cx + r2 * Math.cos(a2);
    const y2 = FAN.cy + r2 * Math.sin(a2);
    const am = a + 0.18;
    const rm = (r1 + r2) / 2 + 5;
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
 * Multi-temperature thermodynamic airflow streams:
 * - Intake air: Warm/ambient orange-gold streamlines
 * - Post-coil & supply air: Chilled/pure cyan-ice laminar streamlines
 */
function AirflowLayer({ ys }: { ys: number[] }) {
  const warmIntake = { from: 0, to: 190, lines: ys };
  const conditionedSupply = { from: 262, to: VB.w, lines: ys.slice(1, 4) };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Warm outdoor & return air currents entering mixing box and filters */}
      {warmIntake.lines.map((y, i) => (
        <div
          key={`warm-${y}`}
          className="absolute h-[2px] overflow-hidden"
          style={{
            left: `${(warmIntake.from / VB.w) * 100}%`,
            width: `${((warmIntake.to - warmIntake.from) / VB.w) * 100}%`,
            top: `calc(${(y / VB.h) * 100}% - 1px)`,
          }}
        >
          <div
            className="airflow-strip-warm h-full w-[calc(100%+64px)]"
            style={{ animationDelay: `${i * -0.28}s` }}
          />
        </div>
      ))}

      {/* Chilled, conditioned laminar air generated by blower through HEPA */}
      {conditionedSupply.lines.map((y, i) => (
        <div
          key={`cold-${y}`}
          className="absolute h-[2.5px] overflow-hidden"
          style={{
            left: `${(conditionedSupply.from / VB.w) * 100}%`,
            width: `${((conditionedSupply.to - conditionedSupply.from) / VB.w) * 100}%`,
            top: `calc(${(y / VB.h) * 100}% - 1px)`,
          }}
        >
          <div
            className="airflow-strip-cold h-full w-[calc(100%+64px)]"
            style={{ animationDelay: `${i * -0.22}s` }}
          />
        </div>
      ))}
    </div>
  );
}

/** Centrifugal impeller with backward-inclined airfoil blades and precision hub */
function Impeller({ blades }: { blades: string[] }) {
  const d = (FAN.r - 2) * 2;
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
        {/* Outer impeller shroud */}
        <circle cx={FAN.cx} cy={FAN.cy} r={FAN.r - 4} stroke="#00E5FF" strokeWidth="1.75" fill="none" opacity="0.9" />
        <circle cx={FAN.cx} cy={FAN.cy} r={FAN.r - 8} stroke="#00B4D8" strokeWidth="0.75" strokeDasharray="3 3" fill="none" opacity="0.6" />

        {/* 16 Curved airfoil blades */}
        {blades.map((p) => (
          <path key={p} d={p} stroke="#38D3F5" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        ))}

        {/* Heavy duty central motor hub */}
        <circle cx={FAN.cx} cy={FAN.cy} r="22" stroke="#00E5FF" strokeWidth="2" fill="#071A33" />
        <circle cx={FAN.cx} cy={FAN.cy} r="14" stroke="#00B4D8" strokeWidth="1" strokeDasharray="4 2" fill="#0B2545" />
        <circle cx={FAN.cx} cy={FAN.cy} r="6" fill="#00E5FF" />
      </svg>
    </div>
  );
}

function AhuSchematic() {
  const blades = impellerBlades();
  const flowYs = [128, 156, 184, 212, 240];
  const labels = [
    { x: 52, text: "Fresh Air" },
    { x: 104, text: "Pre-Filter" },
    { x: 160, text: "Fine Filter" },
    { x: 226, text: "Cooling Coil" },
    { x: 352, text: "Centrifugal Fan" },
    { x: 470, text: "HEPA Stage" },
    { x: 560, text: "Supply Duct" },
  ];

  return (
    <figure className="relative mx-auto w-full max-w-[640px]" aria-labelledby="ahu-caption">
      <svg viewBox="0 0 640 340" className="h-auto w-full" role="img" aria-labelledby="ahu-title">
        <title id="ahu-title">
          Cut-away engineering schematic of an air handling unit showing intake louvre, pre-filter, fine bag filter,
          chilled water coil, centrifugal blower, and terminal HEPA filter.
        </title>

        {/* Section labels with engineering leader lines */}
        <g fontFamily="var(--font-display), sans-serif" fontSize="13" fontWeight="600" fill="#CBD5E1" textAnchor="middle">
          {labels.map((l, i) => (
            <g key={l.text}>
              <rect
                x={l.x - 36}
                y={i % 2 ? 46 : 28}
                width="72"
                height="20"
                rx="3"
                fill="#0A1F3A"
                stroke="#00B4D8"
                strokeWidth="0.75"
                strokeOpacity="0.5"
              />
              <text x={l.x} y={i % 2 ? 60 : 42} fill="#E2E8F0">
                {l.text}
              </text>
              <path d={`M${l.x} ${i % 2 ? 66 : 48}V94`} stroke="#00B4D8" strokeOpacity=".6" strokeWidth="1" strokeDasharray="2 2" />
            </g>
          ))}
        </g>

        {/* Double-skin insulated casing */}
        <rect x="20" y="96" width="560" height="190" rx="6" fill="#0A1F3A" stroke="#00B4D8" strokeWidth="1.75" />
        <rect x="23" y="99" width="554" height="184" rx="4" fill="none" stroke="#1B375B" strokeWidth="1" />

        {/* Discharge supply duct */}
        <path d="M580 138h52M580 244h52" stroke="#00B4D8" strokeWidth="1.75" />
        <path d="M632 130v122" stroke="#00E5FF" strokeWidth="1.75" strokeDasharray="4 4" />

        {/* Static streamlines backdrop */}
        <g stroke="#00B4D8" strokeWidth="1" opacity=".18">
          {flowYs.map((y) => (
            <path key={y} d={`M0 ${y}H640`} />
          ))}
        </g>

        {/* Inlet louvre blades */}
        <g stroke="#94A3B8" strokeWidth="2">
          {[116, 138, 160, 182, 204, 226, 248, 270].map((y) => (
            <path key={y} d={`M24 ${y}l52 14`} />
          ))}
          <path d="M80 96v190" stroke="#1B375B" strokeWidth="2" />
        </g>

        {/* Pre-filter pleated stage (G4) */}
        <path d={zigzag(96, 100, 282, 16, 16)} stroke="#F77F00" strokeWidth="1.75" fill="none" opacity="0.9" />
        <path d="M128 96v190" stroke="#1B375B" strokeWidth="2" />

        {/* Fine bag filter stage (F7) */}
        <g stroke="#CBD5E1" strokeWidth="1.5" fill="none">
          {[106, 148, 190, 232].map((y) => (
            <path key={y} d={`M138 ${y}h30l12 18-12 18h-30`} />
          ))}
        </g>
        <path d="M190 96v190" stroke="#1B375B" strokeWidth="2" />

        {/* Chilled water coil with condensation drain pan */}
        <g stroke="#00E5FF" strokeWidth="1.5" fill="none">
          <rect x="204" y="106" width="46" height="162" rx="2" fill="#071A33" opacity="0.8" />
          {Array.from({ length: 11 }, (_, i) => (
            <path key={i} d={`M204 ${114 + i * 14}h46`} strokeOpacity=".6" />
          ))}
          {/* Condensate drain pan */}
          <path d="M198 272h58v10h-58z" fill="#0077A0" stroke="#00E5FF" strokeWidth="1" />
        </g>
        <path d="M262 96v190" stroke="#1B375B" strokeWidth="2" />

        {/* Centrifugal fan scroll housing */}
        <path
          d={`M${FAN.cx - 78} ${FAN.cy}a78 78 0 1 1 78 78h-6`}
          stroke="#00B4D8"
          strokeWidth="2"
          fill="none"
        />
        <circle cx={FAN.cx} cy={FAN.cy} r={FAN.r} stroke="#38D3F5" strokeOpacity=".45" fill="none" />
        <path d="M440 96v190" stroke="#1B375B" strokeWidth="2" />

        {/* Cleanroom terminal HEPA stage (H14) */}
        <rect x="452" y="102" width="38" height="178" rx="2" stroke="#00E5FF" strokeWidth="2" fill="#061325" />
        <path d={zigzag(456, 104, 276, 30, 36)} stroke="#E0F7FF" strokeOpacity=".85" strokeWidth="1.2" fill="none" />
        <path d="M500 96v190" stroke="#1B375B" strokeWidth="2" />

        {/* Technical drafting dimension bar */}
        <g stroke="#00B4D8" strokeOpacity=".5" strokeWidth="1">
          <path d="M20 306v16M580 306v16M20 314h560" />
          <path d="M20 314l8-4v8zM580 314l-8-4v8z" fill="#00B4D8" />
        </g>
        <text
          x="300"
          y="332"
          textAnchor="middle"
          fontSize="11"
          fontWeight="500"
          fill="#94A3B8"
          fontFamily="var(--font-mono), monospace"
        >
          [ AIRFLOW VELOCITY: 2.5 m/s • STATIC PRESSURE: 450 Pa • ISO 14644 HEPA CASING ]
        </text>
      </svg>

      <AirflowLayer ys={flowYs} />
      <Impeller blades={blades} />

      <figcaption id="ahu-caption" className="sr-only">
        Engineering cut-away schematic of an air handling unit illustrating air filtration, cooling coil, centrifugal
        blower and HEPA terminal discharge.
      </figcaption>
    </figure>
  );
}
