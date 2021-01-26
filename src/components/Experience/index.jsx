import React from 'react';
import PropTypes from 'prop-types';

import { TEXTS } from '../../logic/texts';
import * as S from './styles';

export function Experience({ company, responsibilities, role, period }) {
  const { name, url } = company;

  return (
    <S.Container>
      <S.Header>
        <S.Title as="h4" title={TEXTS.company}>
          {url ? (
            <S.TitleLink href={url} target="_blank" rel="noreferrer">
              {name}
            </S.TitleLink>
          ) : (
            name
          )}
        </S.Title>
        {!!role && <S.Subtitle title={TEXTS.role}>{role}</S.Subtitle>}
        {!!period && <S.Period title={TEXTS.period}>{period}</S.Period>}
      </S.Header>
      {!!responsibilities && (
        <S.Main>
          <S.Responsibilities>{responsibilities}</S.Responsibilities>
        </S.Main>
      )}
    </S.Container>
  );
}

Experience.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
  role: PropTypes.string,
  period: PropTypes.string.isRequired,
  responsibilities: PropTypes.string,
};

Experience.defaultProps = {
  responsibilities: '',
  role: '',
  company: {
    url: '',
  },
};

export default Experience;
