import React, { useState, ChangeEvent } from 'react';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom';

const StyledForm = styled('form')({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
});

export const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const queryValue = value ? { search: value } : [];
        setSearchQuery(value);
        setSearchParams(queryValue);
    };

    return (
        <div>
            <StyledForm>
                <IconButton type="submit">
                    <SearchIcon />
                </IconButton>
                <TextField
                    type="text"
                    variant="standard"
                    size="small"
                    color="warning"
                    placeholder="Поиск продуктов"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </StyledForm>
        </div>
    );
};
