import React from 'react';
import style from './Header.module.css';
import { SearchForm } from '../search/SearchForm';
import { HeaderActions } from '../headerActions/HeaderActions';

export const Header = () => (
    <header className={style.header}>
        <SearchForm />
        <HeaderActions />
    </header>
);
