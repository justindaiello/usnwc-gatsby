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
          <StyledLink to="/">Visit</StyledLink>
          <StyledLink to="/">About</StyledLink>
          <StyledLink to="/">Contact</StyledLink>
          <div className="menu-icon">
            <MdMenu onClick={() => toggleMenu()} />
          </div>
        </StyledNav>
      </div>
      <Menu toggleMenu={toggleMenu} active={menuActive} />
    </StyledHeader>
  );
};

export default Header;
