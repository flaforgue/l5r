import { renderToStaticMarkup } from "react-dom/server";
import { ITEMS, type Item } from "../modules/items/items";
import { Button } from "../shadcn/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn/ui/popover";
import { CenteredContainer } from "./centered-container";
import { useState } from "react";

interface ItemInputProps {
  itemIds: string[];
  equippedItemId: string | null;
  setEquippedItemId: (itemId: string | null) => void;
  defaultItem: Item;
}

export function ItemInput({
  itemIds,
  equippedItemId,
  setEquippedItemId,
  defaultItem,
}: ItemInputProps) {
  const items = ITEMS.filter((item) => itemIds.includes(item.id));
  const equippedItem = items.find((item) => item.id === equippedItemId) ?? defaultItem;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
        relative
        flex
        flex-col
        items-center
        gap-0.5
      `}
    >
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild data-tooltip-id="global" data-tooltip-html={renderToStaticMarkup(<ItemDescription item={equippedItem} />)}>
          <Button
            variant="outline"
            className={`
              size-9
              p-1.5!
            `}
          >
            {equippedItem.illustration}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-fit">
          <CenteredContainer
            className={`
              flex-wrap
              gap-2
            `}
          >
            {items.map((item) => (
              <Button
                variant={item.id === equippedItemId ? "default" : "outline"}
                key={item.id}
                className={`
                  size-10
                  p-2!
                `}
                onClick={() => {
                  if (item.id === equippedItemId) {
                    setEquippedItemId(null);
                  } else {
                    setEquippedItemId(item.id);
                  }

                  setIsOpen(false);
                }}
                data-tooltip-id="global"
                data-tooltip-html={renderToStaticMarkup(<ItemDescription item={item} />)}
              >
                {item.illustration}
              </Button>
            ))}
          </CenteredContainer>
        </PopoverContent>
      </Popover>
      <p
        className={`
          absolute
          -bottom-4
          text-center
          text-xs
          text-[#5a3e1b]
        `}
      >
        {equippedItem.shortDescription}
      </p>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function ItemDescription({ item }: { item: Item }) {
  return (
    <div className="text-sm">
      <p className="text-gray-50">
        {item.label}
      </p>
      <p
        className={`
          whitespace-pre-line
          text-gray-400
        `}
      >
        {item.description}
      </p>
    </div>
  );
}
