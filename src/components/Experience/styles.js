import styled from 'styled-components';

import { COLORS } from '../../utils/colors';
import { BodyText } from '../../styles/Texts';

export const Container = styled.article`
  &:not(:last-child) {
    &:after {
      content: '';
      display: block;
      width: 45px;
      height: 7px;
      background-color: ${COLORS.primary};
      margin-top: 10px;
    }
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 5px;
`;

export const CompanyName = styled(BodyText)`
  font-weight: bold;
`;

export const CompanyDescription = styled(BodyText)``;

export const Main = styled.main``;

export const Responsibilities = styled(BodyText)``;
