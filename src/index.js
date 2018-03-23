import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { normalize } from 'polished';
import { injectGlobal } from 'styled-components';
import Routes from './Routes';

injectGlobal`
  ${normalize()}
`;

render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('albums-container'),
);
