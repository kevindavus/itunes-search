import styled from "styled-components";

const Cover = styled.div`
  align-content: flex-end;
  background-color: #212529;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
  display: flex;
  flex-flow: column nowrap;
  height: 500px;
  justify-content: flex-end;
  margin: 0 auto;
  margin-top: -32px;
  object-fit: cover;
  overflow: hidden;
  text-align: center;
  width: 100%;
`;

export default Cover;
