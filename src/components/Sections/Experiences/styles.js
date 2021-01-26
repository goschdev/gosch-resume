import styled from 'styled-components';

import { pxToRem } from '../../../logic/pxToRem';

export const Container = styled.div`
  display: grid;
  grid-row-gap: ${pxToRem(10)};
`;
