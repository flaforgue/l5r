import { ItemInput } from "./item-input";
import { useCharacterStore } from "../stores/character.store";

export function ArmorInput() {
  const { armorIds, equippedArmorId, updateEquippedArmorId } = useCharacterStore();

  return (
    <div>
      <ItemInput
        itemIds={armorIds}
        equippedItemId={equippedArmorId}
        setEquippedItemId={updateEquippedArmorId}
      />
    </div>
  );
}
