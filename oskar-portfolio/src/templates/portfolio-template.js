import * as React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MARKS } from "@contentful/rich-text-types";

// import Layout from "../components/layout";

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulPost(sort: { title: ASC }) {
        edges {
          node {
            title
          }
        }
      }
    }
  `);

  // HÄR MÅSTE DET EVENTUELLT ÄNDRAS
  return (
    <>
      <ul>
        {data.allContentfulPost.edges.map((edge) => {
          return (
            <li key={edge.node.id}>
              <h2>{edge.node.title}</h2>
              <GatsbyImage
                alt={edge.node.title}
                // img={edge.node.heroImage.gatsbyImage}

                // HÄR MÅSTE DET EVENTUELLT ÄNDRAS
              />

              <Link to={`/portfolio/${edge.node.title.toLowerCase()}`}>
                Read more
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </>
  );
};

export const Head = () => <title>Portfolio Page</title>;

export default PortfolioPage;
