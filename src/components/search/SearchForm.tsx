import React, { useState } from 'react';
import style from './SearchForm.module.css';
import iconSearch from '../../assets/images/search.svg';
import { IconButton } from '../iconButton/IconButton';
import { ProductCard } from '../productCard/ProductCard';

export const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            <form className={style.searchForm}>
                <IconButton icon={iconSearch} alt="search" className={style.searchButton} />
                <input
                    type="text"
                    className={style.searchInput}
                    placeholder="Search products"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </form>
            <ProductCard searchQuery={searchQuery} />
        </div>
    );
};
