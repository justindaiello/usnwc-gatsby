import React from 'react';
import Header from '../components/header/Header';

const PrimaryLayout = props => (
  <div>
    <Header />
    <div>{props.children}</div>
  </div>
);

export default PrimaryLayout;
