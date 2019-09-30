import React from 'react';
import PrimaryLayout from '../layouts/PrimaryLayout';
import { graphql } from 'gatsby';
import About from '../components/about/About';

const about = ({ data }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <PrimaryLayout>
      <About data={data.allFile.edges} html={html} />
    </PrimaryLayout>
  );
};

export const query = graphql`
  query {
    markdownRemark(id: { eq: "99f98f06-2e95-521f-9c71-67efa303bbd3" }) {
      id
      html
    }
    allFile(filter: { id: { eq: "347c91aa-dfc0-5430-8832-1e9850c9f2c7" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`;

export default about;
