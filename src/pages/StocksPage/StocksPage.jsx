import React from 'react';
import styles from './stockspage.module.css'
import Anchor from '../../components/Anchor/Anchor';
import Navigation from '../../components/Navigation/Navigation';
import StocksItem from '../../components/StocksItem/StocksItem';
import Footer from '../../components/Footer/Footer';

const StocksPage = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <Anchor />
                <Navigation />
            </div>
            

            <div className={styles.container}>
                <StocksItem 
                    img = './assets/stocks-1.jpeg'
                    title = '2 + 1'
                    descr = 'При заказе 2 пиццы 30 , в подарок Coca Cola 1л'
                />
                 <StocksItem 
                    img = './assets/rolls-11.png'
                    title = 'Азия сет'
                    descr = 'При закзае Азия сет 32 шт! Филадельфия лайт, Калифорния кунжут, Фила в масаге Запечённ Ролл + Coca Cola 1л'
                />
                <StocksItem 
                    img = './assets/rolls-2.png'
                    title = 'Сет Микс '
                    descr = 'При закзае Сет Микс 40 шт! Унаги темпура , калифорния , запеченный ролл , фила лайт , ролл с крабом + Coca Cola 1л'
                />
            </div>
            <Footer />
        </div>
    );
};

export default StocksPage;