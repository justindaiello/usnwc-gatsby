import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
  .bar {
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    line-height: 1;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  .logo {
    max-width: 50%;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #393939;
  padding: 0rem 3rem;
  display: flex;
  align-items: center;
  position: relative;
  &:before {
    content: '';
    width: 2px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    bottom: 0;
  }
  &:after {
    height: 2px;
    background: black;
    content: '';
    width: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: width 0.4s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    left: 50%;
    margin-top: 2rem;
    @media (max-width: 700px) {
      background: none;
    }
  }
  &:hover,
  &:focus {
    outline: none;
    &:after {
      width: calc(100% - 60px);
    }
  }
  padding: 0rem 3rem;
  text-transform: uppercase;
  font-size: 2.5rem;
`;

const StyledNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  align-items: center;
`;

export { StyledHeader, Logo, StyledLink, StyledNav };
