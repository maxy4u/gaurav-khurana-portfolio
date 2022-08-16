import { memo, FC } from 'react';
import { Layout } from '../components';
import styles from '../styles/Home.module.css';

export type TPortfolio = {
  user: string;
};

const Portfolio: FC<TPortfolio> = ({ user }) => {
  return (
    <Layout {...{ user }}>
      <div className={styles.container}>Portfolio Page coming soon</div>
    </Layout>
  );
};

export function getStaticProps() {
  const user = process.env.user;

  return {
    props: {
      user,
    },
  };
}

export default memo(Portfolio);
