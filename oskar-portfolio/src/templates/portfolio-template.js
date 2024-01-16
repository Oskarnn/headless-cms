import * as React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost {
        edges {
          node {
            id
            title
            postImg {
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <ul>
        {data.allContentfulPost.edges.map((edge) => {
          const image = getImage(edge.node.postImg);
          return (
            <li key={edge.node.id}>
              <h2>{edge.node.title}</h2>
              <GatsbyImage image={image} alt={edge.node.title} />

              <Link to={`/portfolio/${edge.node.title.toLowerCase()}`}>
                Läs mer
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const Head = () => <title>Portfolio Page</title>;

export default PortfolioPage;





