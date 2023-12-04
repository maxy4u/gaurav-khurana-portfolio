import { FC, memo } from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export type TFooter = {
  linkedinUrl?: string;
  githubUrl?: string;
};

const Footer: FC<TFooter> = ({}) => {
  return (
    <footer className={styles.footer}>
      <a href='tel:+1-902-440-1591' target='_blank' rel='noopener noreferrer'>
        <span className={styles.logo}>
          <Image src='/phone.svg' alt='Gaurav Khurana Instagram Profile' width={35} height={36} title='instagram' />
        </span>
      </a>
      <a href='mailto:khurana.g@hotmail.com' target='_blank' rel='noopener noreferrer'>
        <span className={styles.logo}>
          <Image src='/mail.svg' alt='Gaurav Khurana email' width={35} height={36} title='email' />
        </span>
      </a>
      <a href='https://www.linkedin.com/in/gaurav-khurana-6ba92b15/' target='_blank' rel='noopener noreferrer'>
        <span className={styles.logo}>
          <Image src='/linkedin.svg' alt='Gaurav Khurana LinkedIn Profile' width={35} height={36} title='linkedin' />
        </span>
      </a>
      <a href='https://github.com/maxy4u' target='_blank' rel='noopener noreferrer'>
        <span className={styles.logo}>
          <Image src='/github.svg' alt='Gaurav Khurana GitHub Profile' width={35} height={36} title='github' />
        </span>
      </a>
      <a href='https://www.instagram.com/unomyluv' target='_blank' rel='noopener noreferrer'>
        <span className={styles.logo}>
          <Image src='/instagram.svg' alt='Gaurav Khurana Instagram Profile' width={35} height={36} title='instagram' />
        </span>
      </a>
    </footer>
  );
};

export default memo(Footer);
