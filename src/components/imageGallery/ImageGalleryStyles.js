import styled from 'styled-components';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 0 1rem 1rem 1rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export { StyledContainer };
