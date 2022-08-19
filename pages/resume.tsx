import { memo, FC } from 'react';
import { Layout } from '../components';
import styles from '../styles/Home.module.css';

export type TResume = {
  user: string;
};

const Resume: FC<TResume> = ({ user }) => {
  return (
    <Layout {...{ user }}>
      <div className={styles.container}>Resume Page coming soon</div>
    </Layout>
  );
};

export function getStaticProps() {
  const user = process.env.user;

  return {
    props: {
      user
    }
  };
}

export default memo(Resume);
