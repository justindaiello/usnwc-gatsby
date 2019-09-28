import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
  .bar {
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    line-height: 1;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    object-fit: cover;
    max-width: 50%;
    position: relative;
    margin-left: 2rem;
    @media (max-width: 500px) {
      max-width: 75%;
    }
  }
`;

const StyledLink = styled(Link)`
  @media (max-width: 850px) {
    display: none;
  }
  text-decoration: none;
  font-family: 'Droid Sans';
  color: #393939;
  padding: 0rem 3rem;
  text-transform: uppercase;
  font-size: 2.5rem;
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
    background: #d0224a;
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
`;

const StyledNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  align-items: center;
  .menu-icon {
    margin-right: 2rem;
    font-size: 4rem;
    cursor: pointer;
    &:hover {
      color: #d0224a;
    }
    @media (min-width: 850px) {
      display: none;
    }
  }
`;

export { StyledHeader, StyledLink, StyledNav };
