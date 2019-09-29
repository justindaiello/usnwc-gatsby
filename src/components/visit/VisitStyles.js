import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledContainer = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const MarkdownContainer = styled.div`
  @media (max-width: 800px) {
    margin-bottom: 0;
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
  margin: 1rem;
  flex-direction: column;
  div,
  div iframe {
    width: 100%;
  }
  h1 {
    color: #393939;
    margin-top: 0;
    text-transform: uppercase;
    margin-bottom: 0;
  }
`;

const StyledList = styled.ul`
  @media (max-width: 800px) {
    padding-top: 0;
    width: 99%;
    padding-left: 1.5rem;
    margin-bottom: 2rem;
  }
  flex: 1;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  align-items: flex-start;
  list-style: none;
  padding-top: 11rem;
  padding-left: 3rem;
  li {
    display: flex;
    align-items: center;
  }
  .icon {
    color: #393939;
    font-size: 2.8rem;
  }
`;

const StyledLink = styled(Link)`
  @media (max-width: 800px) {
    font-size: 2rem;
  }
  text-decoration: none;
  color: #393939;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0rem 3rem;
  text-transform: uppercase;
  font-size: 2.8rem;
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
`;

export { MarkdownContainer, StyledContainer, StyledList, StyledLink };
