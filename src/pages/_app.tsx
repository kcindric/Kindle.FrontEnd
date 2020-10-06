import { AppProps } from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import { SWRConfig } from 'swr';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import { fetcher } from '../libs/fetcher';
import { theme } from '../themes';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Head>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Head>
        <CSSReset />
        <SWRConfig
          value={{
            fetcher,
            // onError: (err) => {
            //   console.error(err);
            // },
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ChakraProvider>
    </RecoilRoot>
  );
}
