import { HelperText } from "../../../components/helper-text";
import NumberInput from "../../../components/number-input";
import { useCharacterStore } from "../stores/character.store";
import { RING_LABELS, RING_TYPES, type RingType } from "./ring";

const ringMinValue = 1;
const ringMaxValue = 5;

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
    spendExperience,
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
        const upgradeCost = 3 * (ringValue + 1);

        const restrictionValue = voidValue + lowestRingValue;
        const isRestricted = ringValue >= restrictionValue;
        const isMax = ringValue >= ringMaxValue;
        const hasEnoughExperience = experience >= upgradeCost;
        const isUpgradeDisabled = isMax || isRestricted || !hasEnoughExperience;

        function upgradeRingValue(value: number) {
          if (isUpgradeDisabled) {
            return;
          }

          spendExperience(upgradeCost);
          updateRingValue(ringType, value);
        }

        function downgradeRingValue(value: number) {
          if (value <= ringMinValue) {
            return;
          }

          const downgradeCost = -3 * (value + 1);
          spendExperience(downgradeCost);
          updateRingValue(ringType, value);
        }

        return (
          <div
            key={ringType}
            className={`
              flex
              items-center
              justify-between
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
              className="w-28"
              inputClassName="w-10"
              onChange={(value) => {
                if (value > ringValue) {
                  upgradeRingValue(value);
                } else if (value < ringValue) {
                  downgradeRingValue(value);
                }
              }}
              max={Math.min(ringMaxValue, restrictionValue)}
              min={ringMinValue}
              isIncreaseDisabled={isUpgradeDisabled}
              increaseButtonTooltip={getTooltipContent({
                isMax,
                isRestricted,
                hasEnoughExperience,
              })}
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

function getTooltipContent({
  isMax,
  isRestricted,
  hasEnoughExperience,
}: {
  isMax: boolean;
  isRestricted: boolean;
  hasEnoughExperience: boolean;
}): string | undefined {
  if (isMax) {
    return "Cet anneau est déjà au maximum";
  }

  if (isRestricted) {
    return "Aucun anneau ne peut dépasser la somme de l'anneau de vide et de l'anneau le plus faible";
  }

  if (!hasEnoughExperience) {
    return "Vous n'avez pas assez d'expérience pour augmenter cet anneau";
  }

  return undefined;
}
