import InputAutocomplete, { type AutocompleteOption } from "../../../components/input-autocomplete";
import { ARMORS, ITEMS, WEAPONS } from "../../items/items";
import { useCharacterStore } from "../stores/character.store";

export function AddItemInput() {
  const { itemIds, updateItemIds, weaponIds, updateWeaponIds, armorIds, updateArmorIds } = useCharacterStore();

  const options: AutocompleteOption[] = ITEMS.map((item) => ({
    value: item.id,
    label: item.label,
    icon: (
      <div className="size-5">
        {item.illustration}
      </div>
    ),
  }));

  function addItem(newItemId: string | null) {
    if (newItemId === null) {
      return;
    }

    const isWeapon = WEAPONS.some((weapon) => weapon.id === newItemId);
    if (isWeapon) {
      updateWeaponIds([...weaponIds, newItemId]);

      return;
    }

    const isArmor = ARMORS.some((armor) => armor.id === newItemId);
    if (isArmor) {
      updateArmorIds([...armorIds, newItemId]);

      return;
    }

    const isItem = ITEMS.some((item) => item.id === newItemId);
    if (isItem) {
      updateItemIds([...itemIds, newItemId]);

      return;
    }
  }

  return (
    <InputAutocomplete
      options={options}
      placeholder="Rechercher un objet..."
      label="Ajouter un objet"
      onChange={(newItemId) => {
        addItem(newItemId);
      }}
      inputClassName="w-full"
    />
  );
}
