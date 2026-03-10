import InputAutocomplete, { type AutocompleteOption } from "../../../components/input-autocomplete";
import { ITEMS } from "../../items/items";
import { useCharacterStore } from "../stores/character.store";

export function ItemInputAutocomplete() {
  const { itemIds, updateItemIds } = useCharacterStore();

  const options: AutocompleteOption[] = ITEMS.map((item) => ({
    value: item.id,
    label: item.label,
    icon: (
      <div className="size-5">
        {item.illustration}
      </div>
    ),
  }));

  return (
    <InputAutocomplete
      options={options}
      placeholder="Rechercher un objet..."
      label="Ajouter un objet"
      onChange={(newItemId) => {
        if (newItemId === null) {
          return;
        }

        updateItemIds([...itemIds, newItemId]);
      }}
      inputClassName="w-64"
    />
  );
}
