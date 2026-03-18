import { useId, type ReactNode } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../shadcn/ui/select";
import { Label } from "./label";
import { cn } from "../shadcn/lib/utils";
import { HelperText } from "./helper-text";

export interface InputSelectOption {
  value: string;
  displayContent: ReactNode;
}

interface SelectInputProps {
  label?: string;
  helperText?: ReactNode;
  value: string;
  onChange: (value: string) => void;
  options: InputSelectOption[];
  isDisabled?: boolean;
  className?: string;
};

export function SelectInput({
  label,
  helperText,
  value,
  onChange,
  options,
  isDisabled = false,
  className = "",
}: SelectInputProps) {
  const id = useId();

  return (
    <div
      className={`
        flex
        flex-col
        gap-1
      `}
    >
      {label !== undefined && (
        <div
          className={`
            flex
            items-center
            justify-between
            gap-2
          `}
        >
          <Label htmlFor={id}>
            {label}
          </Label>
          {helperText !== undefined && <HelperText className="text-olive-700" helperText={helperText} />}
        </div>
      )}
      <Select
        name={id}
        value={value}
        onValueChange={onChange}
      >
        <SelectTrigger
          disabled={isDisabled}
          className={cn(
            "hover:bg-slate-50",
            className,
          )}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map(
            (option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="cursor-pointer"
              >
                {option.displayContent}
              </SelectItem>
            ),
          )}
        </SelectContent>
      </Select>
    </div>
  );
}
