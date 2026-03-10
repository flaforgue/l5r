import { useId } from "react";
import { Label } from "./label";
import { cn } from "../shadcn/lib/utils";
import RawNumberInput, { fixNumberInputValue } from "./raw-number-input";

interface NumberInputProps {
  label?: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
  className?: string;
  labelClassName?: string;
  inputStyle?: React.CSSProperties;
}

export default function NumberInput({
  label,
  value,
  min = 0,
  max = Infinity,
  onChange,
  className = "",
  labelClassName = "",
  inputStyle = {},
}: NumberInputProps) {
  const id = `number-input-${useId()}`;

  const increment = () => {
    onChange(fixNumberInputValue(value + 1, min, max));
  };
  const decrement = () => {
    onChange(fixNumberInputValue(value - 1, min, max));
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
          className={cn("mb-1", labelClassName)}
        >
          {label}
        </Label>
      )}
      <div
        className={`
          flex
          max-w-36
          items-stretch
          bg-[#f5ede0]
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

        <RawNumberInput
          id={id}
          onChange={onChange}
          min={min}
          max={max}
          value={value}
          className={`
            block
            w-16
            border-y
            border-[#c8a06a]
            px-1
            py-2
            text-center
          `}
          style={inputStyle}
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
      {max !== Infinity && (
        <Label
          htmlFor={id}
          className={cn(
            `
              mt-1
              font-sans!
              text-xs
              normal-case!
            `,
            labelClassName,
          )}
        >
          Max.
          {" "}
          {max}
        </Label>
      )}
    </div>
  );
}
