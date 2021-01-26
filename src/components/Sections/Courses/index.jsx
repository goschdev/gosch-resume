import React from 'react';

import { Container } from './styles';
import { Section } from '../../Section';
import { TEXTS } from '../../../logic/texts';
import { Experience } from '../../Experience';

export function Courses() {
  const { body, title } = TEXTS.sections.courses;

  return (
    <Section title={title}>
      <Container>
        {body.map(({ company, period, role, responsibilities }) => (
          <Experience
            key={period}
            company={company}
            role={role}
            period={period}
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
