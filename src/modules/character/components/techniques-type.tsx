import type { Technique } from "../../techniques/techniques";

interface TechniquesTypeProps {
  technique: Technique;
}

export function TechniquesType({ technique }: TechniquesTypeProps) {
  return (
    <img
      height={32}
      width={32}
      src={technique.illustrationUrl}
      data-tooltip-id="global"
      data-tooltip-content={technique.type.charAt(0).toUpperCase() + technique.type.slice(1)}
      className={`
        rounded-full
        border-2
        border-[#9e8060]
        bg-white
        p-0.25
      `}
    />
  );
}
