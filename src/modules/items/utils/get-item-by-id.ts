import { ITEMS, type Item } from "../items";

export function getItemById(id: string): Item | undefined {
  return ITEMS.find((item) => item.id === id);
}
