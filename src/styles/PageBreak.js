import styled, { css } from 'styled-components';

import { print } from '../styles/Medias';
import { COLORS } from '../utils/colors';

export const PageBreak = styled.div`
  ${print(css`
    page-break-before: always;

    &:after {
      content: '';
      width: 100%;
      height: 15px;
      display: block;
      background-color: ${COLORS.primary};
    }
  `)}
`;
