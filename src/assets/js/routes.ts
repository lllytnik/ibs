export const ITEMS = '/item';
export const ITEM_CARD = `${ITEMS}/:id`;
export const createItemCardRoute = (id: string) => ITEM_CARD.replace(':id', id);
