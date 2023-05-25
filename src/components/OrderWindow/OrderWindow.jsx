import React from 'react';
import styles from './orderwindow.module.css'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';


const OrderWindow = ({close}) => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className={styles.wrapper} >
               <div className={styles.close} onClick = {close}>

               </div>

               <div className={styles.content} data-aos="zoom-in" data-aos-duration="800">
                <div className={styles.titleWrapper}>
                    <div className={styles.title}>
                        <h2 className={styles.title}>Заказать </h2>
                    </div>
                    <div className={styles.titleIcon}>
                        <img src="./assets/order.png" alt="" />
                    </div>
                </div>
                    <div className={styles.whatsapp}>
                        <div className={styles.icon}>
                            <img src="./assets/whatsapp.png" alt="" />
                        </div>
                        <div className={styles.text}>
                            <a href="https://wa.me/996703855947 ">+996 703 855 947 </a> 
                        </div>
                    </div>
                    <div className={styles.call}>
                    <div className={styles.icon}>
                            <img src="./assets/phone.png" alt="" />
                        </div>
                        <div className={styles.text}>
                           <a href="tel:+996703855947 ">+996 703 855 947 </a> 
                        </div>
                    </div>
               </div>
        </div>
    );
};

export default OrderWindow;