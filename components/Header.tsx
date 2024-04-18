import styles from '../styles/Header.module.css';
import { Tnavigation, TPath } from '../constants';
import TopNav from './TopNav';
import { Switch, Logo } from '../components';

import Link from 'next/link';

export type THeader = {
  navigation: Tnavigation<TPath>;
  user?: string;
};

export default function Header({ navigation, user }: THeader) {
  return (
    <header className={styles.header}>
      <section>
        <aside className={styles.logo}>
          <Link href='/' title='Gaurav Khurana UI Developer - Ui Architect - Actor Portfolio'>
            <Logo />
          </Link>
          <h1>{user}</h1>
        </aside>
        <Switch id='theme' name='mode' />
        <TopNav {...{ navigation, user }} />
      </section>
    </header>
  );
}
