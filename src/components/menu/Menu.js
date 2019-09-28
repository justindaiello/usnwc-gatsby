import React from 'react';
import StyledMenu from './MenuStyles';

const Menu = props => (
  <StyledMenu open={props.active}>
    <p style={{ color: 'black' }} onClick={() => props.toggleMenu()}>
      HELLO
    </p>
  </StyledMenu>
);

export default Menu;
