import { memo } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Layout } from '../components';

type THome = {
  user: string;
};

const Home: NextPage<THome> = ({ user }: THome): JSX.Element => {
  const [firstName] = user.split(' ');

  return (
    <>
      <Layout {...{ user, title: 'Home' }}>
        <div className={styles.container}>
          <main className={styles.main}>
            <section className={styles.welcome}>
              <h1>Hello I am {firstName}</h1>
              <h2>Welcome to my portfolio!</h2>
              <p>I am a programmer (UI Developer/ UI Architect) & A Theater Actor</p>
            </section>
          </main>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      user: process.env.user
    }
  };
}

export default memo(Home);
