import { CircleValue } from "../../../components/circle-value";
import { useCharacterStore } from "../stores/character.store";

export function Vigilance() {
  const { waterValue, airValue } = useCharacterStore();
  const vigilance = Math.ceil((waterValue + airValue) / 2);

  return (
    <CircleValue
      value={vigilance}
      label="Vigilance"
      iconClassName="text-yellow-600"
      textClassName="text-yellow-900"
      helperText="Capacité à réagir à l'imprévu"
    />
  );
}
