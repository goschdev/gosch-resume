import styled, { css } from 'styled-components';

import { BodyText } from '../../../styles/Texts';
import { tabletDesktop } from '../../../styles/Medias';

export const Container = styled.ul`
  display: grid;
  grid-row-gap: 5px;
  list-style-type: none;

  ${tabletDesktop(css`
    grid-template-columns: 1fr 1fr 1fr;
  `)}
`;

export const Item = styled(BodyText)``;
