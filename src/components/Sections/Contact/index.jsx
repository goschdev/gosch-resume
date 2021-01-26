import React from 'react';

import { Container } from './styles';
import { Section } from '../../Section';
import { TEXTS } from '../../../logic/texts';
import { BodyText } from '../../../visual/styles/Texts';

export function Contact() {
  const { body, title } = TEXTS.sections.contact;

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

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
