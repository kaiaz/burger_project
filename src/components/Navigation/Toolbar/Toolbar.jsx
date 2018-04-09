import React from 'react';
import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) =>  (
    <header className={styles.Toolbar }>
        <DrawerToggle
            clicked={props.drawerToggleClicked}
        />
        <div className={styles.Logo}>
            <Logo/>
        </div>

        <nav className={styles.DesktopOnly}>
          <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;