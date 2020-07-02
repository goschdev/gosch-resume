import styled, { css } from 'styled-components';

import { COLORS } from '../../utils/colors';
import { print, mobile, notPrint } from '../../styles/Medias';
import { pxToRem } from '../../utils/pxToRem';

export const Container = styled.header`
  display: grid;
  width: 100%;
  grid-column-gap: ${pxToRem(5)};
  grid-template-columns: auto 1fr;

  ${notPrint(
    mobile(css`
      grid-template-columns: 1fr;
    `),
  )}
`;

export const Photo = styled.img`
  max-width: ${pxToRem(110)};

  ${notPrint(
    mobile(css`
      display: none;
    `),
  )}

  ${print(css`
    max-width: inherit;
  `)}
`;

export const Content = styled.div`
  background-color: ${COLORS.primary};
  padding: ${pxToRem(25)} ${pxToRem(20)};
  display: grid;
  align-items: center;
  width: 100%;
`;
