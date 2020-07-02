import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  CompanyName,
  Header,
  CompanyDescription,
  Main,
  Responsibilities,
} from './styles';

export function Experience({
  companyName,
  companyDescription,
  responsibilities,
}) {
  return (
    <Container>
      <Header>
        <CompanyName>{companyName}</CompanyName>
        <CompanyDescription>{companyDescription}</CompanyDescription>
      </Header>
      <Main>
        <Responsibilities>{responsibilities}</Responsibilities>
      </Main>
    </Container>
  );
}

Experience.propTypes = {
  companyName: PropTypes.string.isRequired,
  // companyDescription: PropTypes.string.isRequired,
  // responsibilities: PropTypes.string.isRequired,
};

Experience.defaultProps = {};

export default Experience;
