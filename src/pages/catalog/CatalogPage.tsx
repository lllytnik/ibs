import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateItem, selectItems } from '../../store/slice/itemsSlice';
import style from './CatalogPage.module.css';
import { ProductCard } from '../../components/productCard/ProductCard';

interface CatalogPageProps { }

export const CatalogPage: React.FC<CatalogPageProps> = () => {
    const items = useSelector(selectItems);
    const dispatch = useDispatch();
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
        <div className={style.productsList}>
            {filteredItems.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onLikeClick={handleLikeClick}
                />
            ))}
        </div>
    );
};
