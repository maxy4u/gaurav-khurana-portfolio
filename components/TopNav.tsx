import { memo, FC, ChangeEvent, useCallback } from 'react';
import { Tnavigation, TPath } from '../constants';
import styles from '../styles/TopNav.module.css';
import { useRouter } from 'next/router';
import { Switch } from '../components';

export type TTopNav = {
  navigation: Tnavigation<TPath>;
};

const TopNav: FC<TTopNav> = ({ navigation }) => {
  const { pathname } = useRouter();
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
  }, []);

  return (
    <ul className={styles.navigation}>
      <Switch id='theme' name='mode' onChange={onChange} />
      {Object.keys(navigation).map((key, ind) => (
        <li
          key={`nav-item-${ind}`}
          className={`${(pathname === navigation[key as keyof typeof navigation]['path'] && styles['active']) || ''}`}
        >
          <a href={navigation[key as keyof typeof navigation].path}>
            {navigation[key as keyof typeof navigation].label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default memo(TopNav);
