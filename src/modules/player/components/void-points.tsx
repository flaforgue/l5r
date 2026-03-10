import NumberInput from "../../../components/number-input";
import { useCharacterStore } from "../stores/character.store";

export function VoidPoints() {
  const { voidPoints, updateVoidPoints, voidValue } = useCharacterStore();

  const maxVoidPoints = voidValue;

  return (
    <NumberInput
      label="の P. de Vide"
      value={voidPoints}
      onChange={updateVoidPoints}
      min={0}
      max={maxVoidPoints}
      className="w-34"
      labelClassName="text-olive-700"
      helperText="Peut être dépensé pour lancer et garder 1 dé supplémentaire sur un jet (pas forcément le même dé)"
    />
  );
}
