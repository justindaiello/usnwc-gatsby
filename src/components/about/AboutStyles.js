import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MarkdownContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  margin: 1rem;
  h1 {
    margin-bottom: 0;
    color: #d0224a;
  }
  h2 {
    margin: 0;
    color: #d0224a;
  }
`;

export { StyledContainer, MarkdownContainer };
