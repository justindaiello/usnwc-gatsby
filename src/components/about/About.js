import React from 'react';
import { StyledContainer, MarkdownContainer } from './AboutStyles';
import Img from 'gatsby-image';

const About = props => {
  return (
    <StyledContainer>
      {console.log(props.data, 'DATA')}
      {props.data.map(image => {
        return (
          <Img
            fluid={image.node.childImageSharp.fluid}
            alt="photo"
            key={image.node.childImageSharp.fluid.src}
            className="header-image"
          />
        );
      })}
      <MarkdownContainer dangerouslySetInnerHTML={{ __html: props.html }} />
    </StyledContainer>
  );
};

export default About;
