import React from 'react';
import styles from './footer.module.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.info}>
                {/* <img src="./assets/logo.png" alt="" /> */}
                <h2 className={styles.title}>BPK</h2>
            </div>
            <nav className={styles.nav}>
                <Link to='/delivery'>Условия доставки</Link>
                <Link to='/stocks'>Акции</Link> 
            </nav>
        </div>
    </div>
    );
};

export default Footer;