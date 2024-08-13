import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Выберите галлерею</h1>
            <div className={styles.items}>
                <Link href="/portfolio/illustrations" className={styles.item}>
                    <span className={styles.title}>Иллюстрации</span>
                </Link>
                <Link href="/portfolio/websites" className={styles.item}>
                    <span className={styles.title}>Веб-сайты</span>
                </Link>
                <Link href="/portfolio/applications" className={styles.item}>
                    <span className={styles.title}>Приложения</span>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio
