import React, { useState } from 'react';
import styles from './navigation.module.css'
import {Link } from 'react-router-dom'
import MenuBurger from '../MenuBurger/MenuBurger';

const Navigation = () => {
   
    const [menu , setMenu] = useState(false)
    
    const handleActive = () => {
        setMenu(true)
    }
    const handleClose = () => {
        setMenu(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>  
                <Link to ='/ramen'>Рамен</Link>
                <Link to ='/rolls'>Роллы</Link>
                <Link to ='/shaurma'>Шаурма</Link>
                <Link to ='/dishes'>Блюда</Link>
                <Link to ='/pizza'>Пицца</Link>
                <Link to ='/drinks'>Напитки</Link>


            </div>

            <div className={styles.navAdaptive}>
                <div className={styles.title}>Меню</div>
                <div className={styles.burger} onClick = {handleActive}>
                </div>
            </div>

            {
                menu && <MenuBurger 
                    close = {handleClose}
                />
            }
           
            
        </div>
    ); 
};

export default Navigation;