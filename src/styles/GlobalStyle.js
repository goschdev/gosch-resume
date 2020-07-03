import { createGlobalStyle, css } from 'styled-components';

import { RobotoCondensed } from './Fonts';
import { COLORS } from '../utils/colors';
import { print } from './Medias';
import { pxToRem } from '../utils/pxToRem';

export const GlobalStyle = createGlobalStyle`
  ${RobotoCondensed}

  body, html {
    min-height: 100vh;
    background-color: ${COLORS.background};

    ${print(css`
      min-height: 100;
    `)}
  }

  body {
    padding-bottom: ${pxToRem(20)};
  }

  * {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
