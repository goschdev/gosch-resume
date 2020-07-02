import styled from 'styled-components';

import { pxToRem } from '../utils/pxToRem';

export const Wrapper = styled.div`
  width: 88%;
  max-width: ${pxToRem(476)};
  margin-left: auto;
  margin-right: auto;
`;
