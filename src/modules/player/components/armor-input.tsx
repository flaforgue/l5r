import { ItemInput } from "./item-input";
import type { Item } from "../../items/items";
import { useCharacterStore } from "../stores/character.store";

const defaultArmor: Item = {
  id: "default",
  label: "",
  description: "Cliquez pour équiper une armure",
  shortDescription: "Armure",
  illustration: "",
};

export function ArmorInput() {
  const { armorIds, equippedArmorId, updateEquippedArmorId } = useCharacterStore();

  return (
    <div>
      <ItemInput
        itemIds={armorIds}
        equippedItemId={equippedArmorId}
        setEquippedItemId={updateEquippedArmorId}
        defaultItem={defaultArmor}
      />
    </div>
  );
}
