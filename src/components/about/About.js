import React from 'react';
import { StyledContainer, MarkdownContainer, InfoBlock } from './AboutStyles';
import Img from 'gatsby-image';

const About = ({ data, html }) => {
  return (
    <StyledContainer>
      {data.map(image => {
        if (image.node.name === 'six') {
          return (
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt="photo"
              key={image.node.childImageSharp.fluid.src}
              className="header-image"
            />
          );
        } else return null; //gets rid of console error
      })}
      <h1 className="heading">Play | Relax | Learn</h1>
      <hr className="hr-heading" />
      <InfoBlock>
        <div className="images">
          {data.map(image => {
            return (
              <Img
                fluid={image.node.childImageSharp.fluid}
                alt="photo"
                key={image.node.childImageSharp.fluid.src}
              />
            );
          })}
        </div>
        <MarkdownContainer dangerouslySetInnerHTML={{ __html: html }} />
      </InfoBlock>
    </StyledContainer>
  );
};

export default About;
