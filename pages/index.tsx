import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Layout } from '../components';

type THome = {
  user: string;
};

const Home: NextPage<THome> = ({ user }): JSX.Element => {
  const [firstName] = user.split(' ');
  return (
    <>
      <Layout {...{ user }}>
        <div className={styles.container}>
          <main className={styles.main}>
            <section className={styles.welcome}>
              <h1>Hello I am {firstName}</h1>
              <h2>Welcome to my portfolio!</h2>
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
      user: process.env.user,
    },
  };
}

export default Home;
