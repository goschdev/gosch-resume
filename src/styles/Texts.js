import styled, { css } from 'styled-components';

import { COLORS } from '../utils/colors';
import { pxToRem } from '../utils/pxToRem';
import { tabletDesktop, mobile } from './Medias';

export const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  color: ${COLORS.text};

  ${tabletDesktop(css`
    font-size: ${pxToRem(32)};
    line-height: ${pxToRem(37)};
  `)}

  ${mobile(css`
    font-size: ${pxToRem(28)};
    line-height: ${pxToRem(33)};
  `)}
`;

export const Subtitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  color: ${COLORS.text};

  ${tabletDesktop(css`
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(21)};
  `)}

  ${mobile(css`
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(19)};
  `)}
`;

export const SectionTitle = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(14)};
  text-transform: uppercase;
  color: ${COLORS.background};
  background-color: ${COLORS.text};
  padding: ${pxToRem(5)} ${pxToRem(10)};
  display: table;
  margin-bottom: ${pxToRem(10)};
`;

export const BodyText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${pxToRem(12)};
  line-height: ${pxToRem(16)};
  color: ${COLORS.text};
`;
