import { memo } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Layout } from '../components';
import { getAge } from '../utils';

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
              <p className='leading-6 my-4'>
                I am a software programmer (UI Developer/ UI Architect, AS400 Developer, RPG, RPGILE, CLLE) & A Theater
                Actor based in Nova Scotia (Canada). Canadian Citizen authorized to work in India as well.
              </p>
              <p className='leading-6 my-4'>
                As a programmer, I predominantly work for US clients remotely from Canada and sucessfully delivered web
                application to clients like <strong>Phillips Connect</strong>,<strong>Electronic Arts</strong>,
                <strong>Paxia Inc</strong>,<strong>United Airlines</strong>,<strong>Copart Inc</strong>{' '}
              </p>
              <p className='leading-6 '>
                I am trained in acting as well, attended theater schools (Neptune Theater School & Shakespear by the
                sea) in Halifax, Nova Scotia , Canada. A full time actor when not hitched any Computer programing
                contract.
                <dl>
                  <dt>Height</dt>
                  <dd>- 5 feet 5 inches</dd>
                  <dt>Eye colour</dt>
                  <dd>- Brown</dd>
                  <dt>Weight</dt>
                  <dd>- 130lbs</dd>
                  <dt>Waist</dt>
                  <dd>- 29</dd>
                  <dt>Age</dt>
                  <dd>- {getAge('1984-03-17')}</dd>
                  <dt>Others</dt>
                  <dd>- Trained in Taekwondo, Yoga, Strength training, Love playing tennis, Avid animal lover</dd>
                </dl>
              </p>
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
