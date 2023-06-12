import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getItems, Item } from '../../assets/js/api';
import { RootState } from '../store';

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const response = await getItems();
    return response.data.content;
});

interface ItemsState {
    items: Item[];
}

const initialState: ItemsState = {
    items: [],
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        updateItem: (state, action: PayloadAction<{ itemId: string; like: boolean }>) => {
            const { itemId, like } = action.payload;
            const itemToUpdate = state.items.find((item) => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.like = like;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});

export const { updateItem } = itemsSlice.actions;
export default itemsSlice.reducer;

export const selectItems = (state: RootState) => state.items.items;
