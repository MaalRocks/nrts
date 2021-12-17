import Head from 'next/head'
import Navbar from '../components/Navbar'
import BlogPost from '../components/BlogPost'
import styles from '../styles/Home.module.sass'

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>AMWL</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <BlogPost title="erster eiintrag" blogPostText="ololoolo" author="Samuel" comments="0" />

            <footer className="flex items-center justify-center w-full h-24 border-t">

            </footer>
        </div>
    )
}
