import TextareaInput from "../../../components/textarea-input";
import { useCharacterStore } from "../stores/character.store";

export function Advantage() {
  const { advantage, updateAdvantage } = useCharacterStore();

  return (
    <TextareaInput
      label="資 Avantage"
      value={advantage}
      onChange={updateAdvantage}
      labelClassName="text-olive-700"
    />
  );
}
