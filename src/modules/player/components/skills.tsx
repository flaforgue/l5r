import { useLocalStorageState } from "../../../hooks/useLocalStorageState";
import { Card, CardContent } from "../../../shadcn/ui/card";
import { Advantage } from "./advantage";
import { SkillsFamily } from "./skills-family";
import { VoidPoints } from "./void-points";

export function Skills() {
  const [aestheticValue, setAestheticValue] = useLocalStorageState("aestheticValue", 0);
  const [compositionValue, setCompositionValue] = useLocalStorageState("compositionValue", 0);
  const [stylismValue, setStylismValue] = useLocalStorageState("stylismValue", 0);
  const [forgeValue, setForgeValue] = useLocalStorageState("forgeValue", 0);

  const [physicalConditionValue, setPhysicalConditionValue] = useLocalStorageState("physicalConditionValue", 0);
  const [armedFightingValue, setArmedFightingValue] = useLocalStorageState("armedFightingValue", 0);
  const [distantFightingValue, setDistantFightingValue] = useLocalStorageState("distantFightingValue", 0);
  const [unarmedFightingValue, setUnarmedFightingValue] = useLocalStorageState("unarmedFightingValue", 0);
  const [meditationValue, setMeditationValue] = useLocalStorageState("meditationValue", 0);
  const [tacticsValue, setTacticsValue] = useLocalStorageState("tacticsValue", 0);

  const [cultureValue, setCultureValue] = useLocalStorageState("cultureValue", 0);
  const [governmentValue, setGovernmentValue] = useLocalStorageState("governmentValue", 0);
  const [medicineValue, setMedicineValue] = useLocalStorageState("medicineValue", 0);
  const [emotionsValue, setEmotionsValue] = useLocalStorageState("emotionsValue", 0);
  const [theologyValue, setTheologyValue] = useLocalStorageState("theologyValue", 0);

  const [commandValue, setCommandValue] = useLocalStorageState("commandValue", 0);
  const [courtesyValue, setCourtesyValue] = useLocalStorageState("courtesyValue", 0);
  const [gamesValue, setGamesValue] = useLocalStorageState("gamesValue", 0);
  const [representationValue, setRepresentationValue] = useLocalStorageState("representationValue", 0);

  const [commerceValue, setCommerceValue] = useLocalStorageState("commerceValue", 0);
  const [manualWorkValue, setManualWorkValue] = useLocalStorageState("manualWorkValue", 0);
  const [navigationValue, setNavigationValue] = useLocalStorageState("navigationValue", 0);
  const [tricksValue, setTricksValue] = useLocalStorageState("tricksValue", 0);
  const [survivalValue, setSurvivalValue] = useLocalStorageState("survivalValue", 0);

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
            setValue: setAestheticValue,
          },
          {
            id: "composition",
            label: "Composition",
            value: compositionValue,
            setValue: setCompositionValue,
          },
          {
            id: "stylism",
            label: "Stylisme",
            value: stylismValue,
            setValue: setStylismValue,
          },
          {
            id: "forge",
            label: "Forge",
            value: forgeValue,
            setValue: setForgeValue,
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
            setValue: setCommandValue,
          },
          {
            id: "courtesy",
            label: "Courtoisie",
            value: courtesyValue,
            setValue: setCourtesyValue,
          },
          {
            id: "games",
            label: "Jeux",
            value: gamesValue,
            setValue: setGamesValue,
          },
          {
            id: "representation",
            label: "Représentation",
            value: representationValue,
            setValue: setRepresentationValue,
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
            setValue: setCultureValue,
          },
          {
            id: "government",
            label: "Gouvernement",
            value: governmentValue,
            setValue: setGovernmentValue,
          },
          {
            id: "medicine",
            label: "Médecine",
            value: medicineValue,
            setValue: setMedicineValue,
          },
          {
            id: "emotions",
            label: "Sentiments",
            value: emotionsValue,
            setValue: setEmotionsValue,
          },
          {
            id: "theology",
            label: "Théologie",
            value: theologyValue,
            setValue: setTheologyValue,
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
            setValue: setCommerceValue,
          },
          {
            id: "manualWork",
            label: "Travail Manuel",
            value: manualWorkValue,
            setValue: setManualWorkValue,
          },
          {
            id: "navigation",
            label: "Navigation",
            value: navigationValue,
            setValue: setNavigationValue,
          },
          {
            id: "tricks",
            label: "Magouilles",
            value: tricksValue,
            setValue: setTricksValue,
          },
          {
            id: "survival",
            label: "Survie",
            value: survivalValue,
            setValue: setSurvivalValue,
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
            setValue: setPhysicalConditionValue,
          },
          {
            id: "armedFighting",
            label: "Arts Martiaux ⚔️",
            value: armedFightingValue,
            setValue: setArmedFightingValue,
          },
          {
            id: "distantFighting",
            label: "Arts Martiaux 🏹",
            value: distantFightingValue,
            setValue: setDistantFightingValue,
          },
          {
            id: "unarmedFighting",
            label: "Arts Martiaux 👊",
            value: unarmedFightingValue,
            setValue: setUnarmedFightingValue,
          },
          {
            id: "meditation",
            label: "Méditation",
            value: meditationValue,
            setValue: setMeditationValue,
          },
          {
            id: "tactics",
            label: "Tactique",
            value: tacticsValue,
            setValue: setTacticsValue,
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
