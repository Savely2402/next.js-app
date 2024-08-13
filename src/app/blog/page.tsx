import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import Link from 'next/link'

const Blog = () => {
    return (
        <div className={styles.mainContainer}>
            <Link className={styles.container} href="/blog/testId">
                <div className={styles.imageContainer}>
                    <Image
                        src="https://img.freepik.com/premium-photo/crowd-people-are-gathered-around-roman-structure_1115474-139096.jpg?w=740"
                        alt="photo"
                        width={400}
                        height={250}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>Test</div>
                    <div className={styles.desc}>Description</div>
                </div>
            </Link>
            <Link className={styles.container} href="/blog/testId">
                <div className={styles.imageContainer}>
                    <Image
                        src="https://img.freepik.com/premium-photo/crowd-people-are-gathered-around-roman-structure_1115474-139096.jpg?w=740"
                        alt="photo"
                        width={400}
                        height={250}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>Test</div>
                    <div className={styles.desc}>Description</div>
                </div>
            </Link>
        </div>
    )
}

export default Blog
