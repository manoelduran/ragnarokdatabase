import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | MvpTimer</title>
      </Head>
      <main className={styles.Container}>
        <section className={styles.Content}>
          <span>👏 Hey, welcome to the MvpTimer!</span>
          <h1>Caught all <span>MVP</span> you want with us! </h1>
          <p>Here at MVPTimer you can choose a mvp and add a timer for when it is reborn. Find out more about mvp's with our database! </p>
        </section>
        <img src="/devil.svg" alt="All Mvp" />
      </main>
    </>
  );
}
