import React from 'react';
import burderLogo from '../../assets/images/127 burger-logo.png';
import styles from './Logo.css';

const Logo = (props) => (
    <div className={styles.Logo}>
        <a href="#">
            <img src={burderLogo} alt="logo"/>
        </a>

    </div>
);

export default Logo;