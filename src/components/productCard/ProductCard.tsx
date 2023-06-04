
import React from 'react';
import { Link } from 'react-router-dom';
import style from './ProductCard.module.css';
import { IconButton } from '../iconButton/IconButton';
import iconLike from '../../assets/images/like.svg';
import iconLikeActive from '../../assets/images/like-active.svg';
import { BASE_URL_IMG } from '../../assets/js/constant';

interface Product {
    id: string;
    name: string;
    like: boolean;
    picture: {
        path: string;
        alt: string;
    };
    price: {
        value: number;
        currency: string;
    };
}

interface ProductCardProps {
    product: Product;
    onLikeClick: (itemId: string, currentLike: boolean) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onLikeClick }) => {
    const handleLikeClick = () => {
        onLikeClick(product.id, product.like);
    };

    return (
        <article className={style.productCard} key={product.id}>
            <IconButton
                icon={product.like ? iconLikeActive : iconLike}
                alt="like"
                className={style.productsCardLike}
                onClick={handleLikeClick}
            />
            <img
                className={style.productCardImage}
                src={`${BASE_URL_IMG}${product.picture.path}`}
                alt={product.picture.alt}
            />
            <Link to={`/item/${product.id}`} className={style.productCardLink}>
                <h3 className={style.productCardTitle}>{product.name}</h3>
            </Link>
            <span className={style.productCardPrice}>
                {product.price.value} {product.price.currency}
            </span>
        </article>
    );
};

