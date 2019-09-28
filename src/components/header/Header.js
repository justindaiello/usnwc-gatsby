import React from 'react';
import { StyledHeader, StyledLink } from './HeaderStyles';
import { Link } from 'gatsby';
import logo from '../../../static/images/web_logo.png';

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </div>
  </StyledHeader>
);

export default Header;
