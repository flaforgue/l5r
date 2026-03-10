import type { ChangeEvent, ReactNode } from "react";
import { useId } from "react";
import { Label } from "./label";
import { HelperText } from "./helper-text";

interface TextareaInputProps {
  onChange: (v: string) => void;
  rows?: number;
  value?: string;
  label?: string | undefined;
  placeholder?: string | undefined;
  className?: string;
  labelClassName?: string;
  helperText?: ReactNode;
}

export default function TextareaInput({
  value,
  onChange,
  rows = 3,
  placeholder,
  label,
  className = "",
  labelClassName = "",
  helperText,
}: TextareaInputProps) {
  const id = useId();
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={className}>
      {label !== undefined && (
        <div
          className={`
            mb-1
            flex
            items-center
            gap-1
          `}
        >
          <Label htmlFor={id} className={labelClassName}>
            {label}
          </Label>
          {helperText !== undefined && <HelperText className="text-olive-700" helperText={helperText} />}
        </div>
      )}
      <div className="relative">
        <textarea
          name={id}
          id={id}
          rows={rows}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete="off"
          spellCheck={false}
          className={`
            block
            w-full
            border-b
            border-olive-700
            bg-transparent
            p-2
            font-sans
            text-sm
            text-[#3a2410]
            transition-colors
            duration-200
            outline-none

            placeholder:tracking-wider
            placeholder:text-gray-500

            focus:bg-white/50
          `}
        />
      </div>
    </div>
  );
}
