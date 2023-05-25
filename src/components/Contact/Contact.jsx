import React,{useEffect , useState} from 'react';
import styles from './contact.module.css'
import DG from '2gis-maps';
import OrderWindow from '../OrderWindow/OrderWindow';


const Contact = () => {

    const [window , setWindow] = useState(false)
    
    const handleWindow = () => {
        setWindow(true)
    }

    const handleClose = () => {
        setWindow(false)
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.info}>
                <h2 className={styles.title}>Контакты</h2>
                <div className={styles.moreInfo}>
                    <div className={styles.adress}>
                        <div className={styles.icon}>
                            <img src="./assets/contact-1.png" alt="" />
                        </div>
                        <div className={styles.adressInfo}>
                            <p>Наш адресс :</p>
                            <h2>г.Бишкек</h2>
                        </div>
                    </div>

                    <div className={styles.mail}>
                        <div className={styles.icon}>
                                <img src="./assets/contact-2.png" alt="" />
                        </div>
                        <div className={styles.moreMail}>
                            <p>Наша почта :</p>
                            <h2>gyyu093@gmail.com</h2>
                        </div>
                    </div>
                </div>
                
                <div className={styles.order}>
                    <div className={styles.btn} onClick ={handleWindow}>забронировать стол</div>
                    <div className={styles.additionalInfo}>
                        <div><a href="tel:+996703855947">+996 703 855 947 </a></div>
                        <div><p>Звоните или оставляйте заявку</p></div>
                    </div>
                </div>



                <div className={styles.social}>
                    <div className={styles.socialText}>
                         Мы в соц сетях:
                    </div>
                    <div className={styles.icons}>
                        <div>
                            <a target='_blank' href="">
                                 <img src="./assets/instagram.png" alt="" />
                            </a>
                        </div>
                        <div>
                            <a target='_blank' href="https://wa.me/996703855947">
                                <img src="./assets/whatsapp.png" alt="" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className={styles.map} >
                <MapAPI /> 
             </div> */}

             {
                window && <OrderWindow 
                    close = {handleClose}
                />
            }
            
        </div>
    );
};


const MapAPI = () => {
    useEffect(() => {
            let map
            map = DG.map('map-container',{
            center:[42.906872, 74.63971],
            zoom:20
        })

        DG.marker([42.906872, 74.63971]).addTo(map)
    },[])
    return (
        <div id='map-container' className={styles.mapApi}>
            
        </div>
    )
}


export default Contact;