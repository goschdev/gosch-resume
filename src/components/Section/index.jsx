import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';
import { SectionTitle } from '../../visual/styles/Texts';
import { Wrapper } from '../../visual/styles/Wrapper';

export function Section({ title, children, breakPage }) {
  return (
    <Container breakPage={breakPage}>
      <Wrapper>
        <SectionTitle>{title}</SectionTitle>
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  breakPage: PropTypes.bool,
};

Section.defaultProps = {
  breakPage: false,
};

export default Section;
