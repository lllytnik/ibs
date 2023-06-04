import React, { useState, ChangeEvent } from 'react';
import style from './SearchForm.module.css';
import iconSearch from '../../assets/images/search.svg';
import { IconButton } from '../iconButton/IconButton';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();


    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const queryValue = value ? { search: value } : []
        setSearchQuery(value);
        setSearchParams(queryValue)
    };
    return (
        <div>
            <form className={style.searchForm}>
                <IconButton icon={iconSearch} alt="search" className={style.searchButton} />
                <input
                    type="text"
                    className={style.searchInput}
                    placeholder="Поиск продуктов"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </form>
        </div>
    );
};
