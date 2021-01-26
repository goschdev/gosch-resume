import styled, { css } from 'styled-components';

import { BodyText } from '../../../visual/styles/Texts';
import { tabletDesktop } from '../../../visual/styles/Medias';
import { pxToRem } from '../../../logic/pxToRem';

export const Container = styled.ul`
  display: grid;
  grid-row-gap: ${pxToRem(5)};
  list-style-type: none;
  grid-template-columns: 1fr 1fr;

  ${tabletDesktop(css`
    grid-template-columns: 1fr 1fr 1fr;
  `)}
`;

export const Item = styled(BodyText)``;
