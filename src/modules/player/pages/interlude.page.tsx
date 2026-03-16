import { HelperText } from "../../../components/helper-text";
import NumberInput from "../../../components/number-input";
import { ProgressBar } from "../../../components/progress-bar";
import { Card, CardContent } from "../../../shadcn/ui/card";
import { CharacterRank } from "../components/character-rank";
import { UpgradeRings } from "../components/upgrade-rings";
import { UpgradeSkills } from "../components/upgrade-skills";
import { RANK_XP_THRESHOLDS, useCharacterRank } from "../hooks/use-character-rank";
import { useCharacterStore } from "../stores/character.store";

export function InterludePage() {
  const { experience, updateExperience, spentExperience } = useCharacterStore();
  const { characterRank } = useCharacterRank();
  const currentRankThreshold = RANK_XP_THRESHOLDS[characterRank - 1] ?? 0;
  const nextRankThreshold = RANK_XP_THRESHOLDS[characterRank] ?? 0;

  return (
    <div
      className={`
        flex
        flex-col
        gap-4
      `}
    >
      <h2>壊 Interlude</h2>
      <div
        className={`
          flex
          gap-8
        `}
      >
        <div>
          <CharacterRank />
        </div>
        {characterRank < 6 && (
          <ProgressBar
            label="XP avant rang sup."
            max={nextRankThreshold - currentRankThreshold}
            value={spentExperience - currentRankThreshold}
            className="w-48"
          />
        )}
        <NumberInput
          label="Expérience"
          value={experience}
          onChange={updateExperience}
          min={0}
        />
      </div>
      <div
        className={`
          flex
          gap-4
        `}
      >
        <div className="w-70">
          <h3
            className={`
              mb-4
              flex
              items-center
              gap-1
              text-olive-700
              uppercase
            `}
          >
            <HelperText
              helperText={(
                <div>
                  <p>Rang 1 : faible et peu efficace dans ce domaine</p>
                  <p>Rang 2 : compétences normales ou ordinnaires</p>
                  <p>Rang 3 : capacités au dessus de la moyenne</p>
                  <p>Rang 4 : niveau exceptionnel fruit d&apos;un talent certain et de beaucoup de travail</p>
                  <p>Rang 5 : maîtrise parfaite incarnée dans chaque geste</p>
                </div>
              )}
            />
            Améliorer un Anneau
          </h3>
          <Card>
            <CardContent>
              <UpgradeRings />
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <h3
            className={`
              mb-4
              flex
              items-center
              gap-1
              text-olive-700
              uppercase
            `}
          >
            <HelperText
              helperText={(
                <div>
                  <p>Rang 0 : aucune compétence, compréhension superficielle basée sur une expérience limitée</p>
                  <p>Rang 1 : débutant, le personnage a assimilé les bases grâce à une éducation formelle</p>
                  <p>Rang 2 : initié, le personnage commence à s&apos;immerger dans les subtilités de son art</p>
                  <p>Rang 3 : professionnel, le personnage a acquis une expertise solide et une expérience pratique</p>
                  <p>
                    Rang 4 : expert, sa propre expérience a permis de faire progresser les pratiques dans ce domaine
                  </p>
                  <p>
                    Rang 5 : maître, s&apos;est élevé au dessus de tous ses pairs ou presque et
                    continue de rechercher de nouvelles connaissances pour atteindre l&apos;illumination.
                  </p>
                </div>
              )}
            />
            Améliorer une Compétence (Rang max : 5)
          </h3>
          <Card>
            <UpgradeSkills />
          </Card>
        </div>
      </div>
    </div>
  );
}
