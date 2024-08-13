import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://img.freepik.com/free-photo/coders-discussing-about-source-code-compiling-discovers-errors-asks-rest-team-explanations-front-multiple-screens-running-algorithms-software-developers-doing-teamwork_482257-41856.jpg?t=st=1723378151~exp=1723381751~hmac=29ca1da646a2feb07e9daec0959810c2c5d77aefb2f3530ae8d345ace0641cc9&w=826"
                    alt=""
                    fill={true}
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.title}>
                        Цифровые Рассказчики историй
                    </h1>
                    <h2 className={styles.desc}>
                        Создание отмеченных наградами цифровых решений вручную
                    </h2>
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Кто мы?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Unde ab libero eligendi commodi numquam neque,
                        dignissimos totam deserunt ipsum quis ipsam doloribus
                        perferendis? Perferendis, officiis rem. Corrupti rem
                        <br />
                        <br />
                        eveniet corporis! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dolorum quos, veritatis qui quam minus
                        rem consequuntur voluptatibus omnis libero. Quia
                        veritatis culpa eaque illo hic! Harum nobis excepturi
                        corporis officiis.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>Чем мы занимаемся?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Unde ab libero eligendi commodi numquam neque,
                        dignissimos totam deserunt ipsum quis ipsam doloribus
                        perferendis? Perferendis, officiis rem. Corrupti rem
                        eveniet corporis! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                        <br />
                        <br />
                        - Интерактивные веб-сайты
                        <br />
                        <br />- Мобильные приложения
                    </p>

                    <Button url="contact">Контакты</Button>
                </div>
            </div>
        </div>
    )
}

export default About
