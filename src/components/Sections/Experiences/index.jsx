import React from 'react';

import { Container } from './styles';
import { Section } from '../../Section';
import { TEXTS } from '../../../utils/texts';
import { Experience } from '../../Experience';

export function Experiences() {
  const { body, title } = TEXTS.sections.experiences;

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

Experiences.propTypes = {};

Experiences.defaultProps = {};

export default Experiences;
