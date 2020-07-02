import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';

export const Container = styled.div`
  display: grid;
  grid-row-gap: ${pxToRem(10)};
`;
