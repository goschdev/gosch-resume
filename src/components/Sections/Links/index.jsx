import React from 'react';

import { Container, Link, Row } from './styles';
import { Section } from '../../Section';
import { TEXTS } from '../../../logic/texts';

export function Links() {
  const { title, body } = TEXTS.sections.links;

  return (
    <Section title={title}>
      <Container>
        {body.map(([name, link]) => (
          <Row key={link}>
            <Link as="a" target="_BLANK" href={link}>
              {name}
            </Link>
          </Row>
        ))}
      </Container>
    </Section>
  );
}

Links.propTypes = {};

Links.defaultProps = {};

export default Links;
