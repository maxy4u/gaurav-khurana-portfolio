import '../styles/globals.css';
import { AppWrapper } from '../context';
import { Providers } from '../provider';
import { Metadata } from 'next';
import { openGraphImage } from './shared-metadata';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { navigation } from '../constants';
import styles from '../styles/Layout.module.css';
import { cookies } from 'next/headers';

const host =
  process.env.NODE_ENV == 'development' ? process.env.NEXT_PUBLIC_DEV_HOST_URL : process.env.NEXT_PUBLIC_PROD_HOST_URL;

export const metadata: Metadata = {
  metadataBase: new URL(host as string),
  title: 'Gaurav Khurana Actor & Software Developer portfolio',
  description: 'Gaurav Khurana Actor UI Developer, UI Architect, AS400 Developer, Fullstack Developer,  portfolio',
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    other: [
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        url: '/images/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/images/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/images/favicon-16x16.png'
      }
    ]
  },
  openGraph: {
    ...openGraphImage
  },
  formatDetection: {
    telephone: true,
    email: true
  }
  //viewport: "width=device-width, initial-scale=1.0'"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { value: theme } = cookies().get('theme') || { value: 'dark' };
  console.log('layout theme======>', theme);
  return (
    <html lang='en'>
      <body>
        <AppWrapper>
          <Providers>
            <section className={`${styles.layout} ${styles[theme as string]}`}>
              <Header navigation={navigation} />
              {children}
              <Footer />
            </section>
          </Providers>
        </AppWrapper>
      </body>
    </html>
  );
}
