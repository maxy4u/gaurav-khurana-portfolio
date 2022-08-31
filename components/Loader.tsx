import { memo, FC } from 'react';
import Layout from './Layout';
import styles from '../styles/Home.module.css';
import { Loading } from '../icons';
import { useAppContext } from '../context';
import { getCssVar } from '../utils';

export type TLoader = {
  user: string;
};

const Loader: FC<TLoader> = ({ user }) => {
  const {
    state: { theme }
  } = useAppContext();
  const bgColor = getCssVar(`--${theme}`);
  return (
    <Layout {...{ user }}>
      <section className={`${styles.container}`}>
        <Loading bgColor={bgColor as string} />
      </section>
    </Layout>
  );
};

export default memo(Loader);
