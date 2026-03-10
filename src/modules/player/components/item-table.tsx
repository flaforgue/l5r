import { Button } from "../../../shadcn/ui/button";
import { Table } from "../../../components/table";
import { TableHeader } from "../../../components/table-header";
import { TableCell } from "../../../components/table-cell";
import { getItemById, removeItemById } from "../../items/items";
import { CircleXIcon } from "lucide-react";

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
          {itemIds.map((itemId, index) => {
            const item = getItemById(itemId);
            if (item === undefined) {
              return null;
            }

            return (
              <tr key={`item-${itemId}-${index}`}>
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
                      updateItemIds(removeItemById(itemIds, itemId));
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
