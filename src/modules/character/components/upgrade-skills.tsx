import NumberInput from "../../../components/number-input";
import { Card, CardContent } from "../../../shadcn/ui/card";
import { useCharacterStore } from "../stores/character.store";

const skillMinValue = 0;
const skillMaxValue = 5;

interface SkillFamily {
  label: string;
  skills: {
    id: string;
    label: string;
    value: number;
    updateValue: (value: number) => void;
  }[];
}

export function UpgradeSkills() {
  const {
    experience,
    aestheticValue,
    updateAestheticValue,
    compositionValue,
    updateCompositionValue,
    stylismValue,
    updateStylismValue,
    forgeValue,
    updateForgeValue,
    physicalConditionValue,
    updatePhysicalConditionValue,
    armedFightingValue,
    updateArmedFightingValue,
    distantFightingValue,
    updateDistantFightingValue,
    unarmedFightingValue,
    updateUnarmedFightingValue,
    meditationValue,
    updateMeditationValue,
    tacticsValue,
    updateTacticsValue,
    cultureValue,
    updateCultureValue,
    governmentValue,
    updateGovernmentValue,
    medicineValue,
    updateMedicineValue,
    emotionsValue,
    updateEmotionsValue,
    theologyValue,
    updateTheologyValue,
    commandValue,
    updateCommandValue,
    courtesyValue,
    updateCourtesyValue,
    gamesValue,
    updateGamesValue,
    representationValue,
    updateRepresentationValue,
    commerceValue,
    updateCommerceValue,
    manualWorkValue,
    updateManualWorkValue,
    navigationValue,
    updateNavigationValue,
    tricksValue,
    updateTricksValue,
    survivalValue,
    updateSurvivalValue,
    spendExperience,
  } = useCharacterStore();

  const skillFamilies: SkillFamily[] = [
    {
      label: "戦 Comp. Martiales",
      skills: [
        {
          id: "physicalCondition",
          label: "Forme",
          value: physicalConditionValue,
          updateValue: updatePhysicalConditionValue,
        },
        {
          id: "armedFighting",
          label: "Arts Martiaux ⚔️",
          value: armedFightingValue,
          updateValue: updateArmedFightingValue,
        },
        {
          id: "distantFighting",
          label: "Arts Martiaux 🏹",
          value: distantFightingValue,
          updateValue: updateDistantFightingValue,
        },
        {
          id: "unarmedFighting",
          label: "Arts Martiaux 👊",
          value: unarmedFightingValue,
          updateValue: updateUnarmedFightingValue,
        },
        {
          id: "meditation",
          label: "Méditation",
          value: meditationValue,
          updateValue: updateMeditationValue,
        },
        {
          id: "tactics",
          label: "Tactique",
          value: tacticsValue,
          updateValue: updateTacticsValue,
        },
      ],
    },
    {
      label: "仕 Comp. Pro.",
      skills: [
        {
          id: "commerce",
          label: "Commerce",
          value: commerceValue,
          updateValue: updateCommerceValue,
        },
        {
          id: "manualWork",
          label: "Travail Manuel",
          value: manualWorkValue,
          updateValue: updateManualWorkValue,
        },
        {
          id: "navigation",
          label: "Navigation",
          value: navigationValue,
          updateValue: updateNavigationValue,
        },
        {
          id: "tricks",
          label: "Magouilles",
          value: tricksValue,
          updateValue: updateTricksValue,
        },
        {
          id: "survival",
          label: "Survie",
          value: survivalValue,
          updateValue: updateSurvivalValue,
        },
      ],
    },
    {
      label: "知 Comp. Savantes",
      skills: [
        {
          id: "culture",
          label: "Culture",
          value: cultureValue,
          updateValue: updateCultureValue,
        },
        {
          id: "government",
          label: "Gouvernement",
          value: governmentValue,
          updateValue: updateGovernmentValue,
        },
        {
          id: "medicine",
          label: "Médecine",
          value: medicineValue,
          updateValue: updateMedicineValue,
        },
        {
          id: "emotions",
          label: "Sentiments",
          value: emotionsValue,
          updateValue: updateEmotionsValue,
        },
        {
          id: "theology",
          label: "Théologie",
          value: theologyValue,
          updateValue: updateTheologyValue,
        },
      ],
    },
    {
      label: "創 Comp. Artisanales",
      skills: [
        {
          id: "aesthetic",
          label: "Esthétique",
          value: aestheticValue,
          updateValue: updateAestheticValue,
        },
        {
          id: "composition",
          label: "Composition",
          value: compositionValue,
          updateValue: updateCompositionValue,
        },
        {
          id: "stylism",
          label: "Stylisme",
          value: stylismValue,
          updateValue: updateStylismValue,
        },
        {
          id: "forge",
          label: "Forge",
          value: forgeValue,
          updateValue: updateForgeValue,
        },
      ],
    },
    {
      label: "係 Comp. Sociales",
      skills: [
        {
          id: "command",
          label: "Commandement",
          value: commandValue,
          updateValue: updateCommandValue,
        },
        {
          id: "courtesy",
          label: "Courtoisie",
          value: courtesyValue,
          updateValue: updateCourtesyValue,
        },
        {
          id: "games",
          label: "Jeux",
          value: gamesValue,
          updateValue: updateGamesValue,
        },
        {
          id: "representation",
          label: "Représentation",
          value: representationValue,
          updateValue: updateRepresentationValue,
        },
      ],
    },
  ];

  return (
    <div
      className={`
        flex
        w-fit
        gap-4
      `}
    >
      {skillFamilies.map((skillFamily) => {
        return (
          <Card key={skillFamily.label} className="w-sm">
            <CardContent>
              <h4
                className={`
                  mb-4
                  font-title
                  text-sm
                  text-[#9e8060]
                  uppercase
                `}
              >
                {skillFamily.label}
              </h4>
              <div
                className={`
                  flex
                  flex-col
                  gap-4
                `}
              >
                {skillFamily.skills.map((skill) => {
                  const skillValue = skill.value;
                  const upgradeCost = 2 * (skillValue + 1);
                  const hasEnoughExperience = experience >= upgradeCost;
                  const isMax = skillValue >= skillMaxValue;
                  const isUpgradeDisabled = isMax || !hasEnoughExperience;

                  function upgradeSkillValue(value: number) {
                    if (isUpgradeDisabled) {
                      return;
                    }

                    spendExperience(upgradeCost);
                    skill.updateValue(value);
                  }

                  function downgradeSkillValue(value: number) {
                    if (value < skillMinValue) {
                      return;
                    }

                    const downgradeCost = -2 * (value + 1);
                    spendExperience(downgradeCost);
                    skill.updateValue(value);
                  }

                  return (
                    <div
                      key={skill.id}
                      className={`
                        flex
                        items-center
                        justify-between
                        gap-4
                      `}
                    >
                      <p className="text-olive-600">{skill.label}</p>
                      <NumberInput
                        className="w-28"
                        inputClassName="w-10"
                        label={isMax ? undefined : `Coût : ${upgradeCost}`}
                        value={skillValue}
                        onChange={(value) => {
                          if (value > skillValue) {
                            upgradeSkillValue(value);
                          } else if (value < skillValue) {
                            downgradeSkillValue(value);
                          }
                        }}
                        max={skillMaxValue}
                        isMaxHidden={true}
                        min={skillMinValue}
                        isIncreaseDisabled={isUpgradeDisabled}
                        increaseButtonTooltip={getTooltipContent({
                          isMax,
                          hasEnoughExperience,
                        })}
                      />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function getTooltipContent({
  isMax,
  hasEnoughExperience,
}: {
  isMax: boolean;
  hasEnoughExperience: boolean;
}): string | undefined {
  if (isMax) {
    return "La compétence est déjà au maximum";
  }

  if (!hasEnoughExperience) {
    return "Vous n'avez pas assez d'expérience pour augmenter cette compétence";
  }

  return undefined;
}
