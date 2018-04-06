import React from 'react';
import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/NavigationItems';

const Toolbar = (props) =>  (
    <header className={styles.Toolbar }>
        <div>Menu</div>
        <div className={styles.Logo}>
            <Logo/>
        </div>

        <nav className={styles.DesktopOnly}>
          <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;