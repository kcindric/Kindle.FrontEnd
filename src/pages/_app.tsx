import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import { SWRConfig } from 'swr';
import { fetcher } from '../libs/fetcher';

import theme from '../styles/theme';
import { GlobalStyles } from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
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
    </ThemeProvider>
  );
}
