import * as React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

//sidans namn blir portfolio efter namnet på javascript-filen
const SecondPage = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulOskarsPortfolioLongTextTextNode {
      edges {
        node {
          longText
        }
      }
    }
  }
  `);
  // HÄR MÅSTE DET EVENTUELLT ÄNDRAS
  return (
    <Layout>
      <ul>
        {data.allContentfulOskarsPortfolioLongTextTextNode.edges.map((edge) => {
          return (
            <li key={edge.node.id}>
              <h2>{edge.node.hejHej}</h2>
              <p>{edge.node.longText}</p>
              <GatsbyImage
                alt={edge.node.title}
                // img={edge.node.heroImage.gatsbyImage}

                // HÄR MÅSTE DET EVENTUELLT ÄNDRAS
              />
            </li>
          );
        })}
      </ul>

      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const Head = () => <title>Portfolio Page</title>;

export default SecondPage;



// import * as React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"

// //sidans namn blir portfolio efter namnet på javascript-filen
// const SecondPage = () => (
//   <Layout>
//     <h1>Hi from the second page</h1>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

// export const Head = () => <title>Portfolio Page</title>

// export default SecondPage
