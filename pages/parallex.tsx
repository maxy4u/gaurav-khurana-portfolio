import { memo, FC, useRef, useEffect } from 'react';
import { Layout } from '../components';
import styles from '../styles/parallex.module.css';

export type TParallax = {
  user: string;
};

const Parallax: FC<TParallax> = ({ user }) => {
  const section1Ref = useRef<HTMLSelectElement>(null);
  const section2Ref = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    // const onScroll = ()=>{
    //     const scroll = window.scrollY;
    //     if( (scroll>10) && (scroll< 400) ){
    //         section1Ref?.current && section1Ref.current.classList.add(styles['scale']);
    //         section2Ref?.current && section2Ref.current.classList.add(styles['scale']);
    //     }else{
    //         section1Ref?.current && section1Ref.current.classList.remove(styles['scale']);
    //         section2Ref?.current && section2Ref.current.classList.remove(styles['scale']);
    //     }
    // }
    // window.addEventListener('scroll', onScroll) ;
    // return ()=>{
    //     window.removeEventListener('scroll', onScroll);
    // }
  }, [section1Ref, section2Ref]);
  return (
    <Layout {...{ user }}>
      <main className={styles.parallexCont}>
        <section ref={section1Ref} className={`${styles.section1}`}></section>
        <section className={styles.text1}>
          Some text This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to
          remove the scrolling effect This div is just here to enable scrolling. Tip: Try to remove the
          background-attachment property to remove the scrolling effect This div is just here to enable scrolling. Tip:
          Try to remove the background-attachment property to remove the scrolling effect This div is just here to
          enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect This
          div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the
          scrolling effect This div is just here to enable scrolling. Tip: Try to remove the background-attachment
          property to remove the scrolling effect This div is just here to enable scrolling. Tip: Try to remove the
          background-attachment property to remove the scrolling effect This div is just here to enable scrolling. Tip:
          Try to remove the background-attachment property to remove the scrolling effect
        </section>
        <section ref={section2Ref} className={`${styles.section1}`}></section>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      user: process.env.user
    }
  };
}

export default memo(Parallax);
