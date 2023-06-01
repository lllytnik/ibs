import React, { createContext, useContext } from 'react';

export interface Picture {
    path: string;
    alt: string;
}

export interface Price {
    value: number;
    currency: string;
}

export interface Item {
    id: string;
    name: string;
    info: string;
    details: string;
    description: string;
    like: boolean;
    picture: Picture;
    price: Price;
}

interface ItemContextType {
    items: Item[];
    updateItem: (itemId: string, like: boolean) => void;
}

export const ItemContext = createContext<ItemContextType>({ items: [], updateItem: () => { } });

export function useItemContext() {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error('Error ItemContextType ');
    }
    return context;
}
