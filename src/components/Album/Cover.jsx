import styled from 'styled-components';

const Cover = styled.div`
  display: flex;
  align-content: center;
  flex-flow: column nowrap;
  & > img {
    width: ${window.innerWidth < 440 ? '90vw' : '400px'};
    object-fit: cover;
    box-shadow: 3px 3px 2px 0px rgba(68, 68, 68, 0.4);
  }
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  margin-top: 1em;
  margin-left: 60px;

  @media (max-width: 1200px) {
    margin: 0 auto;
  }
`;

export default Cover;
