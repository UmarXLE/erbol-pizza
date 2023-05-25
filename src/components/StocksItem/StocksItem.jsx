import React from 'react';
import styles from './stocksitem.module.css'

const StocksItem = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.icon}>
                <img src={props.img} alt="" />
            </div>

            <div className={styles.info}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.text}>{props.descr}</p>
            </div>
        </div>  
    );
};

export default StocksItem;