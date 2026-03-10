import NumberInput from "../../../components/number-input";
import { useCharacterStore } from "../stores/character.store";

export function InventoryZeni() {
  const { zeni, updateZeni } = useCharacterStore();

  return (
    <NumberInput
      label="銭 Zeni"
      value={zeni}
      onChange={updateZeni}
      min={0}
    />
  );
}
