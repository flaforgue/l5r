import NumberInput from "../../../components/number-input";
import TextareaInput from "../../../components/textarea-input";
import { useCharacterStore } from "../stores/character.store";

export function getSelfControl(waterValue: number, earthValue: number): number {
  return (waterValue + earthValue) * 2;
}

export function PsychologicalState() {
  const {
    waterValue,
    earthValue,
    conflict,
    updateConflict,
    loseControlAttitude,
    updateLoseControlAttitude,
  } = useCharacterStore();
  const selfControl = getSelfControl(waterValue, earthValue);

  return (
    <div
      className={`
        flex
        gap-8
      `}
    >
      <NumberInput
        min={0}
        max={selfControl}
        value={conflict}
        onChange={updateConflict}
        label="対 Conflit"
        inputStyle={{
          backgroundColor: getScaledColor(conflict, selfControl),
        }}
        className="w-28"
        inputClassName="w-10 text-white"
        helperText={(
          <div>
            <p>Si le Conflit atteint son maximum :</p>
            <ul>
              <li>La vigilance passe à 1</li>
              <li>Les dés présentant un Conflit ne peuvent plus être gardés</li>
              <li>On peut, une fois par scène, &quot;tomber le masque&quot;</li>
            </ul>
          </div>
        )}
      />
      <TextareaInput
        onChange={updateLoseControlAttitude}
        value={loseControlAttitude}
        label="爆 Tomber le masque"
        rows={2}
        className="flex-1"
        helperText={(
          <div>
            <p>Le personnage ne se contrôle plus et est incapable de masquer ses émotions</p>
            <p>Une fois l&apos;épisode terminé, le Conflit redescend à 0</p>
          </div>
        )}
      />
    </div>
  );
}

export function getScaledColor(value: number, max: number): string {
  const from = { l: 0.58, c: 0.04, h: 215 }; // bleu-gris désaturé
  const to = { l: 0.38, c: 0.19, h: 294 }; // ~violet-900

  const ratio = max > 0 ? Math.min(value / max, 1) : 0;
  const lerp = (a: number, b: number) => a + ratio * (b - a);

  return `oklch(${lerp(from.l, to.l).toFixed(3)} ${lerp(from.c, to.c).toFixed(3)} ${lerp(from.h, to.h).toFixed(3)})`;
}
