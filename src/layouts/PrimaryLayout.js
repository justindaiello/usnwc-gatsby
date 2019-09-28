import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const PrimaryLayout = props => (
  <div>
    <Header />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default PrimaryLayout;
