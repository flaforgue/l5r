import { cn } from "../shadcn/lib/utils";
import { CircleImage } from "./images/circle-image";

interface CircleValueProps {
  value: number;
  label: string;
  iconClassName?: string;
  textClassName?: string;
}
export function CircleValue({ value, label, iconClassName = "", textClassName = "" }: CircleValueProps) {
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
      <p
        className={cn(
          `
            absolute
            top-18
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-olive-900
          `,
          textClassName,
        )}
      >
        {label}
      </p>
    </div>
  );
}
