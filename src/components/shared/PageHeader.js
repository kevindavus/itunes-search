import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const StyledHeader = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #f8f9fa;
  background-color: rgb(239, 93, 48);
  margin-top: 0;
  padding: 20px;
  height: 6rem;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  & > a {
    text-decoration: none;
    color: #f8f9fa;
  }
`;
const Header = () => (
  <StyledHeader>
    <Link to="/">iTunes Searchitron 9000</Link>
  </StyledHeader>
);
export default Header;
