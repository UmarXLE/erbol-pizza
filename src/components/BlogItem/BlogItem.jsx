import React from 'react';
import styles from './blogitem.module.css'

const BlogItem = (props) => {
    return (
        <div className ={ styles.item}>
            <div className={styles.img}>
                <img src={props.img} alt="" />
            </div>
            <h5 className={styles.title}>{props.title}</h5>
        </div>
    );
};

export default BlogItem;