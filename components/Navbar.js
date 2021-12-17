import React from 'react';
import styles from 'C:/Users/Lono/Desktop/React/nrts/styles/Navbar.module.sass'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarUl}>
                <li className={styles.navbarIl}>
                    <Link href={"/blog"} >
                        <a>Blog</a>
                    </Link>
                </li>
                <li className={styles.navbarIl}>
                    <Link href={"/visuals"} >
                        <a>Visuals</a>
                    </Link>
                </li>
                <li className={styles.navbarIl}>
                    <Link href={"/audio"} >
                        <a>Audio</a>
                    </Link>
                </li>
                <li className={styles.navbarIl}>
                    <Link href={"/escape"} >
                        <a>Escape</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


