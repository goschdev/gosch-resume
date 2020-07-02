import styled, { css } from 'styled-components';

import { BodyText } from '../../../styles/Texts';
import { tabletDesktop } from '../../../styles/Medias';
import { pxToRem } from '../../../utils/pxToRem';

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
