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
        <a target='_blank'
          href='https://verdant-zabaione-915e20.netlify.app/'>
          HTML & CSS Practicals - 2
        </a>
        <a style={{ display: 'none' }} href='https://github.com/ranjanpandeysbp/bootstrap5-react-crud-api-auth-ob'>bootstrap5-react-crud-api-auth-ob</a><br />
        <a target='_blank'
          href='https://bootstrap5-react-crud-api-auth-ob.vercel.app/'>
          Real Estate React App With Redux & Context API
        </a>
        <a style={{ display: 'none' }} href='https://github.com/obify/react-redux-mastery'>react-redux-mastery</a><br />
        <a target='_blank'
          href='https://react-redux-mastery.vercel.app/'>
          Product Redux App
        </a>
        <a style={{ display: 'none' }} href='https://github.com/obify/product-mern-app'>product-mern-app</a><br />

        <a target='_blank'
          href='https://product-mern-app-fe.vercel.app/'>
          Product MERN App
        </a>
        <a style={{ display: 'none' }} href='https://github.com/obify/product-mern-app'>product-mern-app</a><br />

        <a target='_blank'
          href='https://obifyconsulting.vercel.app/api/products'>
          Products Fake API
        </a>
      </main>
    </>
  )
}
