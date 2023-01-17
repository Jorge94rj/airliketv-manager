import Head from 'next/head';
import Card from '../components/Card';
import Settings from '../components/Settings';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Airlike manager</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <strong>
          In order to start creating content you need to create a database
        </strong>
        
        <Settings/>

      </div>
    </>
  )
}
