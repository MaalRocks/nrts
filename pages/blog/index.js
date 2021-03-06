import Head from 'next/head'
import Navbar from '../../components/Navbar'
import BlogPost from '../../components/BlogPost'
import OtherBlogPosts from '../../components/OtherBlogPosts'

export default function Blog() {
  return (
    <div className="">
      <Head>
        <title>AMWL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <BlogPost title="erster eiintrag" blogPostText="ololoolo" author="Samuel" comments="0" />

      <OtherBlogPosts />

      <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer>
    </div>
  )
}
