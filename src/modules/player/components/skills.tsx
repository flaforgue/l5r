import { Card, CardContent } from "../../../shadcn/ui/card";
import { Advantage } from "./advantage";
import { SkillsFamily } from "./skills-family";
import { VoidPoints } from "./void-points";
import { useCharacterStore } from "../stores/character.store";

export function Skills() {
  const {
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
  } = useCharacterStore();

  return (
    <div
      className={`
        grid
        grid-cols-2
        gap-6
      `}
    >
      <SkillsFamily
        className="flex-1"
        label="Comp. Artisanales"
        skills={[
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
        ]}
        approaches={{
          air: "Raffiner",
          earth: "Restaurer",
          fire: "Inventer",
          water: "Adapter",
          void: "S'harmoniser",
        }}
      />

      <SkillsFamily
        className="flex-1"
        label="Comp. Sociales"
        skills={[
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
        ]}
        approaches={{
          air: "Duper",
          earth: "Raisonner",
          fire: "Inciter",
          water: "Charmer",
          void: "Illuminer",
        }}
      />

      <SkillsFamily
        className="flex-1"
        label="Comp. Savantes"
        skills={[
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
        ]}
        approaches={{
          air: "Analyse",
          earth: "Se remémorer",
          fire: "Théoriser",
          water: "Observer",
          void: "Ressentir",
        }}
      />

      <SkillsFamily
        className="flex-1"
        label="Comp. Pro."
        skills={[
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
        ]}
        approaches={{
          air: "Escroquer",
          earth: "Produire",
          fire: "Innover",
          water: "Échanger",
          void: "Subsister",
        }}
      />

      <SkillsFamily
        className="flex-1"
        label="Comp. Martiales"
        skills={[
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
        ]}
        approaches={{
          air: "Feinter",
          earth: "Résister",
          fire: "Submerger",
          water: "Détourner",
          void: "Lâcher prise",
        }}
      />

      <Card
        className={`
          bg-olive-700/30
          bg-none!
          p-2
        `}
      >
        <CardContent
          className={`
            flex
            flex-col
            gap-4
          `}
        >
          <Advantage />
          <VoidPoints />
        </CardContent>
      </Card>
    </div>
  );
}
