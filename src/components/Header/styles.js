import styled from 'styled-components';

import { COLORS } from '../../utils/colors';

export const Container = styled.header`
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
  grid-column-gap: 5px;
`;

export const Photo = styled.img`
  max-width: 110px;
`;

export const Content = styled.div`
  background-color: ${COLORS.primary};
  padding: 25px 20px;
  display: grid;
  align-items: center;
  width: 100%;
`;
