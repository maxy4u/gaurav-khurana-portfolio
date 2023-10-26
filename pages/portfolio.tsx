import { memo, FC } from 'react';
import Image from 'next/image';
import { ClientOnly, Layout } from '../components';
import stylesHome from '../styles/Home.module.css';
import { portfolio } from '../constants';

export type Portfolio = {
  user: string;
};

const Gallery: FC<Portfolio> = ({ user }) => {
  return (
    <Layout {...{ user, title: 'Gaurav Khurana Actor Portfolio' }}>
      <section className={`${stylesHome.container}`}>
        <ClientOnly>
          {portfolio.map((src, ind) => {
            return (
              <div key={`portfolio-img-${ind}`} className='portfolio-image'>
                <Image src={src} alt='Gaurav Khurana Actor' loading='lazy' placeholder='blur' className='image' />
              </div>
            );
          })}
        </ClientOnly>
      </section>
    </Layout>
  );
};

export function getStaticProps() {
  const user = process.env.user;

  return {
    props: {
      user
    }
  };
}

export default memo(Gallery);
