import React, { useState } from 'react';
import { StyledHeader, StyledLink, StyledNav } from './HeaderStyles';
import { Link } from 'gatsby';
import { MdMenu } from 'react-icons/md';
import logo from '../../../static/images/web_logo.png';
import Menu from '../menu/Menu';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    console.log(menuActive);
  };

  return (
    <StyledHeader>
      <div className="bar">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <StyledNav>
          <StyledLink to="/visit">Visit</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
          <MdMenu onClick={() => toggleMenu()} className="menu-icon" />
        </StyledNav>
      </div>
      <Menu toggleMenu={toggleMenu} active={menuActive} />
    </StyledHeader>
  );
};

export default Header;
