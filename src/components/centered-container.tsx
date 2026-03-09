import type { ReactNode } from "react";

interface CenteredContainerProps {
  children: ReactNode;
  className?: string;
  tooltip?: string;
  style?: React.CSSProperties;
};

export function CenteredContainer({
  children,
  className = "",
  style = {},
  tooltip = "",
}: CenteredContainerProps) {
  return (
    <div
      {...(tooltip !== "" && { "data-tooltip-id": "global" })}
      {...(tooltip !== "" && { "data-tooltip-content": tooltip })}
      className={`
        flex
        items-center
        justify-center

        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
}
