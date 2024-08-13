'use client'

import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

interface TLinks {
    id: number
    title: string
    url: string
}

const links: TLinks[] = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio',
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard',
    },
]

const Navbar: React.FC = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.logo} href="/">
                Startx
            </Link>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}

                <button
                    className={styles.logout}
                    onClick={() => console.log('logout')}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar
