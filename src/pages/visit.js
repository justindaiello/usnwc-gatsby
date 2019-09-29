import React from 'react';
import { graphql } from 'gatsby';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Visit from '../components/visit/Visit';

const visit = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <PrimaryLayout>
      <Visit title={frontmatter.title} html={html} />
    </PrimaryLayout>
  );
};

export const query = graphql`
  query {
    markdownRemark(id: { eq: "dec85648-cd37-519a-9955-9c05fa02083a" }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;

export default visit;
