import MyApp from './_app.js'
import Head from "next/head";



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
