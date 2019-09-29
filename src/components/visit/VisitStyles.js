import styled from 'styled-components';

const StyledContainer = styled.div`
  @media (max-width: 1080px) {
    flex-direction: column;
    div,
    iframe {
      align-self: center;
      padding-right: 0 !important;
      margin-right: 0 !important;
      max-width: 99%;
    }
  }
  display: flex;
  margin: 1rem;
  flex-direction: row;
  div {
    margin-right: 1rem;
  }
  p {
    color: black;
    margin-top: 0;
  }
`;

export { StyledContainer };
