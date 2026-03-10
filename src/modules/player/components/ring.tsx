import { CenteredContainer } from "../../../components/centered-container";
import { HelperText } from "../../../components/helper-text";
import RawNumberInput from "../../../components/raw-number-input";
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
      <div
        className={cn(
          `
            flex
            items-center
            gap-0.5
            text-sm
          `,
          labelClassName,
        )}
        style={{
          color: ringInfos.color,
        }}
      >
        <HelperText helperText={ringInfos.helperText} className="size-3" style={{ color: ringInfos.color }} />
        {RING_LABELS[ringType]}
      </div>
      <CenteredContainer
        className={cn(
          `
            absolute
            h-9
            w-9
            rounded-full
            border-2
            border-[#f4ede2]
          `,
          inputClassName,
        )}
        style={{
          backgroundColor: ringInfos.color,
        }}
      >
        <RawNumberInput
          id={`ring-${ringType}`}
          value={value}
          onChange={setValue}
          min={0}
          max={5}
          className={`
            h-full
            w-full
            rounded-full
            text-center
            text-white
          `}
        />
      </CenteredContainer>
    </div>
  );
}

export const RING_TYPES = ["air", "earth", "fire", "water", "void"] as const;
export type RingType = typeof RING_TYPES[number];
export function isRingType(value: unknown): value is RingType {
  return RING_TYPES.includes(value as RingType);
}
export const RING_IULLUSTRATIONS_URLS: Record<RingType, string> = {
  air: `${import.meta.env.BASE_URL}/images/air.png`,
  earth: `${import.meta.env.BASE_URL}/images/earth.png`,
  fire: `${import.meta.env.BASE_URL}/images/fire.png`,
  water: `${import.meta.env.BASE_URL}/images/water.png`,
  void: `${import.meta.env.BASE_URL}/images/void.png`,
};

export const RING_LABELS: Record<RingType, string> = {
  air: "Air",
  earth: "Terre",
  fire: "Feu",
  water: "Eau",
  void: "Vide",
};

interface RingInfo {
  color: string;
  helperText: string;
}
const ringsInfos: Record<RingType, RingInfo> = {
  air: {
    color: "#8a6c89",
    helperText: "Gracieux, astucieux et précis",
  },
  earth: {
    color: "#5f8a67",
    helperText: "Ferme, stable et consciencieux",
  },
  fire: {
    color: "#98693f",
    helperText: "Direct, féroce et inventif",
  },
  water: {
    color: "#57838c",
    helperText: "Perceptif, flexible et adaptable",
  },
  void: {
    color: "#352f2c",
    helperText: "Intangible, indéfini et mystérieux",
  },
};
