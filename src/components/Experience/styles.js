import styled, { css } from 'styled-components';

import { COLORS } from '../../utils/colors';
import { BodyText } from '../../styles/Texts';
import { pxToRem } from '../../utils/pxToRem';
import { notPrint, mobile } from '../../styles/Medias';

export const Container = styled.article`
  &:not(:last-child) {
    &:after {
      content: '';
      display: block;
      width: ${pxToRem(45)};
      height: ${pxToRem(7)};
      background-color: ${COLORS.primary};
      margin-top: ${pxToRem(10)};
    }
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: ${pxToRem(5)};

  ${notPrint(
    mobile(css`
      grid-template-columns: auto;
      margin-bottom: ${pxToRem(5)};
    `),
  )}
`;

export const CompanyName = styled(BodyText)`
  font-weight: bold;
`;

export const CompanyDescription = styled(BodyText)``;

export const Main = styled.main``;

export const Responsibilities = styled(BodyText)``;
