import { ITEMS, type Item } from "../../items/items";
import { PopoverPickerInput } from "../../../components/popover-picker-input";

interface ItemInputProps {
  itemIds: string[];
  equippedItemId: string | null;
  setEquippedItemId: (itemId: string | null) => void;
}

export function ItemInput({
  itemIds,
  equippedItemId,
  setEquippedItemId,
}: ItemInputProps) {
  const options = ITEMS
    .filter((item) => itemIds.includes(item.id))
    .map((item) => ({
      value: item.id,
      label: item.label,
      description: <ItemDescription item={item} />,
      shortDescription: item.shortDescription,
      illustration: item.illustration,
    }));

  function onChange(value: string | null) {
    if (value === equippedItemId) {
      setEquippedItemId(null);
    } else {
      setEquippedItemId(value);
    }
  }

  return (
    <PopoverPickerInput
      value={equippedItemId}
      onChange={onChange}
      options={[
        ...options,
      ]}
    />
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
