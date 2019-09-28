import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledMenu = styled.div`
  @media (min-width: 850px) {
    display: none;
  }
  padding: 20px;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 30%;
  min-width: 300px;
  max-width: 500px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: flex;
  flex-direction: column;
  ${props => props.open && `transform: translateX(0);`};
  header {
    border-bottom: #d0224a;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
`;

const StyledNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  align-items: flex-start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #393939;
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
  font-size: 3rem;
`;

const CloseButton = styled.button`
  margin-right: 2rem;
  background: none;
  color: #393939;
  font-size: 3rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
  cursor: pointer;
  &:hover {
    color: #d0224a;
  }
`;

export { StyledMenu, StyledLink, CloseButton, StyledNav };
