import { memo, FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { navigation } from '../constants';
import { useAppContext } from '../context';
import styles from '../styles/Layout.module.css';

export type TLayout = {
  children: ReactNode;
  user: string;
};

const Layout: FC<TLayout> = ({ user, children }): JSX.Element => {
  const [{ theme }] = useAppContext();
  return (
    <section className={`${styles.layout} ${styles[theme]}`}>
      <Header {...{ navigation, user }} />
      {children}
      <Footer />
    </section>
  );
};

export default memo(Layout);
