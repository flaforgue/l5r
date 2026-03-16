import { HelperText } from "../../../components/helper-text";
import { KoImage } from "../../../components/images/ko-image";
import { TemperLostImage } from "../../../components/images/temper-lost-image";
import { useCharacterStore } from "../stores/character.store";
import { getEndurance, PhysicalState } from "./physical-state";
import { getSelfControl, PsychologicalState } from "./psychological-state";

export function Confrontation() {
  const { fireValue, earthValue, waterValue, exhaustion, criticalHits, conflict } = useCharacterStore();
  const endurance = getEndurance(fireValue, earthValue);
  const isDown = exhaustion >= endurance || criticalHits >= 4;

  const selfControl = getSelfControl(waterValue, earthValue);
  const isTemperLost = conflict >= selfControl;

  return (
    <div className="relative">
      {isDown && (
        <div
          className={`
            absolute
            -inset-6
            bg-red-600/10
            p-12
            text-red-800/30
          `}
        >
          <KoImage />
        </div>
      )}
      {!isDown && isTemperLost && (
        <div
          className={`
            absolute
            -inset-6
            bg-violet-900/20
            p-16
            text-violet-900/20
          `}
        >
          <TemperLostImage />
        </div>
      )}
      <h2
        className={`
          flex
          items-center
          gap-1
          text-olive-600!
        `}
      >
        <span>対 Confrontation</span>
        <HelperText
          className="relative"
          helperText={(
            <div className="text-gray-400">
              <p>
                <b className="text-white">Initiative</b>
                {" "}
                = Attention ou Vigilance + S. bonus à un jet de Tactique ND1
                <br />
                Permet de dégainer (ou autre action ne nécessitant pas de test) si réussi.
              </p>
              <br />
              <p>Résumé d&apos;un tour en combat :</p>
              <ol>
                <li>
                  1. Choisir sa&nbsp;
                  <b className="text-white">posture</b>
                </li>
                <li>
                  2.&nbsp;
                  <b className="text-white">Se déplacer</b>
                  {" "}
                  de 2 mètres
                </li>
                <li>3. Puis au choix</li>
                <ul
                  className={`
                    ml-8
                    list-outside
                    list-disc
                  `}
                >
                  <li>
                    <b className="text-white">Se déplacer</b>
                    {" "}
                    de 2 mètres à nouveau (test de Forme ND2 pour 2m supp. + 1m. / S. bonus)
                  </li>
                  <li>
                    <b>
                      <b className="text-white">Attaquer</b>
                      {" "}
                      (test Arts Martiaux ND2+)
                    </b>
                    {" "}
                    pour infliger les dégâts de l&apos;arme + S. bonus
                    {" "}
                    <br />
                    Optionnel : dépenser 2 aubaines pour infliger 1 Coup Critique
                  </li>
                  <li>
                    <b className="text-white">Défier</b>
                    {" "}
                    (test de Commandement ND1+) provoque un Duel (1 fois par adversaire)
                  </li>
                  <li>
                    <b className="text-white">Soigner</b>
                    {" "}
                    (test de Médecine ND2) retire 1 point de Fatigue + 1 par S. bonus
                  </li>
                  <li>
                    <b className="text-white">Reprendre son souffle</b>
                    {" "}
                    (test de Médecine ND2) retire 1 point de Fatigue + 1 par S. bonus
                  </li>
                  <li>
                    <b className="text-white">Autres</b>
                    &nbsp; équiper une arme, utiliser une technique, éteindre une source de lumière, ...
                  </li>
                </ul>
              </ol>
            </div>
          )}
        />
      </h2>
      <div
        className={`
          flex
          flex-col
          gap-8
        `}
      >
        <PhysicalState />
        <PsychologicalState />
      </div>
    </div>
  );
}
