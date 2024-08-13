import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Оставайтесь с нами</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/contact.png"
                        alt="contact"
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <div className={styles.form}>
                    <input
                        placeholder="Имя"
                        name="name"
                        type="text"
                        className={styles.input}
                    />
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        className={styles.input}
                    />
                    <textarea
                        placeholder="Сообщение"
                        cols={30}
                        rows={10}
                        className={styles.textArea}
                    />
                    <Button url="#">Отправить</Button>
                </div>
            </div>
        </div>
    )
}

export default Contact
