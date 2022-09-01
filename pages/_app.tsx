import '../styles/globals.css';
import { memo } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import client from '../client/apollo-client';
import { ApolloProvider } from '@apollo/client';
import { AppWrapper } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Head>
        <meta name='description' content='Gaurav Khurana Ui Developer UI Architect portfolio nextjs app' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='UTF-8' />
        <meta property='og:title' content='Gaurav Khurana Portfolio' />
        <meta property='og:image' content='/images/gauravkhurana-thumbnail' />
        <meta property='og:description' content='Gaurav Khurana Ui Developer UI Architect portfolio nextjs app' />
        <meta property='og:url' content='https://gauravkhurana.ca' />
        <meta property='og:image:width' content='1125' />
        <meta property='og:image:height' content='625' />
        <meta property='og:type' content='website' />
        <link rel='shortcut icon' href='/images/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
      </Head>

      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AppWrapper>
  );
}

export default memo(MyApp);
