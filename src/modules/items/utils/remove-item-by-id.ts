export function removeItemById(itemIds: string[], itemToRemoveId: string) {
  const newItemIds = [...itemIds];
  const index = newItemIds.findIndex((itemId) => itemId === itemToRemoveId);
  if (index !== -1) {
    newItemIds.splice(index, 1);
  }

  return newItemIds;
}
