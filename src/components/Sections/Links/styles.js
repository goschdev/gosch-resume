import styled from 'styled-components';
import { BodyText } from '../../../styles/Texts';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

export const Row = styled.li`
  margin-right: 10px;
  display: inherit;
`;

export const Link = styled(BodyText)`
  text-decoration: underline;
  line-height: auto;
`;
