import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Navigation from '../../components/Navigation/Navigation'
import styles from '../Pizza/pizza.module.css'
import {drinks ,tea, cocktails } from '../../database/database'
import DishedItem from '../../components/DishedItem/DishedItem'
import Anchor from "../../components/Anchor/Anchor";
import OrderWindow from "../../components/OrderWindow/OrderWindow";
import Footer from "../../components/Footer/Footer";
import s from './drinkspage.module.css'

const Pizza = () => {

    const [window , setWindow] = useState(false)

    const handleWindow = () => {
        setWindow(true)
    }

    const handleClose = () => {
        setWindow(false)
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <Anchor />
                <Navigation />
            </div>

            <div className={s.contentWrapper}></div>
            
            <div className={s.content}>
                <h2 className={s.title}>Напитки</h2>
                <div className={s.container}>
                    <Swiper
                        className = {styles.container}
                        slidesPerView={4.5}
                        spaceBetween={20}
                        modules={[Pagination]}
                        breakpoints={{
                                200:{
                                    slidesPerView: 1.3,
                                    spaceBetween: 10,
                                },
                                375:{
                                    slidesPerView: 1.5,
                                    spaceBetween:  15,
                                },
                                576: {
                                  slidesPerView: 1.5,
                                  spaceBetween: 10,
                                },
                            // when window width is >= 768px
                                768: {
                                  slidesPerView: 2.5,
                                },
                            // when window width is >= 1024px
                                1024: {
                                  spaceBetween: 20,
                                  slidesPerView: 3.5,
                                },
                                1280: {
                                  slidesPerGroup: 2,
                                  slidesPerView: 4.5,
                                },
                              }}
                          onSwiper={(swiper) => console.log(swiper)}
                          onSlideChange={() => console.log('slide change')}
                        >
                    {
                        drinks.map(item => {
                            return <SwiperSlide>
                                        <DishedItem 
                                            key = {item.id}
                                            id = {item.id}
                                            img = {item.img}
                                            name = {item.name}
                                            descr = {item.descr}
                                            price = {item.price}
                                            open = {handleWindow}
                                            close = {handleClose}
                                        />
                                     </SwiperSlide>
                        })
                    }

                    </Swiper>

                    
                    
                </div>
                    {
                        window && <OrderWindow 
                            close = {handleClose}
                                 />
                      }
            </div>

            <div className={s.content}>
                <h2 className={s.title}>Чай</h2>
                <div className={s.container}>
                    <Swiper
                        className = {styles.container}
                        slidesPerView={4.5}
                        spaceBetween={20}
                        modules={[Pagination]}
                        breakpoints={{
                                200:{
                                    slidesPerView: 1.3,
                                    spaceBetween: 10,
                                },
                                375:{
                                    slidesPerView: 1.5,
                                    spaceBetween:  15,
                                },
                                576: {
                                  slidesPerView: 1.5,
                                  spaceBetween: 10,
                                },
                                768: {
                                  slidesPerView: 2.5,
                                },
                                1024: {
                                  spaceBetween: 20,
                                  slidesPerView: 3.5,
                                },
                                1280: {
                                  slidesPerGroup: 2,
                                  slidesPerView: 4.5,
                                },
                              }}
                          onSwiper={(swiper) => console.log(swiper)}
                          onSlideChange={() => console.log('slide change')}
                        >
                    {
                        tea.map(item => {
                            return <SwiperSlide>
                                        <DishedItem 
                                            key = {item.id}
                                            id = {item.id}
                                            img = {item.img}
                                            name = {item.name}
                                            descr = {item.descr}
                                            price = {item.price}
                                            open = {handleWindow}
                                            close = {handleClose}
                                        />
                                     </SwiperSlide>
                        })
                    }

                    </Swiper>

                    
                    
                </div>
            </div>


            <div className={s.content}>
                <h2 className={s.title}>Молочные коктейли</h2>
                <div className={s.container}>
                    <Swiper
                        className = {styles.container}
                        slidesPerView={4.5}
                        spaceBetween={20}
                        modules={[Pagination]}
                        breakpoints={{
                                200:{
                                    slidesPerView: 1.3,
                                    spaceBetween: 10,
                                },
                                375:{
                                    slidesPerView: 1.5,
                                    spaceBetween:  15,
                                },
                                576: {
                                  slidesPerView: 1.5,
                                  spaceBetween: 10,
                                },
                                768: {
                                  slidesPerView: 2.5,
                                },
                                1024: {
                                  spaceBetween: 20,
                                  slidesPerView: 3.5,
                                },
                                1280: {
                                  slidesPerGroup: 2,
                                  slidesPerView: 4.5,
                                },
                              }}
                         
                        >
                    {
                        cocktails.map(item => {
                            return <SwiperSlide>
                                        <DishedItem 
                                            key = {item.id}
                                            id = {item.id}
                                            img = {item.img}
                                            name = {item.name}
                                            descr = {item.descr}
                                            price = {item.price}
                                            open = {handleWindow}
                                            close = {handleClose}
                                        />
                                     </SwiperSlide>
                        })
                    }

                    </Swiper>

                    
                    
                </div>
                    
            </div>

            <Footer />
        </div>
    );
};

export default Pizza;