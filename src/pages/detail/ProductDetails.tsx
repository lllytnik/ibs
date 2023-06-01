import React, { useEffect, useState } from 'react';
import style from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';
import { getItemById, Item } from '../../assets/js/api';
import { BASE_URL } from '../../assets/js/constant';
import { IconButton } from '../../components/iconButton/IconButton';
import iconMinus from '../../assets/images/minus.svg';
import iconPlus from '../../assets/images/plus.svg';
import iconFavorite from '../../assets/images/favorite.svg';

const ProductDetail: React.FC = () => {
    const { id } = useParams<Record<string, string | undefined>>();
    const [item, setItem] = useState<Item | null>(null);
    const [counter, setCounter] = useState(1);
    let totalPrice: number | null = null;

    if (item) {
        totalPrice = counter * item.price.value;
    }
    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        } else {
            setCounter(1);
        }
    };

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await getItemById(id!);
                const fetchedItem: Item = response.data.content;
                setItem(fetchedItem);
            } catch (error) {
                console.error(error);
            }
        };

        fetchItem();
    }, [id]);




    if (!item) {
        return <p>Loading...</p>;
    }

    return (
        <div className={style.productDetails}>
            <div className={style.productDetailsImage}>
                <img src={BASE_URL + item.picture.path} alt={item.picture.alt} />
            </div>
            <div className={style.productDetailsInfo}>
                <h1 className={style.productDetailsTitle}>{item.name}</h1>
                <p className={style.productDetailsDescription}>{item.info}</p>
                <h2 className={style.productDetailsSubTitle}>Details</h2>
                <p className={style.productDetailsDetail}>{item.details}</p>
                <div className={style.productDetailsInner}>
                    <div className={style.productDetailsWrapperPrice}>
                        <div className={style.productDetailsPrice}>
                            <span id="result">
                                {totalPrice}
                                {item.price.currency}
                            </span>
                        </div>
                        <div className={style.cartCounter}>
                            <IconButton icon={iconMinus} onClick={handleDecrement} alt="minus" className={`${style.cartCounterBtn} ${style.minus}`} />
                            <span className={style.cartCounterValue} id="counter">{counter}</span>
                            <IconButton icon={iconPlus} onClick={handleIncrement} alt="plus" className={`${style.cartCounterBtn} ${style.plus}`} />

                        </div>
                    </div>
                    <div className={style.productDetailsWrapperButton}>
                        <button className={style.productDetailsButton}>Add to cart</button>
                        <IconButton icon={iconFavorite} alt="cart" className={style.productCardLike} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
