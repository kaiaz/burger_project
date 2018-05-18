import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.css';

const navigationItems = (props) =>  (
    <ul className={styles.NavigationItems}>
        <NavigationItem link='/' exact>BurgerBuilder</NavigationItem>
        { props.isAuthenticated ? <NavigationItem link='/orders'>Orders</NavigationItem> : null}
        { !props.isAuthenticated
            ? <NavigationItem link='/auth'>Authenticate</NavigationItem>
            : <NavigationItem link='/Logout'>Logout</NavigationItem> }

    </ul>
);

export default navigationItems;