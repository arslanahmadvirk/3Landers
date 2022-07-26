import '../styles/globals.css'
import "../styles/home.css";
import Head from 'next/head';
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>3 Landers NFT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
  );
}

export default MyApp