import styled from 'styled-components';
import { BodyText as BodyTextBase } from '../../../styles/Texts';

export const Container = styled.div``;

export const BodyText = styled(BodyTextBase)`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
