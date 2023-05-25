import React from 'react';
import styles from './about.module.css'
import {blog} from '../../database/database'
import BlogItem from '../BlogItem/BlogItem';
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h5 className={styles.title}>НАШЕ КАФЕ</h5>
                <p className={styles.subTitle}>Добро пожаловать в PizzaRoll , здесь вас ждет большой ассортимент блюд , а также теплый и добрый персонал , хорошая музыка и быстрое обслуживание ! </p>
                <Link to ='menu' className={styles.btn}>
                    Посмотреть меню
                </Link>
            </div>
            <div className={styles.blogWrapper}>
                {
                    blog.map(item => {
                        return <BlogItem 
                            key = {item.id}
                            id = {item.id}
                            title = {item.title}
                            img = {item.img}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default About;
