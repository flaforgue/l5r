import { Card, CardContent } from "../../../shadcn/ui/card";
import { AddItemInput } from "../components/add-item-input";
import { InventoryZeni } from "../components/inventory-zeni";
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
        flex
        gap-4
      `}
    >
      <div
        className={`
          flex
          w-1/3
          flex-col
          gap-4
        `}
      >
        <div>
          <Card>
            <CardContent
              className={`
                flex
                items-center
                justify-between
                gap-8
              `}
            >
              <InventoryZeni />
              <div className="flex-1">
                <AddItemInput />
              </div>
            </CardContent>
          </Card>
        </div>
        <SpecialItems />
      </div>
      <div
        className={`
          flex
          flex-1
          flex-col
          gap-4
        `}
      >
        <ItemTable
          itemIds={itemIds}
          weaponIds={weaponIds}
          armorIds={armorIds}
          updateItemIds={updateItemIds}
          updateWeaponIds={updateWeaponIds}
          updateArmorIds={updateArmorIds}
        />
      </div>
    </div>
  );
}
