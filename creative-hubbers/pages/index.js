import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import MyApp from './_app.js'

export default function Home() {
  return (
    <>
       <Head>
        <title>CREATIVE HUBBERS</title>
        <meta name="description" content="Creating masterpiece " />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      {MyApp}
    </>
  );
}
