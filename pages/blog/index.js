import Head from 'next/head'
import BlogPost from '../../components/BlogPost'
import Navbar from '../../components/Navbar'

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
