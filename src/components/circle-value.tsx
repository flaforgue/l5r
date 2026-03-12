import type { ReactNode } from "react";
import { cn } from "../shadcn/lib/utils";
import { HelperText } from "./helper-text";
import { CircleImage } from "./images/circle-image";

interface CircleValueProps {
  value: number;
  label?: string;
  iconClassName?: string;
  textClassName?: string;
  helperText?: ReactNode;
}
export function CircleValue({ value, label, iconClassName = "", textClassName = "", helperText }: CircleValueProps) {
  return (
    <div
      className={cn(
        `
          relative
          mb-5
          h-16
          w-16
        `,
        iconClassName,
      )}
    >
      <CircleImage />
      <p
        className={cn(
          `
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-center
            font-title
            text-xl
            text-olive-900
          `,
          textClassName,
        )}
      >
        {value}
      </p>
      <div
        className={cn(
          `
            absolute
            top-18
            left-1/2
            flex
            -translate-x-1/2
            -translate-y-1/2
            items-center
            gap-0.5
            text-olive-900
          `,
          textClassName,
        )}
      >
        {helperText !== undefined && <HelperText helperText={helperText} />}
        {label !== undefined && <p className="text-sm">{label}</p>}
      </div>
    </div>
  );
}
