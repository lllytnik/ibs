import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemContext } from '../../ItemContext';
import style from './ProductCard.module.css';
import { IconButton } from '../iconButton/IconButton';
import iconLike from '../../assets/images/like.svg';
import iconLikeActive from '../../assets/images/like-active.svg';
import { BASE_URL } from '../../assets/js/constant';

interface ProductCardProps {
    searchQuery: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ searchQuery }) => {
    const { items, updateItem } = useContext(ItemContext);

    const filteredItems = items.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleLikeClick = (itemId: string, currentLike: boolean) => {
        const updatedLike = !currentLike;
        updateItem(itemId, updatedLike);
    };

    return (
        <>
            {filteredItems.map((product) => (
                <article className={style.productCard} key={product.id}>
                    <IconButton
                        icon={product.like ? iconLikeActive : iconLike}
                        alt="like"
                        className={style.productsCardLike}
                        onClick={() => handleLikeClick(product.id, product.like)}
                    />
                    <img
                        className={style.productCardImage}
                        src={`${BASE_URL}${product.picture.path}`}
                        alt={product.picture.alt}
                    />
                    <Link to={`/item/${product.id}`} className={style.productCardLink}>
                        <h3 className={style.productCardTitle}>{product.name}</h3>
                    </Link>
                    <span className={style.productCardPrice}>
                        {product.price.value} {product.price.currency}
                    </span>
                </article>
            ))}
        </>
    );
};
