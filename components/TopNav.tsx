import { memo, FC, ChangeEvent, useCallback } from 'react';
import { Tnavigation, TPath } from '../constants';
import styles from '../styles/TopNav.module.css';
import { useRouter } from 'next/router';
import { Switch } from '../components';
import { ActionTypes } from '../constants';
import { useAppContext } from '../context';
import Link from 'next/link';

export type TTopNav = {
  navigation: Tnavigation<TPath>;
};

const TopNav: FC<TTopNav> = ({ navigation }) => {
  const { pathname } = useRouter();
  const {
    state: { theme },
    dispatch
  } = useAppContext();
  const onChange = useCallback(({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    const theme = checked ? 'dark' : 'light';
    dispatch({ type: ActionTypes.CHANGE_THEME, theme });
  }, []);

  return (
    <ul className={styles.navigation}>
      <Switch id='theme' name='mode' onChange={onChange} theme={theme} />
      {Object.keys(navigation).map((key, ind) => (
        <li
          key={`nav-item-${ind}`}
          className={`${(pathname === navigation[key as keyof typeof navigation]['path'] && styles['active']) || ''}`}
        >
          <Link href={navigation[key as keyof typeof navigation].path}>
            {navigation[key as keyof typeof navigation].label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(TopNav);
