import React, { useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ItemContext } from '../../ItemContext';
import style from './CatalogPage.module.css';
import { ProductCard } from '../../components/productCard/ProductCard';


interface CatalogPageProps { }

export const CatalogPage: React.FC<CatalogPageProps> = () => {
    const { items, updateItem } = useContext(ItemContext);
    const location = useLocation();
    console.log(location)
    const query = new URLSearchParams(location.search);
    const searchQuery = Object.fromEntries(query).search || '';

    const filteredItems = useMemo(() => {
        return items.filter((product) => {
            return product.name.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }, [items, searchQuery]);

    const handleLikeClick = (itemId: string, currentLike: boolean) => {
        const updatedLike = !currentLike;
        updateItem(itemId, updatedLike);
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
