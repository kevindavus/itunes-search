import styled from 'styled-components';

const SearchContainer = styled.div`
  background-color: rgba(220, 220, 220, 0.7);
  border-radius: 5px;
  margin: 0 auto;
  width: 50%;
  min-height: 200px;
  padding: 15px 40px;

  & > form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-content: stretch;
    margin-top: 10%;
    & > input {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 700px) {
    max-width: 100vw;
    max-height: 100vh;
    width: 100vw;
    height: ${window.innerHeight - 192}px;
    position: absolute;
    top: 128px;
    left: 0;
    z-index: 2;
    padding: 2rem 0;
  }
`;

export default SearchContainer;
