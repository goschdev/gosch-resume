import React from 'react';

import { Container } from './styles';
import { Section } from '../../Section';
import { TEXTS } from '../../../utils/texts';
import { Experience } from '../../Experience';

export function Courses() {
  const { body, title } = TEXTS.sections.courses;

  return (
    <Section title={title}>
      <Container>
        {body.map(({ companyName, companyDescription, responsibilities }) => (
          <Experience
            key={companyDescription}
            companyName={companyName}
            companyDescription={companyDescription}
            responsibilities={responsibilities}
          />
        ))}
      </Container>
    </Section>
  );
}

Courses.propTypes = {};

Courses.defaultProps = {};

export default Courses;
