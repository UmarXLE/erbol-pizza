import React  from 'react';
import styles from './homepage.module.css'
import Intro from '../../components/Intro/Intro'
import Navigation from '../../components/Navigation/Navigation';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Dished from '../../components/Dished/Dished';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { pizza } from '../../database/database';

const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
           <Intro />
           <Navigation />
           <Dished />
           <div className={styles.line}></div>
           <About />
           <Contact />
           <Footer />

        </div>
    );
};

export default HomePage;