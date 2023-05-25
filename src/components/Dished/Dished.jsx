import styles from './dished.module.css'
import {pizza , rolls } from '../../database/database'
import DishedItem from '../DishedItem/DishedItem'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import OrderWindow from '../OrderWindow/OrderWindow';

const Dished = () => {
    const [window , setWindow] = useState(false)
    const handleWindow = () => {
        setWindow(true)
    }

    const handleClose = () => {
        setWindow(false)
    }
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}> Роллы</h2>
                <Swiper
                        slidesPerView={4.3}
                        spaceBetween={20}
                        className = {styles.container}
                        modules={[Pagination]}
                        breakpoints={{
                                200:{
                                    slidesPerView: 1.3,
                                    spaceBetween: 15,
                                },
                                375:{
                                    slidesPerView: 1.3,
                                    spaceBetween:  15,
                                },
                                576: {
                                  slidesPerView: 1.3,
                                  spaceBetween: 20,
                                },
                                768: {
                                  slidesPerView: 2.3,
                                },
                                1024: {
                                  spaceBetween: 20,
                                  slidesPerView: 3.3,
                                },
                                1280: {
                                  slidesPerGroup: 2,
                                  slidesPerView: 4.5,
                                },
                              }}
                    >
                        {
                            rolls.map(item => {
                                return <SwiperSlide 
                                            key= {item.id}>
                                            <DishedItem 
                                                id = {item.id}
                                                key ={item.id}
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
                     {
                            window && <OrderWindow 
                            close = {handleClose}
                                     />
                      }
        </div>
    );
};

export default Dished;