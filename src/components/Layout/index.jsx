import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from '../../visual/styles/GlobalStyle';
import Header from '../Header';

export function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {};

export default Layout;
