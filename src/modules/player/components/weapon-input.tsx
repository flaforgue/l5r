import { ItemInput } from "./item-input";
import { useCharacterStore } from "../stores/character.store";

export function WeaponInput() {
  const { weaponIds, equippedWeaponId, updateEquippedWeaponId } = useCharacterStore();

  return (
    <div>
      <ItemInput
        itemIds={weaponIds}
        equippedItemId={equippedWeaponId}
        setEquippedItemId={updateEquippedWeaponId}
      />
    </div>
  );
}
