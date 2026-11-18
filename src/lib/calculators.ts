/**
 * Preliminary HVAC estimating formulas. These are for early sizing only and
 * are not a substitute for an engineered design.
 */

/** 1 CFM = 0.028316846592 m³/min × 60 = 1.69901 m³/h */
export const CMH_PER_CFM = 1.69901;
export const M3_TO_FT3 = 35.3147;
export const FT_PER_M = 3.28084;

export const cfmToCmh = (cfm: number) => cfm * CMH_PER_CFM;
export const cmhToCfm = (cmh: number) => cmh / CMH_PER_CFM;
/** 1 m³/s = 3600 m³/h */
export const cmhToM3s = (cmh: number) => cmh / 3600;
/** 1 L/s = 3.6 m³/h */
export const cmhToLps = (cmh: number) => cmh / 3.6;

export type LengthUnit = "ft" | "m";

/**
 * Air changes per hour → airflow.
 * CFM = volume (ft³) × ACH ÷ 60
 */
export function airflowFromAch(input: {
  length: number;
  width: number;
  height: number;
  ach: number;
  unit: LengthUnit;
}) {
  const { length, width, height, ach, unit } = input;
  const volumeInUnit = length * width * height;
  const volumeFt3 = unit === "ft" ? volumeInUnit : volumeInUnit * M3_TO_FT3;
  const cfm = (volumeFt3 * ach) / 60;
  return { volumeFt3, volumeM3: volumeFt3 / M3_TO_FT3, cfm, cmh: cfmToCmh(cfm) };
}

export type HoodStyle = "wall" | "single-island" | "double-island";
export type CookingDuty = "light" | "medium" | "heavy" | "extra-heavy";

/**
 * Typical minimum exhaust rates (CFM per linear foot of hood) from US model
 * mechanical code tables for Type I hoods. Double island values are per side.
 */
export const HOOD_RATES: Record<HoodStyle, Record<CookingDuty, number>> = {
  wall: { light: 200, medium: 300, heavy: 400, "extra-heavy": 550 },
  "single-island": { light: 400, medium: 500, heavy: 600, "extra-heavy": 700 },
  "double-island": { light: 250, medium: 300, heavy: 400, "extra-heavy": 550 },
};

export const HOOD_STYLE_LABELS: Record<HoodStyle, string> = {
  wall: "Wall-mounted canopy",
  "single-island": "Single island canopy",
  "double-island": "Double island canopy",
};

export const DUTY_LABELS: Record<CookingDuty, { label: string; examples: string }> = {
  light: { label: "Light duty", examples: "Ovens, steamers, kettles" },
  medium: { label: "Medium duty", examples: "Ranges, griddles, fryers" },
  heavy: { label: "Heavy duty", examples: "Charbroilers, woks" },
  "extra-heavy": { label: "Extra-heavy duty", examples: "Tandoor, wood or charcoal grills" },
};

/**
 * Kitchen exhaust estimate.
 * Exhaust CFM = hood length (ft) × rate (CFM/ft) [× 2 sides for a double island].
 */
export function kitchenExhaust(input: { length: number; unit: LengthUnit; style: HoodStyle; duty: CookingDuty }) {
  const lengthFt = input.unit === "ft" ? input.length : input.length * FT_PER_M;
  const rate = HOOD_RATES[input.style][input.duty];
  const sides = input.style === "double-island" ? 2 : 1;
  const cfm = lengthFt * rate * sides;
  return { lengthFt, rate, sides, cfm, cmh: cfmToCmh(cfm) };
}

/** Parses a user-entered number; returns null for empty, non-numeric or negative input. */
export function parsePositive(value: string): number | null {
  if (value.trim() === "") return null;
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}
