import React from 'react';
import Img from 'gatsby-image';
import { StyledContainer } from './ImageGalleryStyles';

const ImageGallery = ({ data }) => {
  return (
    <StyledContainer>
      {data.map(image => {
        return (
          <Img
            fluid={image.node.childImageSharp.fluid}
            alt="photo"
            key={image.node.childImageSharp.fluid.src}
          />
        );
      })}
    </StyledContainer>
  );
};

export default ImageGallery;
