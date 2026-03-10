import { CenteredContainer } from "../../../components/centered-container";
import CheckboxInput from "../../../components/checkbox-input";
import { Label } from "../../../components/label";
import NumberInput from "../../../components/number-input";
import TextInput from "../../../components/text-input";
import { useCharacterStore } from "../stores/character.store";
import { ArmorInput } from "./armor-input";
import { StanceInput } from "./stance-input";
import { WeaponInput } from "./weapon-input";

export function PhysicalState() {
  const {
    fireValue,
    earthValue,
    exhaustion,
    updateExhaustion,
    physicalAlteration,
    updatePhysicalAlteration,
    criticalHits,
    updateCriticalHits,
  } = useCharacterStore();
  const endurance = (fireValue + earthValue) * 2;

  function onCriticalHitToggled(isChecked: boolean, value: number) {
    if (criticalHits === value) {
      updateCriticalHits(criticalHits + (isChecked ? 1 : -1));
    } else {
      updateCriticalHits(value);
    }
  }

  return (
    <div
      className={`
        flex
        gap-8
      `}
    >
      <NumberInput
        min={0}
        max={endurance}
        value={exhaustion}
        onChange={updateExhaustion}
        label="倦 Fatigue"
        inputStyle={{
          color: getScaledColor(exhaustion, endurance),
        }}
        className="w-28"
        helperText="Si la Fatigue atteint son maximum, le personnage tombe inconscient"
      />
      <div>
        <Label htmlFor="critical-hits" className="mb-2">命 Coups Critiques</Label>
        <CenteredContainer className="gap-2.5">
          <CheckboxInput
            isChecked={criticalHits > 0}
            onChange={(isChecked) => {
              onCriticalHitToggled(isChecked, 1);
            }}
            tooltip="Douleur atroce : ajoute 3 points de Conflit"
            className={`
              text-yellow-600

              checked:border-yellow-700
            `}

          />
          <CheckboxInput
            isChecked={criticalHits > 1}
            onChange={(isChecked) => {
              onCriticalHitToggled(isChecked, 2);
            }}
            tooltip="Blessure légère : ND+1 au prochain test"
            className={`
              text-amber-600

              checked:border-amber-700
            `}
          />
          <CheckboxInput
            isChecked={criticalHits > 2}
            onChange={(isChecked) => {
              onCriticalHitToggled(isChecked, 3);
            }}
            tooltip="Blessure incapacitante : ND+1 jusqu’à ce que la blessure soit soignée"
            className={`
              text-orange-600

              checked:border-orange-700
            `}
          />
          <CheckboxInput
            isChecked={criticalHits > 3}
            onChange={(isChecked) => {
              onCriticalHitToggled(isChecked, 4);
            }}
            tooltip="Blessure grave : hors de combat jusqu’à ce que la blessure soit soignée"
            className={`
              text-red-600

              checked:border-red-700
            `}
          />
        </CenteredContainer>
      </div>
      <TextInput
        onChange={updatePhysicalAlteration}
        value={physicalAlteration}
        label="州 État"
      />
      <div
        className={`
          flex
          gap-2
        `}
      >
        <StanceInput />
        <ArmorInput />
        <WeaponInput />
      </div>
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
