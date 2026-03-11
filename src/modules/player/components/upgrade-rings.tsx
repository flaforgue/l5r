import { HelperText } from "../../../components/helper-text";
import NumberInput from "../../../components/number-input";
import { useCharacterStore } from "../stores/character.store";
import { RING_LABELS, RING_TYPES, type RingType } from "./ring";

export function UpgradeRings() {
  const {
    airValue,
    updateAirValue,
    earthValue,
    updateEarthValue,
    fireValue,
    updateFireValue,
    waterValue,
    updateWaterValue,
    voidValue,
    updateVoidValue,
    experience,
    updateExperience,
  } = useCharacterStore();

  const ringValues: Record<RingType, number> = {
    air: airValue,
    earth: earthValue,
    fire: fireValue,
    water: waterValue,
    void: voidValue,
  };

  const lowestRingValue = Math.min(...Object.values(ringValues));

  function updateRingValue(ringType: RingType, value: number) {
    if (ringType === "water") {
      updateWaterValue(value);
    } else if (ringType === "air") {
      updateAirValue(value);
    } else if (ringType === "earth") {
      updateEarthValue(value);
    } else if (ringType === "fire") {
      updateFireValue(value);
    } else {
      updateVoidValue(value);
    }
  }

  return (
    <div
      className={`
        flex
        flex-col
        gap-4
      `}
    >
      {RING_TYPES.map((ringType) => {
        const ringValue = ringValues[ringType];
        const upgradeCost = (ringValue + 1) * 3;

        const max = Math.min(5, voidValue + lowestRingValue);
        const canBeUpgraded = ringValue < max;
        const hasEnoughExperience = experience >= upgradeCost;
        const isDisabled = !canBeUpgraded || !hasEnoughExperience;

        function upgradeRingValue(value: number) {
          if (isDisabled) {
            return;
          }

          updateExperience(experience - upgradeCost);
          updateRingValue(ringType, value);
        }

        function downgradeRingValue(value: number) {
          const downgradeCost = (value + 1) * 3;
          updateExperience(experience + downgradeCost);
          updateRingValue(ringType, value);
        }

        return (
          <div
            key={ringType}
            className={`
              grid
              grid-cols-2
              gap-1
            `}
          >
            <div
              className={`
                flex
                items-center
                gap-1
              `}
            >
              <img height={20} width={20} src={`${import.meta.env.BASE_URL}/images/${ringType}.png`} />
              {RING_LABELS[ringType]}
              <HelperText helperText={ringHelperTexts[ringType]} />
            </div>
            <NumberInput
              label={`Coût : ${upgradeCost}`}
              value={ringValue}
              onChange={(value) => {
                if (value > ringValue) {
                  upgradeRingValue(value);
                } else if (value < ringValue) {
                  downgradeRingValue(value);
                }
              }}
              max={max}
              isIncreaseDisabled={isDisabled}
              increaseButtonTooltip={getTooltipContent(canBeUpgraded, hasEnoughExperience)}
            />
          </div>
        );
      })}
    </div>
  );
}

const ringHelperTexts: Record<RingType, string> = {
  air: "Augmente l'attention et la vigilance",
  earth: "Augmente l'endurance et le sang-froid",
  fire: "Augmente l'attention et l'endurance",
  water: "Augmente la vigilance et le sang-froid",
  void: "Augmente le max de points de vide",
};

function getTooltipContent(canBeUpgraded: boolean, hasEnoughExperience: boolean): string | undefined {
  if (!canBeUpgraded) {
    return "Vous ne pouvez pas augmenter cet anneau (max 5 ou la somme du plus faible anneau et de l'anneau de vide)";
  }

  if (!hasEnoughExperience) {
    return "Vous n'avez pas assez d'expérience pour augmenter cet anneau";
  }

  return undefined;
}
