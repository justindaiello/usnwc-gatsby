import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid black;
    line-height: 1;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  .logo {
    max-width: 60%;
    padding-left: 2rem;
  }
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-left: 2rem;
  position: relative;
  color: black;
  text-decoration: none;
`;

export { StyledHeader, Logo };
