import { CheckCircleIcon } from "lucide-react";
import { Button } from "../../../shadcn/ui/button";
import { Card, CardContent } from "../../../shadcn/ui/card";
import { TECHNIQUES, type Technique } from "../../techniques/techniques";
import { useCharacterRank } from "../hooks/use-character-rank";
import { useCharacterStore } from "../stores/character.store";
import { TechniquesType } from "./techniques-type";

export function LearnTechniques() {
  const { familyId, techniqueIds, updateTechniqueIds, experience, spendExperience } = useCharacterStore();
  const { characterRank } = useCharacterRank();

  const availableTechniques = TECHNIQUES.filter((technique) => {
    return technique.availableFor.some((family) => {
      return family.familyId === familyId && family.ranks.includes(characterRank);
    });
  });

  function learnTechnique(technique: Technique) {
    if (experience < technique.xpCost || techniqueIds.includes(technique.id)) {
      return;
    }

    spendExperience(technique.xpCost);
    updateTechniqueIds([...techniqueIds, technique.id]);
  }

  function forgetTechnique(technique: Technique) {
    if (!techniqueIds.includes(technique.id)) {
      return;
    }

    const forgetCost = -1 * technique.xpCost;
    spendExperience(forgetCost);
    updateTechniqueIds(techniqueIds.filter((id) => id !== technique.id));
  }

  return (

    <div
      className={`
        flex
        w-fit
        gap-4
      `}
    >
      {availableTechniques.length === 0 && (
        <p>Aucune technique à débloquer pour le moment.</p>
      )}
      {availableTechniques.map((technique) => {
        const isLearnt = techniqueIds.includes(technique.id);

        return (
          <Card
            key={technique.id}
            className={`
              w-md
              border-2
              bg-transparent
              transition-colors

              ${isLearnt
            ? `
              border-green-600
              bg-green-300
            `
            : "border-olive-400"}
            `}
          >
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
                <div
                  className={`
                    mb-2
                    flex
                    items-center
                    justify-between
                    gap-4
                  `}
                >
                  <h2
                    className={`
                      relative
                      mb-0!
                      flex
                      items-center
                      gap-2
                      text-base!
                    `}
                  >
                    <TechniquesType technique={technique} />
                    {technique.label}
                    {isLearnt && (
                      <div
                        className={`
                          absolute
                          top-4
                          left-4
                        `}
                      >
                        <CheckCircleIcon
                          className={`
                            size-5
                            rounded-full
                            bg-white
                            text-green-500
                          `}
                        />
                      </div>
                    )}
                  </h2>
                  {!isLearnt && (
                    <Button
                      disabled={experience < technique.xpCost}
                      variant="outline"
                      onClick={() => {
                        learnTechnique(technique);
                      }}
                      data-tooltip-id="global"
                      data-tooltip-content={`${technique.xpCost} XP`}
                    >
                      Débloquer
                    </Button>
                  )}
                  {isLearnt && (
                    <Button
                      variant="ghost"
                      onClick={() => {
                        forgetTechnique(technique);
                      }}
                    >
                      Oublier
                    </Button>
                  )}
                </div>
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
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
