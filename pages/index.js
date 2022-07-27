import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>3Landers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mtsection">
      <Banner/>
      </main>

      {/* <footer className={styles.footer}>
        <div
        >
          Powered by Dune Analytics
          <div className='mt-2 text-center'>
          <Image src="/dune.png" alt="Vercel Logo" width={40} height={40} />
          </div>
        </div>
      </footer> */}
    </div>
  )
}
