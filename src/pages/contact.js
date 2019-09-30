import React from 'react';
import { graphql } from 'gatsby';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Contact from '../components/contact/Contact';

const contact = ({ data }) => {
  const { allFile } = data;
  const { edges } = allFile;
  return (
    <PrimaryLayout>
      <Contact data={edges} />
    </PrimaryLayout>
  );
};

export default contact;

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: { eq: "posts" }
      }
      limit: 3
    ) {
      edges {
        node {
          relativeDirectory
          name
          id
          relativePath
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`;
