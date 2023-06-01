import React from 'react';
import style from './HeaderActions.module.css';
import { IconButton } from '../iconButton/IconButton';
import iconCart from '../../assets/images/cart.svg';
import iconUser from '../../assets/images/user.svg';

export const HeaderActions = () => (
    <div className={style.headerActions}>
        <IconButton icon={iconCart} alt="cart" className={style.cartButton} />
        <IconButton icon={iconUser} alt="user" className={style.userButton} />
    </div>
);
