import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import theme from '@chakra-ui/theme';
import { SWRConfig } from 'swr';
import Head from 'next/head';

import { fetcher } from '../libs/fetcher';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <CSSReset />
      <SWRConfig
        value={{
          fetcher,
          onError: (err) => {
            console.error(err);
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  );
}
