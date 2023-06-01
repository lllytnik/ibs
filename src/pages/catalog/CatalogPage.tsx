import React, { useState } from 'react';
import style from './CatalogPage.module.css'
import { ProductCard } from '../../components/productCard/ProductCard';


export const CatalogPage = () => {


    return (
        <div className={style.productsList}>
            <ProductCard searchQuery={''} />
        </div>
    );
};

