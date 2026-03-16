import { CircleQuestionMark } from "lucide-react";
import type { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { cn } from "../shadcn/lib/utils";

interface HelperTextProps {
  helperText: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export function HelperText({ helperText, className = "", style = {} }: HelperTextProps) {
  return (
    <CircleQuestionMark
      className={cn(
        `
          size-4
          shrink-0
          outline-none
        `,
        className,
      )}
      data-tooltip-id="global"
      data-tooltip-html={renderToStaticMarkup(helperText)}
      style={style}
    />
  );
}
