import NumberInput from "../../../components/number-input";
import TextareaInput from "../../../components/textarea-input";
import { useCharacterStore } from "../stores/character.store";

export function PsycologicalState() {
  const {
    waterValue,
    earthValue,
    conflict,
    updateConflict,
    loseControlAttitude,
    updateLoseControlAttitude,
  } = useCharacterStore();
  const selfControl = (waterValue + earthValue) * 2;

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
          color: getScaledColor(conflict, selfControl),
        }}
        className="w-28"
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

function getScaledColor(value: number, max: number): string {
  const from = { l: 0.723, c: 0.219, h: 149.579 };
  const to = { l: 0.705, c: 0.213, h: 47.604 };

  const ratio = max > 0 ? Math.min(value / max, 1) : 0;

  const lerp = (a: number, b: number) => a + ratio * (b - a);

  const l = lerp(from.l, to.l);
  const c = lerp(from.c, to.c);
  const h = lerp(from.h, to.h);

  return `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(3)})`;
}
