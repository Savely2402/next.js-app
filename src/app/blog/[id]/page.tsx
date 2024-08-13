import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem consequuntur voluptatibus, porro eaque fuga ipsum
                        in atque dolorum hic soluta praesentium error facere
                        maiores perspiciatis accusamus non blanditiis vero
                        fugiat.
                    </p>
                    <div className={styles.author}>
                        <Image
                            src="https://img.freepik.com/premium-photo/ai-images_1247965-6783.jpg?w=740"
                            alt="avatar"
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>John Doe</span>
                    </div>
                </div>

                <div className={styles.imgContainer}>
                    <Image
                        src="https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787850.jpg?t=st=1723480002~exp=1723483602~hmac=704e4c78aa94cd698e3763c0195791b52206224338a4c153f4c997f8b53e0458&w=826"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    dolor cum, hic commodi aperiam consequatur omnis illo
                    dignissimos eius consequuntur, eos aspernatur architecto?
                    Odit expedita incidunt reprehenderit corporis aspernatur
                    dignissimos? Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Tempora eveniet fuga laboriosam soluta
                    quidem officiis? Natus enim nulla omnis libero, maiores
                    nesciunt quidem corporis aliquam tenetur repellendus
                    voluptatem! Expedita, repudiandae!
                </p>
            </div>
        </div>
    )
}

export default BlogPost
