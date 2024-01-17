import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const useNavigation = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query {
      allContentfulPage(sort: { createdAt: ASC }) {
        edges {
          node {
            id
            title
            url
          }
        }
      }
    }
  `);
  return allContentfulPage.edges;
};

export default useNavigation;

