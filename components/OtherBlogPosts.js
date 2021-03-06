import React from 'react'
import Link from 'next/link'
import styles from '../styles/OtherBlogPosts.module.sass'

export default function otherBlogPosts(props) {
    return (
        <div className={styles.wrapper}>
            <article className={styles.content}>
                <header className={styles.otherBlogPostsHeader}>
                    <h2 className={styles.otherBlogPostsHeadline}>- Zuletzt gepostet -</h2>
                </header>
                <p className={styles.otherBlogPostsSection}>
                    <Link href="">
                        <a className={styles.otherBlogPostsSectionItem}>- Wächter und sabbel -</a>
                    </Link>
                    <Link href="">
                        <a className={styles.otherBlogPostsSectionItem}>- schlaflos mit hüttenkäse -</a>
                    </Link>
                    <Link href="">
                        <a className={styles.otherBlogPostsSectionItem}>- aber ja doch -</a>
                    </Link>

                    <footer>
                    </footer>
                </p>
            </article>
        </div>
    )
}
