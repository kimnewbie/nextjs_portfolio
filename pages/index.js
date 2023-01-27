import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './components/layout'

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>Welcome to Youjin's Next World</title>
        <meta name="description" content="킴뉴진의 NEXT 세계" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>웰컴 투 유지니 월드</h1>

    </Layout>
  )
}
