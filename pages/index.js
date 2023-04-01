import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>OBIFY CONSULTING APPS</title>
        <meta name="description" content="OBIFY CONSULTING APPS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>OBIFY CONSULTING</h2><br />
        <a href='https://www.obifyconsulting.com'>obifyconsulting apps</a>
        <a style={{ display: 'none' }} href='https://github.com/obify/obify-next-apps.git'>obify-next-apps.git</a><br />
      </main>
    </>
  )
}
