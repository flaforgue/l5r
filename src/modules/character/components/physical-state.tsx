import { CenteredContainer } from "../../../components/centered-container";
import CheckboxInput from "../../../components/checkbox-input";
import { Label } from "../../../components/label";
import NumberInput from "../../../components/number-input";
import { SelectInput } from "../../../components/select-input";
import { useAlterations } from "../../alterations/use-alterations";
import { useCharacterStore } from "../stores/character.store";
import { ArmorInput } from "./armor-input";
import { StanceInput } from "./stance-input";
import { WeaponInput } from "./weapon-input";

export function getEndurance(fireValue: number, earthValue: number): number {
  return (fireValue + earthValue) * 2;
}

export function PhysicalState() {
  const {
    fireValue,
    earthValue,
    exhaustion,
    updateExhaustion,
    alterationId,
    updateAlteration,
    criticalHits,
    updateCriticalHits,
  } = useCharacterStore();
  const alterations = useAlterations();
  const endurance = getEndurance(fireValue, earthValue);

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
          backgroundColor: getScaledColor(exhaustion, endurance),
        }}
        className="w-28"
        inputClassName="w-10 text-white"
        helperText="Si la Fatigue atteint son maximum, le personnage tombe inconscient"
      />
      <div>
        <Label className="mb-1.5">命 Coups Critiques</Label>
        <CenteredContainer className="gap-2.5">
          <CheckboxInput
            isChecked={criticalHits > 0}
            onChange={(isChecked) => {
              onCriticalHitToggled(isChecked, 1);
            }}
            tooltip="Douleur atroce : ajoute 3 points de Conflit (automatique)"
            className={`
              relative
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
              relative
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
              relative
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
              relative
              text-red-600

              checked:border-red-700
            `}
          />
        </CenteredContainer>
      </div>
      <SelectInput
        onChange={(alterationId) => {
          const alteration = alterations.find((alteration) => alteration.id === alterationId);
          if (alteration !== undefined) {
            updateAlteration(alteration);
          }
        }}
        value={alterationId}
        label="州 État"
        className={`
          relative
          w-36
        `}
        helperText={(
          <div
            className={`
              flex
              flex-col
              gap-1
            `}
          >
            {alterations
              .filter((alteration) => alteration.description !== "")
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((alteration) => {
                return (
                  <p
                    key={alteration.id}
                    className={`
                      whitespace-pre-line
                      text-gray-400
                    `}
                  >
                    <span className="text-white">
                      {alteration.label}
&nbsp;:&nbsp;
                    </span>
                    {alteration.description}
                  </p>
                );
              })}
          </div>
        )}
        options={alterations.map((alteration) => {
          return {
            value: alteration.id,
            displayContent: (
              <div
                className={`
                  flex
                  items-end
                  gap-1.5
                `}
              >
                <p>{alteration.label}</p>
              </div>
            ),
          };
        })}
      />
      <div
        className={`
          flex
          flex-col
        `}
      >
        <Label className="mb-0.5">姿 Posture</Label>
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
    </div>
  );
}

export function getScaledColor(value: number, max: number): string {
  const from = { l: 0.6, c: 0.06, h: 146 };
  const to = { l: 0.58, c: 0.24, h: 27.3 };

  const ratio = max > 0 ? Math.min(value / max, 1) : 0;
  const lerp = (a: number, b: number) => a + ratio * (b - a);

  return `oklch(${lerp(from.l, to.l).toFixed(3)} ${lerp(from.c, to.c).toFixed(3)} ${lerp(from.h, to.h).toFixed(3)})`;
}
