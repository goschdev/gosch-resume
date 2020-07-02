import React from 'react';

import { Container } from './styles';
import { Section } from '../../Section';
import { TEXTS } from '../../../utils/texts';
import { BodyText } from '../../../styles/Texts';

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
