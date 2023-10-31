import { memo, FC, useCallback, ChangeEvent } from 'react';
import Head from 'next/head';
import styles from '../styles/Header.module.css';
import { Tnavigation, TPath } from '../constants';
import TopNav from './TopNav';
import { Logo } from '../icons';
import { Switch } from '../components';
import { useAppContext } from '../context';
import { ActionTypes } from '../constants';

export type THeader = {
  navigation: Tnavigation<TPath>;
  user?: string;
  title?: string;
};

const Header: FC<THeader> = ({ navigation, user, title }) => {
  const {
    state: { theme },
    dispatch
  } = useAppContext();
  const onChange = useCallback(({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    const theme = checked ? 'dark' : 'light';
    dispatch({ type: ActionTypes.CHANGE_THEME, theme });
  }, []);
  const [bgColor, iconColor, textColor] =
    theme === 'dark' ? ['black', '#E5E7EB', '#E5E7EB'] : ['#E5E7EB', 'black', 'black'];

  return (
    <header className={styles.header}>
      <Head>
        <title>{`${user} UI Developer - Ui Architect - Actor | ${title}`}</title>
      </Head>
      <section>
        <aside className={styles.logo}>
          <a href='/' title='Gaurav Khurana UI Developer - Ui Architect - Actor Portfolio'>
            <Logo {...{ bgColor, iconColor, textColor }} />
          </a>
          <h1>{user}</h1>
        </aside>
        <Switch id='theme' name='mode' onChange={onChange} theme={theme} />
        <TopNav {...{ navigation, user }} />
      </section>
    </header>
  );
};
export default memo(Header);
