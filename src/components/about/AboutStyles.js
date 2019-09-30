import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  .heading {
    text-align: center;
    text-transform: uppercase;
    color: #393939;
    margin: 1rem 0;
    letter-spacing: 0.25rem;
  }
  .hr-heading {
    border: 0.25rem solid #393939;
    width: 95%;
    margin-bottom: 2rem;
  }
`;

const InfoBlock = styled.div`
  @media (max-width: 1050px) {
    flex-direction: column-reverse;
    .images {
      margin-right: 1rem;
    }
  }
  display: flex;
  .images {
    margin-left: 1rem;
    margin-bottom: 1rem;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

const MarkdownContainer = styled.div`
  @media (max-width: 1050px) {
    margin-left: 1rem;
    margin-right: 1rem;
    div,
    iframe {
      align-self: center;
      padding-right: 0 !important;
      margin-right: 0 !important;
      max-width: 99%;
    }
  }
  display: flex;
  flex: 2;
  flex-direction: column;
  margin: 2rem 0 1rem 2rem;
  div,
  iframe {
    margin-top: 3rem;
    width: 100%;
  }
  hr {
    border: 0.15rem solid #393939;
    width: 99%;
    margin-right: 1rem;
  }
  h2 {
    padding-left: 1rem;
  }
  h1,
  h2 {
    margin: 0;
    color: #d0224a;
  }
  p {
    margin: 0;
  }
`;

export { StyledContainer, MarkdownContainer, InfoBlock };
