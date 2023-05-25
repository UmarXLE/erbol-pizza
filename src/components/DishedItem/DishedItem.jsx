import React, { useState } from 'react';
import OrderWindow from '../OrderWindow/OrderWindow';
import styles from './disheditem.module.css'

const DishedItem = ({img,name,descr,price,close,open}) => {

    return (
        <div className={styles.item}>
            <img className={styles.icon} src={img} alt="" />
            <div className={styles.content}>
                <h2 className={styles.title}>{name}</h2>
                <p className={styles.subTitle}>{descr}</p>
                <div className={styles.order}>
                    <div><h2 className={styles.price}>{price}</h2></div>  
                    <div className={styles.btn} onClick={open}>заказать</div>
                </div>
            </div>
        </div>

    );
};

export default DishedItem;

