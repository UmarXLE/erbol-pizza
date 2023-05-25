import React from 'react';
import styles from './deliverypage.module.css'
import Anchor from '../../components/Anchor/Anchor';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

const DeliveryPage = () => {
    return (
        <div className={styles.wrapper}>

            <div>
                <Anchor />
                <Navigation />
            </div>
                <div className={styles.container}>
                    <div className={styles.icon}>
                        <img src="./assets/delivery.png" alt="" />
                    </div>

                    <div className={styles.info}>
                        <h2 className={styles.title}>Условия доставки </h2>
                        <p className={styles.descr}>При заказа от 400 сомов , доставка на территории ГЭС-2 и Бакай-Ата бесплатная , по городу и за городом от 150-200 сомов</p>
                    </div>  
                </div>
                <Footer />


        </div>
    );
};

export default DeliveryPage;