import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.css';

const navigationItems = (props) =>  (
    <ul className={styles.NavigationItems}>
        <NavigationItem link='/' exact>BurgerBuilder</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
        <NavigationItem link='/auth'>Authenticate</NavigationItem>
    </ul>
);

export default navigationItems;