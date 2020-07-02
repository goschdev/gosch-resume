import styled, { css } from 'styled-components';

import { COLORS } from '../../utils/colors';
import { print } from '../../styles/Medias';
import { pxToRem } from '../../utils/pxToRem';

export const Container = styled.header`
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
  grid-column-gap: ${pxToRem(5)};
`;

export const Photo = styled.img`
  max-width: ${pxToRem(110)};

  /* ${print(css`
    max-width: inherit;
  `)} */
`;

export const Content = styled.div`
  background-color: ${COLORS.primary};
  padding: ${pxToRem(25)} ${pxToRem(20)};
  display: grid;
  align-items: center;
  width: 100%;
`;
