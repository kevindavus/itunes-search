import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken } from "polished";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  border: none;
  background-color: rgb(239, 93, 48);
  color: #fff;
  padding: 10px 30px;
  margin: 0 auto;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  text-decoration: none;
  &:hover {
    background-color: ${darken(0.1, "#673AB7")};
  }
`;

export default Button;
