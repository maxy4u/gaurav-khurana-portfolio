import { FC, memo } from "react";
import Image from 'next/image';
import styles from "../styles/Footer.module.css";

const Footer: FC<{}> = ()=>{
    return (
    <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/gaurav-khurana-6ba92b15/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/linkedin.svg" alt="Gaurav KhuranaLinkedIn Profile" width={35} height={36} />
          </span>
        </a>
      </footer>)
};

export default Footer;