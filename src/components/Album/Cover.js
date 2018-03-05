import styled from "styled-components";

const Cover = styled.div`
  width: 100%;
  height: 500px;
  object-fit: cover;
  text-align: center;
  background-color: #212529;
  overflow: hidden;
  margin: 0 auto;
  margin-top: -32px;
  background-image: url(${props => props.img});
  background-size: 50%;
  background-position: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-content: flex-end;
  background-repeat: no-repeat;
`;

export default Cover;
