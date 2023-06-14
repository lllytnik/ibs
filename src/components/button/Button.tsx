import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import style from './Button.module.css';

const StyledButton = styled(Button)({
    padding: '0px 15px',
    color: '#ffffff',
    fontSize: '18px',
    background: '#e97f03',
    borderRadius: '10px',
    border: '1px solid transparent',

    '&:hover': {
        backgroundColor: '#fff',
        color: '#e97f03',
        border: '1px solid #e97f03',
    },
});

export const ButtonAdd = () => (
    <StyledButton onClick={() => { }}>Add to cart</StyledButton>
);


