import { memo, FC } from "react";
import Head from 'next/head';
import styles from '../styles/Header.module.css';
import { Tnavigation } from "../constants";
import TopNav from "./TopNav";
import Image from "next/image";
import Logo from "./Logo";

export type THeaderProps = {
    navigation: Tnavigation,
    user: string
}

const Header: FC<THeaderProps> = ({ navigation, user })=>{
    return (
    <header className={styles.header}>
    <Head>
        <title>{`${user} Portfolio`}</title>
    </Head>
    <section>
        <aside className={styles.logo}>
            <Logo />
            {/* <Image className="logo" src="/UNO-1-8.png" width="100px" height="100px"/> */}
            <h1>{user}</h1>
        </aside>
        <TopNav {...{navigation, user}}/>
    </section>

    </header>)
}
export default memo(Header) ;