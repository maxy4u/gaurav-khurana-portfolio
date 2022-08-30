import { memo, FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { navigation } from '../constants';
import { useAppContext } from '../context';
import styles from '../styles/Layout.module.css';

export type TLayout = {
  children: ReactNode;
  user?: string;
  className?: string;
  title?: string;
};

const Layout: FC<TLayout> = ({ user, children, className = '', title = 'Portfolio' }): JSX.Element => {
  const {
    state: { theme }
  } = useAppContext();
  return (
    <section className={`${styles.layout} ${styles[theme]} ${className}`}>
      <Header {...{ navigation, user, title }} />
      {children}
      <Footer />
    </section>
  );
};

export default memo(Layout);
