import type { ChangeEvent } from "react";
import { useId } from "react";
import { Label } from "./label";

interface TextInputProps {
  onChange: (v: string) => void;
  value?: string;
  label?: string | undefined;
  placeholder?: string | undefined;
  className?: string;
}

export default function TextInput({
  value,
  onChange,
  placeholder,
  label,
  className = "",
}: TextInputProps) {
  const id = useId();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={className}>
      {label !== undefined && (
        <Label htmlFor={id} className="mb-1">
          {label}
        </Label>
      )}
      <div className="relative">
        <input
          type="text"
          name={id}
          id={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete="off"
          spellCheck={false}
          className={`
            block
            w-full
            border-b
            border-[#c8a06a]
            bg-transparent
            p-2
            py-1
            font-sans
            text-sm
            text-[#3a2410]
            transition-colors
            duration-200
            outline-none

            placeholder:tracking-wider
            placeholder:text-[#c8a06a]

            focus:bg-white/50
          `}
        />
      </div>
    </div>
  );
}
