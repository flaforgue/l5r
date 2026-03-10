import NumberInput from "../../../components/number-input";
import { useCharacterStore } from "../stores/character.store";

export function VoidPoints() {
  const { voidPoints, updateVoidPoints, voidValue } = useCharacterStore();

  const maxVoidPoints = voidValue;

  return (
    <NumberInput
      label="の Points de Vide"
      value={voidPoints}
      onChange={updateVoidPoints}
      min={0}
      max={maxVoidPoints}
      className="w-34"
      labelClassName="text-olive-700"
    />
  );
}
