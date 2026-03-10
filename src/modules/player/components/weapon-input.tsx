import { ItemInput } from "./item-input";
import type { Item } from "../../items/items";
import { useCharacterStore } from "../stores/character.store";

const defaultWeapon: Item = {
  id: "default",
  label: "",
  description: "Cliquez pour équiper une arme",
  shortDescription: "Arme",
  illustration: "",
};

export function WeaponInput() {
  const { weaponIds, equippedWeaponId, updateEquippedWeaponId } = useCharacterStore();

  return (
    <div>
      <ItemInput
        itemIds={weaponIds}
        equippedItemId={equippedWeaponId}
        setEquippedItemId={updateEquippedWeaponId}
        defaultItem={defaultWeapon}
      />
    </div>
  );
}
