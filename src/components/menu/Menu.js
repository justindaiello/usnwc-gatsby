import React from 'react';
import { StyledMenu, StyledLink, CloseButton, StyledNav } from './MenuStyles';

const Menu = props => (
  <StyledMenu open={props.active}>
    <header>
      <CloseButton title="close" onClick={props.toggleMenu}>
        &times;
      </CloseButton>
    </header>
    <StyledNav>
      <StyledLink to="/">About</StyledLink>
      <StyledLink to="/visit">Visit</StyledLink>
      <StyledLink to="/">Contact</StyledLink>
    </StyledNav>
  </StyledMenu>
);

export default Menu;
