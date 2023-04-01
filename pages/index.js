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
        <a target='_blank' href='https://stellular-duckanoo-b92d72.netlify.app/'>HTML & CSS Practicals - 1</a>
        <a style={{ display: 'none' }} href='https://github.com/ranjanpandeysbp/training-fe'>training-fe</a><br />
        <a target='_blank' href='https://verdant-zabaione-915e20.netlify.app/'>HTML & CSS Practicals - 2</a>
        <a style={{ display: 'none' }} href='https://github.com/mahesh1404/Frontend'>Frontend</a><br />
      </main>
    </>
  )
}
