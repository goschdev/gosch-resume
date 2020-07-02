import { css } from 'styled-components';

import { RESOLUTIONS } from '../utils/resolutions';

export const mobile = (content) => css`
  @media print, (max-width: ${RESOLUTIONS.mobile.max}) {
    ${content}
  }
`;

export const mobileTablet = (content) => css`
  @media print, (max-width: ${RESOLUTIONS.tablet.max}) {
    ${content}
  }
`;

export const tablet = (content) => css`
  @media print,
    (min-width: ${RESOLUTIONS.tablet.min}) and (max-width: ${RESOLUTIONS.tablet
      .max}) {
    ${content}
  }
`;

export const tabletDesktop = (content) => css`
  @media print, (min-width: ${RESOLUTIONS.tablet.min}) {
    ${content}
  }
`;

export const desktop = (content) => css`
  @media print, (min-width: ${RESOLUTIONS.desktop.min}) {
    ${content}
  }
`;

export const print = (content) => css`
  @media print {
    ${content}
  }
`;

export const notPrint = (content) => css`
  @media not print {
    ${content}
  }
`;
