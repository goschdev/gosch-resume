import styled from 'styled-components';

import { BodyText as BodyTextBase } from '../../../visual/styles/Texts';
import { pxToRem } from '../../../logic/pxToRem';

export const Container = styled.div``;

export const BodyText = styled(BodyTextBase)`
  &:not(:last-child) {
    margin-bottom: ${pxToRem(16)};
  }
`;
