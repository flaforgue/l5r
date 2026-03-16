import { Button } from "../../../shadcn/ui/button";
import { Table } from "../../../components/table";
import { TableHeader } from "../../../components/table-header";
import { TableCell } from "../../../components/table-cell";
import { XIcon } from "lucide-react";
import { getItemById } from "../../items/utils/get-item-by-id";
import { removeItemById } from "../../items/utils/remove-item-by-id";
import { ARMORS, ITEMS, WEAPONS } from "../../items/items";

interface ItemTableProps {
  itemIds: string[];
  updateItemIds: (itemIds: string[]) => void;
  weaponIds: string[];
  updateWeaponIds: (weaponIds: string[]) => void;
  armorIds: string[];
  updateArmorIds: (armorIds: string[]) => void;
  className?: string;
}

export function ItemTable({
  itemIds,
  updateItemIds,
  weaponIds,
  updateWeaponIds,
  armorIds,
  updateArmorIds,
  className = "",
}: ItemTableProps) {
  const items = itemIds
    .map((itemId) => getItemById(itemId))
    .filter((item) => item !== undefined)
    .sort((a, b) => a.label.localeCompare(b.label));

  const weapons = weaponIds
    .map((weaponId) => getItemById(weaponId))
    .filter((weapon) => weapon !== undefined)
    .sort((a, b) => a.label.localeCompare(b.label));

  const armors = armorIds
    .map((armorId) => getItemById(armorId))
    .filter((armor) => armor !== undefined)
    .sort((a, b) => a.label.localeCompare(b.label));

  const allItems = [...weapons, ...armors, ...items];

  function removeItem(itemToRemoveId: string) {
    const isWeapon = WEAPONS.some((weapon) => weapon.id === itemToRemoveId);
    if (isWeapon) {
      updateWeaponIds(removeItemById(weaponIds, itemToRemoveId));

      return;
    }

    const isArmor = ARMORS.some((armor) => armor.id === itemToRemoveId);
    if (isArmor) {
      updateArmorIds(removeItemById(armorIds, itemToRemoveId));

      return;
    }

    const isItem = ITEMS.some((item) => item.id === itemToRemoveId);
    if (isItem) {
      updateItemIds(removeItemById(itemIds, itemToRemoveId));

      return;
    }
  }

  return (
    <div className={className}>
      <Table>
        <thead>
          <tr>
            <TableHeader>Nom</TableHeader>
            <TableHeader>Détails</TableHeader>
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          {allItems.map((item, index) => {
            return (
              <tr key={`item-${item.id}-${index}`}>
                <TableCell>
                  <div
                    className={`
                      flex
                      items-center
                      gap-1
                    `}
                  >
                    <div className="size-5">
                      {item.illustration}
                    </div>
                    <p>{item.label}</p>
                  </div>
                </TableCell>
                <TableCell>
                  {item.description}
                </TableCell>
                <TableCell>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    data-tooltip-id="global"
                    data-tooltip-content="Retirer de l'inventaire"
                    className={`
                      h-fit
                      w-fit
                      rounded-full
                      border
                      border-rose-400!
                      p-0.75
                      text-rose-400

                      hover:bg-rose-400
                      hover:text-white
                    `}
                    onClick={() => {
                      removeItem(item.id);
                    }}
                  >
                    <XIcon className="size-3.5" />
                  </Button>
                </TableCell>
              </tr>
            );
          })}
          {allItems.length === 0 && (
            <tr>
              <TableCell
                colSpan={3}
                className={`
                  text-muted-foreground
                  italic
                `}
              >
                Vide pour l&apos;instant
              </TableCell>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
