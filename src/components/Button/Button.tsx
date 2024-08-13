import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'

interface TButtonProps {
    children: React.ReactNode
    url: string
}

const Button: React.FC<TButtonProps> = ({ children, url }) => {
    return (
        <Link href={url}>
            <div className={styles.container}>{children}</div>
        </Link>
    )
}

export default Button
