import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      html {
        box-sizing: border-box;
        -ms-overflow-style: -ms-autohiding-scrollbar;
      }

      body {
        -ms-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }

      html,
      body {
        height: 100%;
      }

      svg {
        vertical-align: middle;
      }

      #__next {
        height: 100%;
      }
    `}
  />
);
