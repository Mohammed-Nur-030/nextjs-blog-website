import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <style jsx>
      {
        ` 
        .HomeImg{
          border-radius:10px;
        }
        `
      }
    </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Hunting Coder" />
        <meta name="keywords" content="keywords,nextjs,coder,coders,hunting coders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='/sc.js' strategy='lazyOnload'></Script> */}


      <main className={`${styles.main} ${inter.className}`}>

   

        <div className={styles.header}>
          <div className={styles.heading}>
            <p>
              Welcome to  <span className='mySpan '>Hunting Coder</span>&nbsp;
            </p>
        
          </div>
          <div className={`${styles.description}`}>
            A blog for Hunting Coders by a Hunting Coder
          </div>
          <div className={`${styles.imgWrap}`}>
          {/* <Image 
            className={`${styles.HomeImg}`}
             src="/homeImg.webp"
             width={500}
             height={350}
             alt="Coding Wrokspace"
            /> */}
            <img src="/homeImg.webp" alt="Coding Wrokspace" width={500} height={350} className={`${styles.HomeImg}`}/>
          </div>

        </div>


 

        {/* <div className={`${styles.blogs}`}>
          <h2>Popular Blogs</h2>
          <div className={`${styles.blogItem}`}>
            <h3>How to Learn Js In 2024?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam, perspiciatis voluptatum ipsa
            </p>
          </div>
          <div className={`${styles.blogItem}`}>
            <h3>How to Learn Js In 2024?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam, perspiciatis voluptatum ipsa
            </p>
          </div>
          <div className={`${styles.blogItem}`}>
            <h3>How to Learn Js In 2024?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam, perspiciatis voluptatum ipsa
            </p>
          </div>
        </div> */}
      </main>
    </>
  )
}
