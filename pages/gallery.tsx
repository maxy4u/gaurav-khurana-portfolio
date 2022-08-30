import { memo, FC } from 'react';
import { Layout, Carousel, ClientOnly } from '../components';
import stylesHome from '../styles/Home.module.css';
import { cards } from '../constants';

export type TGallery = {
  user: string;
};

const Gallery: FC<TGallery> = ({ user }) => {
  return (
    <Layout {...{ user, title: 'Gallery' }}>
      <section className={`${stylesHome.container}`}>
        <ClientOnly>
          <Carousel {...{ cards }} />
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
