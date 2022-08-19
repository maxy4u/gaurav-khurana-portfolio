import { memo, FC } from 'react';
import { Tnavigation, TPath } from '../constants';
import styles from '../styles/TopNav.module.css';
import { NextRouter, useRouter } from 'next/router';

export type TTopNav = {
  navigation: Tnavigation<TPath>;
};

const TopNav: FC<TTopNav> = ({ navigation }) => {
  const { pathname } = useRouter();

  return (
    <ul className={styles.navigation}>
      {Object.keys(navigation).map((key, ind) => (
        <li
          key={`nav-item-${ind}`}
          className={`${
            (pathname === navigation[key as keyof typeof navigation]['path'] &&
              styles['active']) ||
            ''
          }`}
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
