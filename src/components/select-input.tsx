import { useId, type ReactNode } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../shadcn/ui/select";
import { Label } from "./label";
import { cn } from "../shadcn/lib/utils";

export interface InputSelectOption {
  value: string;
  displayContent: ReactNode;
}

interface SelectInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: InputSelectOption[];
  isDisabled?: boolean;
  className?: string;
};

export function SelectInput({
  label,
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
        <Label htmlFor={id}>
          {label}
        </Label>
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
