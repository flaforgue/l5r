import type { ChangeEvent } from "react";
import { useId } from "react";
import { Label } from "./label";
import { cn } from "../shadcn/lib/utils";

interface NumberInputProps {
  label?: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
  className?: string;
  labelClassName?: string;
}

export default function NumberInput({
  label,
  value,
  min,
  max,
  onChange,
  className = "",
  labelClassName = "",
}: NumberInputProps) {
  const id = `number-input-${useId()}`;
  const minValue = min ?? 0;
  const maxValue = max ?? Infinity;

  const onChangeProxy = (value: unknown) => {
    const castedValue = Number(value);
    const validCastedValue = isNaN(castedValue) ? 0 : castedValue;
    const validValue = Math.max(minValue, Math.min(validCastedValue, maxValue));
    onChange(Math.round(validValue * 100) / 100);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeProxy(Number(e.target.value));
  };

  const increment = () => {
    onChangeProxy(value + 1);
  };
  const decrement = () => {
    onChangeProxy(value - 1);
  };

  const btnClass = `
    relative overflow-hidden
    bg-[#f5ede0]
    hover:bg-[#eddfc8]
    active:bg-[#e5d4b8]
    border border-[#c8a06a]
    px-3 py-2
    text-[#5a3e1b] text-sm font-serif
    transition-colors duration-150
    focus:outline-none
  `;

  return (
    <div className={className}>
      {label !== undefined && (
        <Label
          htmlFor={id}
          className={cn(`
            mb-1

            ${labelClassName}
          `)}
        >
          {label}
        </Label>
      )}
      <div
        className={`
          flex
          max-w-36
          items-stretch
          text-gray-900
          shadow-sm
        `}
      >
        <button
          type="button"
          onClick={decrement}
          className={`
            ${btnClass}

            rounded-l
            border-r-0
          `}
        >
          <span
            className={`
              relative
              leading-none
            `}
          >
            一
          </span>
        </button>

        <input
          type="number"
          id={id}
          name={id}
          onChange={handleChange}
          min={minValue}
          max={maxValue}
          value={value}
          className={`
            block
            w-16

            [appearance:textfield]

            border-y
            border-[#c8a06a]
            bg-[#f5ede0]
            px-1
            py-2
            text-center
            font-serif
            text-sm
            text-[#3a2410]
            transition-colors
            duration-150
            outline-none

            focus:bg-white/50

            [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:appearance-none
          `}
        />

        <button
          type="button"
          onClick={increment}
          className={`
            ${btnClass}

            rounded-r
            border-l-0
          `}
        >
          <span
            className={`
              relative
              leading-none
            `}
          >
            十
          </span>
        </button>
      </div>
      {max !== undefined && (
        <Label
          htmlFor={id}
          className={cn(labelClassName, `
            mt-1
            font-sans!
            text-xs
            normal-case!
          `)}
        >
          Max.
          {" "}
          {max}
        </Label>
      )}
    </div>
  );
}
