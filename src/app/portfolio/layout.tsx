import React from 'react'
import styles from './page.module.css'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <h1 className={styles.mainTitle}>Наши работы</h1>
            {children}
        </div>
    )
}

export default Layout
