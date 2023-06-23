import { memo, FC } from 'react';
import Layout from './Layout';
import styles from '../styles/Home.module.css';
import { NLoading } from '../icons';

export type TLoader = {
  user: string;
};
const bgColor = '#FFFFFF';

const Loader: FC<TLoader> = ({ user }) => {
  return (
    <Layout {...{ user }}>
      <section className={`${styles.container}`}>
        <NLoading bgColor={bgColor as string} />
      </section>
    </Layout>
  );
};

export default memo(Loader);
