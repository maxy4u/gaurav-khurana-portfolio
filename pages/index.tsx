import type { NextPage } from 'next';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import {navigation } from '../constants';
import Footer from "../components/Footer";


type THome = {
  user: string;
}

const Home: NextPage<THome> = ({user}) => {
  const [firstName,] = user.split(' ');
  return (
  <>
    <Header {...{ navigation, user } } />
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.welcome}>
          <h1>Hello I am {firstName}</h1>
          <h2>Welcome to my portfolio!</h2>
        </section>
      </main>
    </div>
    <Footer />
    </>
  )
}

export async function getStaticProps(){
  return {
    props : {
      user: process.env.user,
    }
  }
}

export default Home
