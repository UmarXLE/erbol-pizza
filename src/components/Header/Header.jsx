import React, { useState } from 'react';
import OrderWindow from '../OrderWindow/OrderWindow';
import styles from './header.module.css'

const Header = () => {

    const [window , setWindow] = useState(false)
    
    const handleWindow = () => {
        setWindow(true)
    }

    const handleClose = () => {
        setWindow(false)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <div className={styles.logo}>
                    {/* <img src="./assets/logo.png" alt="" /> */}
                    <h2>BPK</h2>
                </div>
                <div className={styles.contact}>
                        <img src="./assets/contacticon.png" alt="" />
                    <div className={styles.contactInfo}>
                        <p>Контакты:</p>
                        <a href="tel:+996 703 855 947 " className={styles.contactInfoTitle}> 
                        +996 703 855 947                             
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.socialMedia}>
                    <div className={styles.socialItem}>
                       <a target='_blank' href=""><img src="./assets/instagram.png" alt="" /></a> 
                       <a target='_blank' href="https://wa.me/996703855947"><img src="./assets/whatsapp.png" alt="" /></a> 
                    </div>
                    
                    <div className={styles.order} onClick ={handleWindow}>
                        заказать 
                    </div>
                </div>
            </div>


            {
                window && <OrderWindow 
                    close = {handleClose}
                />
            }
        </div>
    );
};

export default Header;