import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

interface CategoryProps {
    params: {
        category: string
    }
}

const Category: React.FC<CategoryProps> = ({ params }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desct</p>
                    <Button url="#">Смотреть больше</Button>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="https://img.freepik.com/premium-photo/crowd-people-are-gathered-around-roman-structure_1115474-139096.jpg?w=740"
                        alt="photo"
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desct</p>
                    <Button url="#">Смотреть больше</Button>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="https://img.freepik.com/premium-photo/crowd-people-are-gathered-around-roman-structure_1115474-139096.jpg?w=740"
                        alt="photo"
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desct</p>
                    <Button url="#">Смотреть больше</Button>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="https://img.freepik.com/premium-photo/crowd-people-are-gathered-around-roman-structure_1115474-139096.jpg?w=740"
                        alt="photo"
                    />
                </div>
            </div>
        </div>
    )
}

export default Category
