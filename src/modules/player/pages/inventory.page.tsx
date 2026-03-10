import { Card, CardContent } from "../../../shadcn/ui/card";
import { InventoryZeni } from "../components/inventory-zeni";
import { ItemInputAutocomplete } from "../components/item-input-autocomplete";
import { ItemTable } from "../components/item-table";
import { SpecialItems } from "../components/special-items";
import { useCharacterStore } from "../stores/character.store";

export function InventoryPage() {
  const {
    weaponIds,
    updateWeaponIds,
    armorIds,
    updateArmorIds,
    itemIds,
    updateItemIds,
  } = useCharacterStore();

  return (
    <div
      className={`
        grid
        grid-cols-2
        gap-4
      `}
    >
      <div
        className={`
          flex
          flex-col
          gap-4
        `}
      >
        <div>
          <h2>
            庫 Inventaire
          </h2>
          <Card>
            <CardContent
              className={`
                flex
                items-center
                justify-between
              `}
            >
              <InventoryZeni />
              <ItemInputAutocomplete />
            </CardContent>
          </Card>
        </div>
        <SpecialItems />
      </div>
      <div
        className={`
          flex
          flex-col
          gap-4
        `}
      >
        <ItemTable
          title="兵 Armes"
          itemIds={weaponIds}
          updateItemIds={updateWeaponIds}
        />
        <ItemTable
          title="鎧 Armures"
          itemIds={armorIds}
          updateItemIds={updateArmorIds}
        />
        <ItemTable
          title="物 Objets"
          itemIds={itemIds}
          updateItemIds={updateItemIds}
        />
      </div>
    </div>
  );
}
