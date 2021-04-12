import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider theme={{}}>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default CustomApp;
