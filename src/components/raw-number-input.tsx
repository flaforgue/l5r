import type { ChangeEvent } from "react";
import { cn } from "../shadcn/lib/utils";

interface RawNumberInputProps {
  value: number;
  onChange: (v: number) => void;
  id: string;
  min?: number | undefined;
  max?: number | undefined;
  isDisabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function RawNumberInput({
  value,
  onChange,
  id,
  min,
  max,
  isDisabled = false,
  className = "",
  style = {},
}: RawNumberInputProps) {
  const minValue = min ?? 0;
  const maxValue = max ?? Infinity;

  const onChangeProxy = (value: unknown) => {
    onChange(fixNumberInputValue(value, minValue, maxValue));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeProxy(Number(e.target.value));
  };

  return (
    <input
      type="number"
      disabled={isDisabled}
      id={id}
      name={id}
      onChange={handleChange}
      min={minValue}
      max={maxValue}
      value={value}
      className={cn(
        `
          [appearance:textfield]

          font-sans
          text-sm
          text-[#3a2410]
          outline-none

          focus:bg-white/50

          [&::-webkit-inner-spin-button]:appearance-none
          [&::-webkit-outer-spin-button]:appearance-none

          ${isDisabled
      ? `
        cursor-not-allowed!
        bg-[#f5ede0]!
        opacity-30
      `
      : ""}
        `,
        className,
      )}
      style={style}
    />
  );
}

export function fixNumberInputValue(value: unknown, min: number, max: number) {
  const castedValue = Number(value);
  const validCastedValue = isNaN(castedValue) ? 0 : castedValue;
  const validValue = Math.max(min, Math.min(validCastedValue, max));

  return Math.round(validValue * 100) / 100;
}
