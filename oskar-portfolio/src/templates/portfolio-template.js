import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
  `)

  return (
    <div className="portfolio-content">
      <ul className="portfolio-list">
        {data.allContentfulPost.edges.map(edge => {
          const image = getImage(edge.node.postImg)
          return (
            <li key={edge.node.id}>
              <Link to={`/portfolio/${edge.node.title.toLowerCase()}`}>
                <h2>{edge.node.title}</h2>
                <GatsbyImage image={image} alt={edge.node.title} />
              </Link>

            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default PortfolioPage
