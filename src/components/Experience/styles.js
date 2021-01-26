import styled, { css } from 'styled-components';

import { COLORS } from '../../visual/colors';
import { BodyText } from '../../visual/styles/Texts';
import { pxToRem } from '../../logic/pxToRem';
import {
  notPrint,
  mobile,
  tabletDesktop,
  print,
} from '../../visual/styles/Medias';

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
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: ${pxToRem(4)};

  ${notPrint(
    mobile(css`
      grid-template-columns: auto;
      margin-bottom: ${pxToRem(5)};
    `),
  )}
`;

export const Title = styled(BodyText)`
  font-weight: bold;

  a {
    color: inherit;
  }
`;

export const TitleLink = styled.a`
  ${print(css`
    text-decoration: none;
  `)}
`;

export const Subtitle = styled(BodyText)`
  ${tabletDesktop(css`
    :before {
      content: '(';
    }
    :after {
      content: ')';
    }
  `)}
`;
export const Period = styled(BodyText)`
  ${tabletDesktop(css`
    :before {
      content: '- ';
    }
  `)}
`;

export const Main = styled.main``;

export const Responsibilities = styled(BodyText)``;
