import React from 'react';
import styles from './menuitem.module.css'

const MenuItem = (props) => {
    return (
        <div className={styles.item}>

            <div className={styles.name}>{props.name}</div>
            <div className={styles.price}>{props.price}</div>
            
        </div>
    );
};

export default MenuItem;