import React from 'react';
import style from './IconButton.module.css'

type PropsIconButton = {
    icon: string
    alt: string
    className?: string
    onClick?: () => void
}

export const IconButton: React.FC<PropsIconButton> = ({ icon, alt, className, onClick }) => (
    <button onClick={onClick} className={`${style.iconButton} ${className}`}>
        <img src={icon} alt={alt} />
    </button>
);


