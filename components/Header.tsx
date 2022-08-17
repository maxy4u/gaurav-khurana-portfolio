import { memo, FC } from 'react';
import Head from 'next/head';
import styles from '../styles/Header.module.css';
import { Tnavigation, TPath } from '../constants';
import TopNav from './TopNav';
import { Logo } from '../icons';

export type THeader = {
  navigation: Tnavigation<TPath>;
  user: string;
};

const Header: FC<THeader> = ({ navigation, user }) => {
  return (
    <header className={styles.header}>
      <Head>
        <title>{`${user} Portfolio`}</title>
      </Head>
      <section>
        <aside className={styles.logo}>
          <a href="/" title="Gaurav Khurana portfolio">
            <Logo />
          </a>
          <h1>{user}</h1>
        </aside>
        <TopNav {...{ navigation, user }} />
      </section>
    </header>
  );
};
export default memo(Header);
