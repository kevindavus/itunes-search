import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px;
  padding-right: 10px;
  padding-left: 10px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;

  @media (max-width: 1200px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;

export default Wrapper;
