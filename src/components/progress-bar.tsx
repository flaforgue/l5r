import { cn } from "../shadcn/lib/utils";
import { Label } from "./label";

interface ProgressBarProps {
  max: number;
  value: number;
  className?: string;
  label?: string;
}

export function ProgressBar({ max, value, className = "", label }: ProgressBarProps) {
  return (
    <div
      className={cn(`
        flex
        flex-col
      `, className)}
    >
      {label !== undefined && <Label className="mb-3">{label}</Label>}
      <div
        className={`
          flex
          items-center
          gap-2
        `}
      >
        <progress
          max={max}
          value={value}
          className={`
            h-4
            w-full
            appearance-none
            overflow-hidden
            rounded
            bg-[#e8d9c0]

            [&::-moz-progress-bar]:rounded
            [&::-moz-progress-bar]:bg-[#c8a06a]
            [&::-webkit-progress-bar]:bg-[#e8d9c0]
            [&::-webkit-progress-value]:rounded
            [&::-webkit-progress-value]:bg-[#c8a06a]
          `}
        >
          {value}
          &nbsp;
          /
          &nbsp;
          {max}
        </progress>
        <span
          className={`
            text-sm
            font-medium
            text-[#8b6914]
          `}
        >
          {value}
          /
          {max}
        </span>
      </div>
    </div>
  );
}
