import styled, { css } from 'styled-components';

import { print } from '../styles/Medias';
import { COLORS } from '../colors';
import { pxToRem } from '../../logic/pxToRem';

export const PageBreak = styled.div`
  ${print(css`
    page-break-before: always;

    &:after {
      content: '';
      width: 100%;
      height: ${pxToRem(15)};
      display: block;
      background-color: ${COLORS.primary};
    }
  `)}
`;
