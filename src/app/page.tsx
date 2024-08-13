import Image from 'next/image'
import styles from './page.module.css'
import heroPng from '../../public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>
                    Лучший дизайн для ваших цифровых продуктов.
                </h1>
                <p className={styles.description}>
                    Воплощение ваших Идей в реальность. Мы обьединяем команды с
                    глобальной IT-индустрии.
                </p>
                <Button url="/portfolio">Посмотреть наши работы</Button>
            </div>
            <div className={styles.item}>
                <Image src={heroPng} alt="Hero" className={styles.img} />
            </div>
        </div>
    )
}
