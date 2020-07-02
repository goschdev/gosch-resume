import React from 'react';

import { Container, BodyText } from './styles';
import { Section } from '../../Section';
import { TEXTS } from '../../../utils/texts';

export function About() {
  const { body, title } = TEXTS.sections.about;

  return (
    <Section title={title}>
      <Container>
        {body.map((item) => (
          <BodyText key={item}>{item}</BodyText>
        ))}
      </Container>
    </Section>
  );
}

About.propTypes = {};

About.defaultProps = {};

export default About;
