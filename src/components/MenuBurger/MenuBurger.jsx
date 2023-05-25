import React from 'react';
import styles from './menuburger.module.css'
import {Link } from 'react-router-dom'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

const MenuBurger = ({close}) => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className={styles.wrapper} data-aos="fade-left" data-aos-duration="1000">
             <nav className={styles.menu}>
                <Link className={styles.main} to ='/'>
                    <div className={styles.icon}>
                        <img src="./assets/anchor.png" alt="" />
                        </div>

                        <div className={styles.text}>
                             На главную
                    </div>                </Link>
                <Link to ='/pizza'>Пицца</Link>
                <Link to ='/rolls'>Роллы</Link>
                <Link to ='/shaurma'>Шаурма</Link>
                <Link to ='/dishes'>Блюда</Link>
                <Link to ='/drinks'>Напитки</Link>
                <Link to ='/ramen'>Рамен</Link>
                <Link to ='/stocks'>Акции</Link>
                <Link to ='/delivery'>Условия доставки</Link>


            </nav>

            <div onClick={close} className={styles.close}></div>
        </div>
    );
};

export default MenuBurger;