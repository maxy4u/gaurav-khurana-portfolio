'use client';
import { memo, FC, useCallback, useRef, MouseEventHandler, MouseEvent } from 'react';
import { Tnavigation, TPath } from '../constants';
import styles from '../styles/TopNav.module.css';
// import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export type TTopNav = {
  navigation: Tnavigation<TPath>;
};

const TopNav: FC<TTopNav> = ({ navigation }) => {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const onClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const { target } = event;
      if (navRef?.current) {
        navRef.current.classList.toggle(`${styles.open}`);
        navRef.current.childNodes.forEach((child) => {
          if (child.nodeName === 'LI') {
            (child as HTMLLIElement).classList.toggle(`${styles.fade}`);
          }
        });
      }
      (target as HTMLDivElement).classList.toggle(`${styles.fade}`);
      hamburgerRef?.current && hamburgerRef.current.classList.toggle(`${styles.toggle}`);
    },
    [navRef, hamburgerRef]
  );

  return (
    <nav className={styles.navCont}>
      <ul className={styles.navigation} ref={navRef}>
        {Object.keys(navigation).map((key, ind) => (
          <li
            key={`nav-item-${ind}`}
            className={`${
              (pathname === navigation[key as keyof typeof navigation]['path'] && styles['active']) || ''
            }`}>
            <Link
              href={navigation[key as keyof typeof navigation].path}
              onClick={() => hamburgerRef?.current?.classList.remove('open')}>
              {navigation[key as keyof typeof navigation].label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.hamburger} onClick={onClick} ref={hamburgerRef}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </nav>
  );
};

export default memo(TopNav);
