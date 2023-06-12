import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import itemsReducer from './slice/itemsSlice';

const store = configureStore({
    reducer: {
        items: itemsReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

