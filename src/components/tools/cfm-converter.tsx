"use client";

import { useId, useState } from "react";
import { ResultPanel, ResultRow, ToolShell } from "@/components/tools/tool-shell";
import { Input, NativeSelect } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cfmToCmh, cmhToCfm, cmhToLps, cmhToM3s, parsePositive } from "@/lib/calculators";
import { formatNumber } from "@/lib/utils";

export function CfmConverter() {
  const id = useId();
  const [value, setValue] = useState("1000");
  const [from, setFrom] = useState<"cfm" | "cmh">("cfm");
  const n = parsePositive(value);
  const cmh = n === null ? null : from === "cfm" ? cfmToCmh(n) : n;
  const cfm = cmh === null ? null : from === "cfm" ? n! : cmhToCfm(cmh);

  return (
    <ToolShell
      id="converter"
      icon="airflow"
      title="CFM and CMH converter"
      intro="Convert airflow between cubic feet per minute and cubic metres per hour, the two units most HVAC drawings and datasheets use."
      formula={
        <>
          CMH = CFM × 1.69901
          <br />
          CFM = CMH ÷ 1.69901
        </>
      }
      assumptions={[
        "1 ft³ = 0.0283168 m³ and 1 hour = 60 minutes.",
        "Volumetric flow only: no correction for air density, temperature or altitude.",
      ]}
      quoteType="other"
    >
      <div className="grid gap-4 sm:grid-cols-[1fr_180px]">
        <div className="space-y-1.5">
          <Label htmlFor={`${id}-v`}>Airflow</Label>
          <Input
            id={`${id}-v`}
            inputMode="decimal"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-invalid={value !== "" && n === null}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={`${id}-u`}>Unit</Label>
          <NativeSelect id={`${id}-u`} value={from} onChange={(e) => setFrom(e.target.value as "cfm" | "cmh")}>
            <option value="cfm">CFM (ft³/min)</option>
            <option value="cmh">CMH (m³/h)</option>
          </NativeSelect>
        </div>
      </div>
      <ResultPanel empty={cmh === null}>
        {cmh !== null && cfm !== null ? (
          <>
            <ResultRow label="Cubic feet per minute" value={formatNumber(cfm, 1)} unit="CFM" />
            <ResultRow label="Cubic metres per hour" value={formatNumber(cmh, 1)} unit="m³/h" />
            <ResultRow label="Cubic metres per second" value={formatNumber(cmhToM3s(cmh), 3)} unit="m³/s" />
            <ResultRow label="Litres per second" value={formatNumber(cmhToLps(cmh), 1)} unit="L/s" />
          </>
        ) : null}
      </ResultPanel>
    </ToolShell>
  );
}
