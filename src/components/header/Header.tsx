import React from 'react';
import style from './Header.module.css';
import { HeaderActions } from '../headerActions/HeaderActions';
import { SearchForm } from '../search/SearchForm';

export const Header = () => (
    <header className={style.header}>
        <SearchForm />
        <HeaderActions />
    </header>
);
