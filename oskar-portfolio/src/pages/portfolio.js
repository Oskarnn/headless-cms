import * as React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";

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

  const richTextConfig = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
  };

  // HÄR MÅSTE DET EVENTUELLT ÄNDRAS
  return (
    <Layout>
      <ul>
        {data.allContentfulPost.edges.map((edge) => {
          return (
            <li key={edge.node.id}>
              <h2>{edge.node.title}</h2>
              <p>{renderRichText(edge.node.description, richTextConfig)}</p>
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
