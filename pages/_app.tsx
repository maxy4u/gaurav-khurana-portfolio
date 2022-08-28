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
        <meta name='robots' content='all' />
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
