import * as React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

//sidans namn blir portfolio efter namnet på javascript-filen
const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulPost(sort: { title: ASC }) {
        edges {
          node {
            title
            description {
              raw
            }
          }
        }
      }
    }
  `);

  // HÄR MÅSTE DET EVENTUELLT ÄNDRAS
  return (
    <Layout>
      <ul>
        {data.allContentfulPost.edges.map((edge) => {
          return (
            <li key={edge.node.id}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.description.raw}</p>
              <GatsbyImage
                alt={edge.node.title}
                // img={edge.node.heroImage.gatsbyImage}

                // HÄR MÅSTE DET EVENTUELLT ÄNDRAS
              />
            </li>
          );
        })}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const Head = () => <title>Portfolio Page</title>;

// export const query = graphql`
//   query {
//     allContentfulPost(sort: { title: ASC }) {
//       edges {
//         node {
//           title
//           description {
//             raw
//           }
//         }
//       }
//     }
//   }
// `;

export default SecondPage;
