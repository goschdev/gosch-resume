import styled from 'styled-components';
import { BodyText } from '../../../styles/Texts';
import { pxToRem } from '../../../utils/pxToRem';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

export const Row = styled.li`
  margin-right: ${pxToRem(10)};
  display: inherit;
`;

export const Link = styled(BodyText)`
  text-decoration: underline;
  line-height: auto;
`;
