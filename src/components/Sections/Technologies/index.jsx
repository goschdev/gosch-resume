import React from 'react';

import { Container, Item } from './styles';
import { Section } from '../../Section';
import { TEXTS } from '../../../logic/texts';

export function Technologies() {
  const { body, title } = TEXTS.sections.technologies;

  return (
    <Section title={title}>
      <Container>
        {body.map((item) => (
          <Item as="li" key={item}>
            {item}
          </Item>
        ))}
      </Container>
    </Section>
  );
}

Technologies.propTypes = {};

Technologies.defaultProps = {};

export default Technologies;
