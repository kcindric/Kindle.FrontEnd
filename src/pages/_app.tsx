import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';

import theme from '../styles/theme';
import { GlobalStyles } from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
