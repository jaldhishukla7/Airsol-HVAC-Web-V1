"use client";

import { useId, useState } from "react";
import { ResultPanel, ResultRow, ToolShell } from "@/components/tools/tool-shell";
import { Input, NativeSelect } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DUTY_LABELS,
  HOOD_RATES,
  HOOD_STYLE_LABELS,
  kitchenExhaust,
  parsePositive,
  type CookingDuty,
  type HoodStyle,
  type LengthUnit,
} from "@/lib/calculators";
import { formatNumber } from "@/lib/utils";

export function KitchenExhaustCalculator() {
  const id = useId();
  const [length, setLength] = useState("12");
  const [unit, setUnit] = useState<LengthUnit>("ft");
  const [style, setStyle] = useState<HoodStyle>("wall");
  const [duty, setDuty] = useState<CookingDuty>("medium");
  const n = parsePositive(length);
  const result = n === null ? null : kitchenExhaust({ length: n, unit, style, duty });

  return (
    <ToolShell
      id="kitchen"
      icon="hood"
      title="Kitchen exhaust quick airflow estimate"
      intro="Estimate the exhaust airflow for a commercial kitchen hood from its length, style and the heaviest appliance under it."
      formula={
        <>
          Exhaust CFM = hood length (ft) × rate (CFM/ft)
          <br />
          Double island: × 2 sides
          <br />
          Rate for this selection: {HOOD_RATES[style][duty]} CFM/ft
        </>
      }
      assumptions={[
        "Rates are typical minimums from US model mechanical code tables for grease (Type I) hoods.",
        "The hood is classified by the heaviest-duty appliance beneath it.",
        "Local codes, your consultant's specification and any hood listing take precedence.",
        "Make-up air must be designed to replace most of this exhaust airflow.",
      ]}
      quoteType="kitchen-exhaust"
    >
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-[1fr_160px]">
          <div className="space-y-1.5">
            <Label htmlFor={`${id}-len`}>Hood length</Label>
            <Input
              id={`${id}-len`}
              inputMode="decimal"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              aria-invalid={length !== "" && n === null}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={`${id}-unit`}>Unit</Label>
            <NativeSelect id={`${id}-unit`} value={unit} onChange={(e) => setUnit(e.target.value as LengthUnit)}>
              <option value="ft">Feet</option>
              <option value="m">Metres</option>
            </NativeSelect>
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={`${id}-style`}>Hood style</Label>
          <NativeSelect id={`${id}-style`} value={style} onChange={(e) => setStyle(e.target.value as HoodStyle)}>
            {(Object.keys(HOOD_STYLE_LABELS) as HoodStyle[]).map((k) => (
              <option key={k} value={k}>
                {HOOD_STYLE_LABELS[k]}
              </option>
            ))}
          </NativeSelect>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={`${id}-duty`}>Cooking duty</Label>
          <NativeSelect id={`${id}-duty`} value={duty} onChange={(e) => setDuty(e.target.value as CookingDuty)}>
            {(Object.keys(DUTY_LABELS) as CookingDuty[]).map((k) => (
              <option key={k} value={k}>
                {DUTY_LABELS[k].label}: {DUTY_LABELS[k].examples}
              </option>
            ))}
          </NativeSelect>
        </div>
      </div>
      <ResultPanel empty={!result}>
        {result ? (
          <>
            <ResultRow label="Hood length" value={formatNumber(result.lengthFt, 1)} unit="ft" />
            <ResultRow label="Exhaust airflow" value={formatNumber(result.cfm)} unit="CFM" />
            <ResultRow label="Exhaust airflow" value={formatNumber(result.cmh)} unit="m³/h" />
          </>
        ) : null}
      </ResultPanel>
    </ToolShell>
  );
}
