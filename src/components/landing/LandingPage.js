import React from 'react';
import LandingImageStyles from './LandingPageStyles';
import landingPhoto from '../../../static/images/rafting.jpg';
import Img from 'gatsby-image';

const LandingPageStyles = ({ data }) => (
  <LandingImageStyles>
    <div>
      <p>Play | Relax | Learn</p>
    </div>
    {data.map(image => {
      return (
        <Img
          fluid={image.node.childImageSharp.fluid}
          alt="photo"
          key={image.node.childImageSharp.fluid.src}
          className="landing-image"
        />
      );
    })}
  </LandingImageStyles>
);

export default LandingPageStyles;
