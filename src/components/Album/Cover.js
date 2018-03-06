import styled from "styled-components";

const Cover = styled.div`
  align-content: flex-end;
  background-color: #212529;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
  display: flex;
  flex-flow: column nowrap;
  height: 38em;
  justify-content: flex-end;
  margin: 0 auto;
  object-fit: cover;
  overflow: hidden;
  text-align: center;
  width: 80%;
  margin-top: 1em;
  margin-left: -20px;
  box-shadow: 3px 3px 2px 0px rgba(68, 68, 68, 0.4);
`;

export default Cover;
