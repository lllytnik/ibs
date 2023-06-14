import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../store/store';
import { updateItem, selectItems } from '../../store/slice/itemsSlice';
import style from './CatalogPage.module.css';
import { ProductCard } from '../../components/productCard/ProductCard';

interface CatalogPageProps { }

export const CatalogPage: React.FC<CatalogPageProps> = () => {
    const items = useAppSelector(selectItems);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const searchQuery = Object.fromEntries(query).search || '';

    const filteredItems = useMemo(() => {
        return items.filter((product) => {
            return product.name.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }, [items, searchQuery]);

    const handleLikeClick = (itemId: string, currentLike: boolean) => {
        const updatedLike = !currentLike;
        dispatch(updateItem({ itemId, like: updatedLike }));
    };

    return (
        <Grid container justifyContent="center" spacing={2}>
            {filteredItems.map((product) => (
                <Grid item xs={8} sm={4} md={2} key={product.id}>
                    <ProductCard
                        product={product}
                        onLikeClick={handleLikeClick}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
