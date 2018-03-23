import styled from 'styled-components';

const SongLI = styled.a`
  margin-top: 10px;
  padding: 5px 0;
  text-decoration: none;
  display: grid;
  grid-template-columns: 30% 60% 10%;
  border-bottom: 1px solid #e9ecef;

  @media (max-width: 420px) {
    grid-template-columns: 80% 20%;
  }
`;

export default SongLI;
