import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const StyledHeader = styled.h1`
  align-content: space-around;
  background-color: rgb(239, 93, 48);
  color: #f8f9fa;
  display: flex;
  flex-flow: column wrap;
  font-size: 3rem;
  height: 6rem;
  margin-top: 0;
  overflow: hidden;
  padding: 20px;
  text-align: center;
  white-space: nowrap;
  & > a {
    color: #f8f9fa;
    text-decoration: none;
  }
`;
const Header = () => (
  <StyledHeader>
    <Link to="/">iTunes Searchitron 9000</Link>
  </StyledHeader>
);
export default Header;
