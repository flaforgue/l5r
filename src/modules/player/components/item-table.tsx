import { Button } from "../../../shadcn/ui/button";
import { Table } from "../../../components/table";
import { TableHeader } from "../../../components/table-header";
import { TableCell } from "../../../components/table-cell";
import { CircleXIcon } from "lucide-react";
import { getItemById } from "../../items/utils/get-item-by-id";
import { removeItemById } from "../../items/utils/remove-item-by-id";

interface ItemTableProps {
  title: string;
  itemIds: string[];
  updateItemIds: (itemIds: string[]) => void;
  className?: string;
}

export function ItemTable({
  title,
  itemIds,
  updateItemIds,
  className = "",
}: ItemTableProps) {
  const items = itemIds
    .map((itemId) => getItemById(itemId))
    .filter((item) => item !== undefined)
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div className={className}>
      <h2>
        {title}
      </h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>Nom</TableHeader>
            <TableHeader>Détails</TableHeader>
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
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
                      text-rose-500

                      hover:text-rose-600
                    `}
                    onClick={() => {
                      updateItemIds(removeItemById(itemIds, item.id));
                    }}
                  >
                    <CircleXIcon className="size-4" />
                  </Button>
                </TableCell>
              </tr>
            );
          })}
          {itemIds.length === 0 && (
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
