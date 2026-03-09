import { CenteredContainer } from "../../../components/centered-container";
import { cn } from "../../../shadcn/lib/utils";

interface RingProps {
  value: number;
  setValue: (value: number) => void;
  ringType: RingType;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export function Ring({ value, setValue, ringType, className = "", labelClassName = "", inputClassName = "" }: RingProps) {
  const ringInfos = ringsInfos[ringType];

  return (
    <div className={className}>
      <img height={80} width={80} src={RING_IULLUSTRATIONS_URLS[ringType]} />
      <p
        className={cn(labelClassName, "text-sm")}
        style={{
          color: ringInfos.color,
        }}
      >
        {ringInfos.label}
      </p>
      <CenteredContainer
        className={cn(inputClassName, `
          absolute
          h-9
          w-9
          rounded-full
          border-2
          border-[#f4ede2]
        `)}
        style={{
          backgroundColor: ringInfos.color,
        }}
      >
        <input
          id={`ring-${ringType}`}
          type="number"
          value={value}
          onChange={(e) => {
            setValue(Number(e.target.value));
          }}
          min={0}
          max={5}
          className={`
            h-full
            w-full

            [appearance:textfield]

            rounded-full
            text-center
            font-title
            text-white
            outline-none

            focus:bg-white/50

            [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:appearance-none
          `}
        />
      </CenteredContainer>
    </div>
  );
}

export type RingType = "air" | "earth" | "fire" | "water" | "void";
export const RING_IULLUSTRATIONS_URLS: Record<RingType, string> = {
  air: `${import.meta.env.BASE_URL}/images/air.png`,
  earth: `${import.meta.env.BASE_URL}/images/earth.png`,
  fire: `${import.meta.env.BASE_URL}/images/fire.png`,
  water: `${import.meta.env.BASE_URL}/images/water.png`,
  void: `${import.meta.env.BASE_URL}/images/void.png`,
};

interface RingInfo {
  label: string;
  color: string;
}
const ringsInfos: Record<RingType, RingInfo> = {
  air: {
    label: "Air",
    color: "#8a6c89",
  },
  earth: {
    label: "Terre",
    color: "#5f8a67",
  },
  fire: {
    label: "Feu",
    color: "#98693f",
  },
  water: {
    label: "Eau",
    color: "#57838c",
  },
  void: {
    label: "Vide",
    color: "#352f2c",
  },
};
