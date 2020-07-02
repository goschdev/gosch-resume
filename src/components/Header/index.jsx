import React from 'react';

import { Container, Photo, Content } from './styles';
import { Title, Subtitle } from '../../styles/Texts';
import { TEXTS } from '../../utils/texts';
import photo from '../../images/gosch-photo.png';

export function Header() {
  return (
    <Container>
      <Photo src={photo} alt="" />
      <Content>
        <Title>{TEXTS.title}</Title>
        <Subtitle>{TEXTS.subtitle}</Subtitle>
      </Content>
    </Container>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
