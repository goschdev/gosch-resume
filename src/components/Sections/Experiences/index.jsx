import React from 'react';

import { Container } from './styles';
import { Section } from '../../Section';
import { TEXTS } from '../../../logic/texts';
import { Experience } from '../../Experience';

export function Experiences() {
  const { body, title } = TEXTS.sections.experiences;

  return (
    <Section title={title}>
      <Container>
        {body.map(({ company, role, period, responsibilities }) => (
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

Experiences.propTypes = {};

Experiences.defaultProps = {};

export default Experiences;
