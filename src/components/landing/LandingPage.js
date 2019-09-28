import React from 'react';
import LandingImageStyles from './LandingPageStyles';
import landingPhoto from '../../../static/images/rafting.jpg';

const LandingPageStyles = () => (
  <LandingImageStyles>
    <div>
      <p>Play | Relax | Learn</p>
    </div>
    <img src={landingPhoto} alt="home-page-rafting" />
  </LandingImageStyles>
);

export default LandingPageStyles;
