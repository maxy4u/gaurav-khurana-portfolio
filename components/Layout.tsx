import { memo, FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { navigation } from '../constants';
import styles from '../styles/Layout.module.css';

export type TLayout = {
  children: ReactNode;
  user: string;
};

const Layout: FC<TLayout> = ({ user, children }): JSX.Element => (
  <section className={styles.layout}>
    <Header {...{ navigation, user }} />
    {children}
    <Footer />
  </section>
);

export default memo(Layout);
