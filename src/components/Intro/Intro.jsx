import React from 'react';
import styles from './intro.module.css'
import video from '../../video.mp4'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';


const Intro = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className={styles.wrapper}>
        
            <div className={styles.title} data-aos="zoom-in" data-aos-duration='1500' data-aos-once='true'> Bishkek Pizza Kitchen</div>
            {/* <video className={styles.video} src={video} muted autoPlay loop></video> */}

        </div>
    );

};

export default Intro;