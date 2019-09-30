import React from 'react';
import PrimaryLayout from '../layouts/PrimaryLayout';
import LandingPage from '../components/landing/LandingPage';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const { allFile } = data;
  const { edges } = allFile;
  return (
    <PrimaryLayout>
      <LandingPage data={edges} />
    </PrimaryLayout>
  );
};

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: { eq: "posts" }
        name: { eq: "rafting" }
      }
    ) {
      edges {
        node {
          relativeDirectory
          name
          id
          relativePath
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`;
