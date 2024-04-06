import '../styles/globals.css';
import { memo } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppWrapper } from '../context';
import { Providers } from '../provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Head>
        <meta name='description' content='Gaurav Khurana Actor Ui Developer UI Architect portfolio' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='format-detection' content='telephone=no' />
        <meta charSet='UTF-8' />
        <meta property='og:title' content='Gaurav Khurana Actor Portfolio' />
        <meta property='og:image' content='/images/gauravkhurana-thumbnail.jpg' />
        <meta property='og:image:alt' content='Gaurav Khurana' />
        <meta property='og:description' content='Gaurav Khurana Actor Ui Developer UI Architect portfolio' />
        <meta property='og:url' content='https://gauravkhurana.ca' />
        <meta property='og:image:width' content='1125' />
        <meta property='og:image:height' content='625' />
        <meta property='og:type' content='website' />
        <link rel='shortcut icon' href='/images/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
      </Head>

      <Providers>
        <Component {...pageProps} />
      </Providers>
    </AppWrapper>
  );
}

export default memo(MyApp);
