import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  background-color: rgb(239, 93, 48);
  border-radius: 3px;
  border: none;
  color: #fff;
  cursor: pointer;
  margin: 0 auto;
  outline: none;
  padding: 10px 30px;
  text-decoration: none;
  &:hover {
    background-color: ${darken(0.1, '#EF5D30')};
  }
`;

export default Button;
