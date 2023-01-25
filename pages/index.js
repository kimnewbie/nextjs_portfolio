import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Youjin's Next World</title>
        <meta name="description" content="킴뉴진의 NEXT 세계" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
