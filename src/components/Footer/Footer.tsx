import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2024 StartX. All rights reserved.</div>
            <div className={styles.social}>
                <Image
                    src="/1.png"
                    width={25}
                    height={25}
                    className={styles.icon}
                    alt="StartX dev fb"
                />
                <Image
                    src="/2.png"
                    width={25}
                    height={25}
                    className={styles.icon}
                    alt="StartX dev inst"
                />
                <Image
                    src="/3.png"
                    width={25}
                    height={25}
                    className={styles.icon}
                    alt="StartX dev tw"
                />
                <Image
                    src="/4.png"
                    width={25}
                    height={25}
                    className={styles.icon}
                    alt="StartX dev yt"
                />
            </div>
        </div>
    )
}

export default Footer
