import React from 'react'
import styles from './Loader.module.css'

export default function Loader() {
    return (
        <div className={styles.container} >
            <div className={styles.loader}>
                <div className={`${styles.inner} ${styles.one}`}></div>
                <div className={`${styles.inner} ${styles.two}`}></div>
                <div className={`${styles.inner} ${styles.three}`}></div>
            </div>
        </div>
    )
}
