import { useState } from "react";
import { Card, CardContent } from "../../../shadcn/ui/card";
import { TECHNIQUES, type Technique } from "../../techniques/techniques";
import { useCharacterRank } from "../hooks/use-character-rank";
import { useCharacterStore } from "../stores/character.store";
import TextInput from "../../../components/text-input";
import { Button } from "../../../shadcn/ui/button";
import { TechniquesType } from "./techniques-type";

export function UnlockTechniques() {
  const { familyId, techniqueIds, updateTechniqueIds, experience, spendExperience } = useCharacterStore();
  const { characterRank } = useCharacterRank();

  const availableTechniques = TECHNIQUES.filter((technique) => {
    return technique.availableFor.some((family) => {
      return family.familyId === familyId && family.ranks.includes(characterRank);
    });
  });
  const [search, setSearch] = useState("");
  const filteredTechniques = availableTechniques.filter((technique) => {
    if (techniqueIds.includes(technique.id)) {
      return false;
    }

    if (search === "") {
      return true;
    }

    return technique.label.toLowerCase().includes(search.toLowerCase());
  });

  function unlockTechnique(technique: Technique) {
    if (experience < technique.xpCost || techniqueIds.includes(technique.id)) {
      return;
    }

    spendExperience(technique.xpCost);
    updateTechniqueIds([...techniqueIds, technique.id]);
  }

  return (
    <div
      className={`
        flex
        flex-col
        gap-4
      `}
    >
      <TextInput
        value={search}
        onChange={setSearch}
        placeholder="Rechercher une technique"
        className="w-82"
      />
      <div
        className={`
          grid
          grid-cols-3
          gap-4
        `}
      >
        {filteredTechniques.map((technique) => {
          return (
            <Card key={technique.id}>
              <CardContent
                className={`
                  flex
                  flex-col
                  justify-between
                  gap-4
                `}
              >
                <div
                  className={`
                    flex
                    flex-col
                    gap-2
                  `}
                >
                  <h2
                    className={`
                      flex
                      items-center
                      gap-2
                      text-base!
                    `}
                  >
                    <TechniquesType technique={technique} />
                    {technique.label}
                  </h2>
                  <div
                    className={`
                      flex
                      flex-col
                      gap-4
                    `}
                  >
                    <p
                      className="text-olive-500"
                    >
                      {technique.description}
                    </p>
                    <p>
                      Activation
                      <br />
                      <span className="text-olive-500">{technique.activation}</span>
                    </p>
                    {technique.diceTest !== null && (
                      <p>
                        Test
                        <br />
                        <span className="text-olive-500">{technique.diceTest}</span>
                      </p>
                    )}
                    <p>
                      Effets
                      <br />
                      <span
                        className={`
                          whitespace-pre-line
                          text-olive-500
                        `}
                      >
                        {technique.effects}
                      </span>
                    </p>
                  </div>
                </div>
                <Button
                  disabled={experience < technique.xpCost}
                  variant="outline"
                  onClick={() => {
                    unlockTechnique(technique);
                  }}
                >
                  Débloquer&nbsp;(
                  {technique.xpCost}
                  {" "}
                  XP)
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
