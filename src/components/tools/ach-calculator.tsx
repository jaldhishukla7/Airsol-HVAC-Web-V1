"use client";

import { useId, useState } from "react";
import { ResultPanel, ResultRow, ToolShell } from "@/components/tools/tool-shell";
import { Input, NativeSelect } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { airflowFromAch, parsePositive, type LengthUnit } from "@/lib/calculators";
import { formatNumber } from "@/lib/utils";

export function AchCalculator() {
  const id = useId();
  const [unit, setUnit] = useState<LengthUnit>("ft");
  const [dims, setDims] = useState({ length: "40", width: "30", height: "12", ach: "10" });
  const parsed = {
    length: parsePositive(dims.length),
    width: parsePositive(dims.width),
    height: parsePositive(dims.height),
    ach: parsePositive(dims.ach),
  };
  const ok = Object.values(parsed).every((v) => v !== null);
  const result = ok
    ? airflowFromAch({
        length: parsed.length!,
        width: parsed.width!,
        height: parsed.height!,
        ach: parsed.ach!,
        unit,
      })
    : null;

  const field = (key: keyof typeof dims, label: string, suffix: string) => (
    <div className="space-y-1.5">
      <Label htmlFor={`${id}-${key}`}>
        {label} <span className="font-normal text-muted">({suffix})</span>
      </Label>
      <Input
        id={`${id}-${key}`}
        inputMode="decimal"
        value={dims[key]}
        onChange={(e) => setDims((d) => ({ ...d, [key]: e.target.value }))}
        aria-invalid={dims[key] !== "" && parsed[key] === null}
      />
    </div>
  );

  return (
    <ToolShell
      id="ach"
      icon="gauge"
      title="Air changes per hour calculator"
      intro="Turn a room's size and a chosen air-change rate into the airflow a ventilation system needs to deliver."
      formula={
        <>
          Volume = L × W × H
          <br />
          CFM = Volume (ft³) × ACH ÷ 60
          <br />
          CMH = Volume (m³) × ACH
        </>
      }
      assumptions={[
        "The room is treated as a single, well-mixed rectangular volume.",
        "The ACH value is your input; it should come from your code, standard or design basis.",
        "Heat removal or contaminant capture may need more airflow than the ACH figure gives.",
      ]}
      quoteType="industrial-ventilation"
    >
      <div className="space-y-4">
        <div className="max-w-[200px] space-y-1.5">
          <Label htmlFor={`${id}-unit`}>Dimensions in</Label>
          <NativeSelect id={`${id}-unit`} value={unit} onChange={(e) => setUnit(e.target.value as LengthUnit)}>
            <option value="ft">Feet</option>
            <option value="m">Metres</option>
          </NativeSelect>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {field("length", "Length", unit)}
          {field("width", "Width", unit)}
          {field("height", "Height", unit)}
        </div>
        <div className="max-w-[200px]">{field("ach", "Air changes per hour", "ACH")}</div>
      </div>
      <ResultPanel empty={!result}>
        {result ? (
          <>
            <ResultRow
              label="Room volume"
              value={formatNumber(unit === "ft" ? result.volumeFt3 : result.volumeM3)}
              unit={unit === "ft" ? "ft³" : "m³"}
            />
            <ResultRow label="Required airflow" value={formatNumber(result.cfm)} unit="CFM" />
            <ResultRow label="Required airflow" value={formatNumber(result.cmh)} unit="m³/h" />
          </>
        ) : null}
      </ResultPanel>
    </ToolShell>
  );
}
