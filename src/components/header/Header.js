import React from 'react';
import { StyledHeader, StyledLink, StyledNav } from './HeaderStyles';
import { Link } from 'gatsby';
import logo from '../../../static/images/web_logo.png';

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <StyledNav>
        <StyledLink to="/">Visit</StyledLink>
        <StyledLink to="/">About</StyledLink>
        <StyledLink to="/">Contact</StyledLink>
      </StyledNav>
    </div>
  </StyledHeader>
);

export default Header;
