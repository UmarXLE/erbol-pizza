import React from 'react';
import styles from './anchor.module.css'
import {Link} from 'react-router-dom'

const Anchor = () => {
    return (
        <Link to ='/' className={styles.wrapper}>
            <div className={styles.icon}>
                <img src="./assets/anchor.png" alt="" />
            </div>
            <div className={styles.text}>
                Вернуться на главную
            </div>
        </Link>
    );
};

export default Anchor;