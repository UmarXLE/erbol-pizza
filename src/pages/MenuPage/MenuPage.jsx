import React from 'react';
import styles from './menupage.module.css'
import Anchor from '../../components/Anchor/Anchor'
import MenuItem from '../../components/MenuItem/MenuItem';
import Footer from '../../components/Footer/Footer'
import { pizza ,rolls, shaurma , disheds , drinks ,cocktails , ramen , tea } from '../../database/database';

const MenuPage = () => {
    return (
        <div className={styles.wrapper}>
            <Anchor />
            <div className={styles.container}> 
                <div className={styles.menu}>
                        <div className={styles.menuTitle}>
                            <div className={styles.name}>Пицца</div>
                            <div className={styles.price}>Цена:</div>
                        </div>
                        <div className={styles.menuContainer}>
                            {
                                pizza.map(item => {
                                    return <MenuItem 
                                        key={item.id}
                                        id = {item.id}
                                        name = {item.name}
                                        price = {item.price}
                                    />
                                })
                            }
                        </div>
                    </div>


                    <div className={styles.menu}>
                        <div className={styles.menuTitle}>
                            <div className={styles.name}>Роллы</div>
                            <div className={styles.price}>Цена:</div>
                        </div>
                        <div className={styles.menuContainer}>
                            {
                                rolls.map(item => {
                                    return <MenuItem 
                                        key={item.id}
                                        id = {item.id}
                                        name = {item.name}
                                        price = {item.price}
                                    />
                                })
                            }
                        </div>
                    </div>


                    <div className={styles.menu}>
                        <div className={styles.menuTitle}>
                            <div className={styles.name}>Шаурма</div>
                            <div className={styles.price}>Цена:</div>
                        </div>
                        <div className={styles.menuContainer}>
                            {
                                shaurma.map(item => {
                                    return <MenuItem 
                                        key={item.id}
                                        id = {item.id}
                                        name = {item.name}
                                        price = {item.price}
                                    />
                                })
                            }
                        </div>
                    </div>


                    <div className={styles.menu}>
                        <div className={styles.menuTitle}>
                            <div className={styles.name}>Блюда</div>
                            <div className={styles.price}>Цена:</div>
                        </div>
                        <div className={styles.menuContainer}>
                            {
                                disheds.map(item => {
                                    return <MenuItem 
                                        key={item.id}
                                        id = {item.id}
                                        name = {item.name}
                                        price = {item.price}
                                    />
                                })
                            }
                        </div>
                    </div>


                    <div className={styles.menu}>
                        <div className={styles.menuTitle}>
                            <div className={styles.name}>Напитки</div>
                            <div className={styles.price}>Цена:</div>
                        </div>
                        <div className={styles.menuContainer}>
                            {
                                drinks.map(item => {
                                    return <MenuItem 
                                        key={item.id}
                                        id = {item.id}
                                        name = {item.name}
                                        price = {item.price}
                                    />
                                })
                            }
                        </div>
                    </div>


                    <div className={styles.menu}>
                        <div className={styles.menuTitle}>
                            <div className={styles.name}>Молочные коктейли</div>
                            <div className={styles.price}>Цена:</div>
                        </div>
                        <div className={styles.menuContainer}>
                            {
                                cocktails.map(item => {
                                    return <MenuItem 
                                        key={item.id}
                                        id = {item.id}
                                        name = {item.name}
                                        price = {item.price}
                                    />
                                })
                            }
                        </div>
                    </div>


                    <div className={styles.menu}>
                        <div className={styles.menuTitle}>
                            <div className={styles.name}>Рамен</div>
                            <div className={styles.price}>Цена:</div>
                        </div>
                        <div className={styles.menuContainer}>
                            {
                                ramen.map(item => {
                                    return <MenuItem 
                                        key={item.id}
                                        id = {item.id}
                                        name = {item.name}
                                        price = {item.price}
                                    />
                                })
                            }
                        </div>
                    </div>


                    <div className={styles.menu}>
                        <div className={styles.menuTitle}>
                            <div className={styles.name}>Чай</div>
                            <div className={styles.price}>Цена:</div>
                        </div>
                        <div className={styles.menuContainer}>
                            {
                                tea.map(item => {
                                    return <MenuItem 
                                        key={item.id}
                                        id = {item.id}
                                        name = {item.name}
                                        price = {item.price}
                                    />
                                })
                            }
                        </div>
                    </div>

                    

            </div>
            <Footer />
        </div>
    );
};

export default MenuPage;