import React from 'react';
import { LiaBookmark } from "react-icons/lia";
import styles from './Header.module.scss'
import { useFavourites } from '../../hooks/useFavourites'

export const Header = () => {
    
    const favourites = useFavourites();

    return(
        <header className={styles.header}>
            <LiaBookmark className='text-pink-500 size-10 cursor-pointer' />
            <span>{favourites.length}</span>
        </header>
    );
};
