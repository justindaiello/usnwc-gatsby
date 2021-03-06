import React from 'react';
import { graphql } from 'gatsby';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Visit from '../components/visit/Visit';
import ImageGallery from '../components/imageGallery/ImageGallery';

const visit = ({ data }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <PrimaryLayout>
      <Visit html={html} />
      <ImageGallery data={data.allFile.edges} />
    </PrimaryLayout>
  );
};

export const query = graphql`
  query {
    markdownRemark(id: { eq: "dec85648-cd37-519a-9955-9c05fa02083a" }) {
      id
      html
    }
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: { eq: "posts" }
      }
    ) {
      edges {
        node {
          relativeDirectory
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`;

export default visit;
