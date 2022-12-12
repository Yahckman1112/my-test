import React from 'react';
import styles from  './card.module.scss'
 function Card({data}) {

   
    return (
        <div>

        <div className={styles.card}>
            <p className={styles.para1}>{data}</p>
        </div>
         
        </div>
    );
}

export default Card;

