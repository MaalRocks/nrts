import React from 'react';
import styles from 'C:/Users/Lono/Desktop/React/nrts/styles/BlogPost.module.sass'

export default function BlogPost(props) {
    return (
        <main className={styles.blogPostWrapper}>
            <article className={styles.blogPost}>
                <header className={styles.blogPostHeader}>
                    <h1 className={styles.blogPostHeadline}> {props.title} </ h1>
                </header>
                <section className={styles.blogPostSection}>
                    {props.blogPostText}
                </section>
                <footer className={styles.blogPostFooter}>
                    <span className=""> {props.author} </span>
                    <span className=""> Kommentare: {props.comments} </span>
                </footer>
            </article >
        </main>
    )
}