import { CircleValue } from "../../../components/circle-value";
import { useCharacterStore } from "../stores/character.store";

export function Attention() {
  const { fireValue, airValue } = useCharacterStore();
  const attention = fireValue + airValue;

  return (
    <CircleValue
      value={attention}
      label="Attention"
      iconClassName="text-teal-800"
      textClassName="text-teal-900"
    />
  );
}
