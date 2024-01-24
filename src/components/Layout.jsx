import styles from "@/styles/Layout.module.css"
import Head from 'next/head'
import Header from "./Header"

export default function Layout ({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {`${title ? title + " • " : ""} Next Demo App`}
        </title>
        <meta name="description" content="Next Demo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}