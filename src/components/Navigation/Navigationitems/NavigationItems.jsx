import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import styles from './NavigationItems.css';

const navigationItems = (props) =>  (
    <ul className={styles.NavigationItems}>
        <NavigationItem link='/'>BurgerBuilder</NavigationItem>
        <NavigationItem link='/'>CheckOut</NavigationItem>
    </ul>
);

export default navigationItems;