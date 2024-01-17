import React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { MARKS } from "@contentful/rich-text-types"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  query ($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      description {
        raw
      }
      postImg {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

const richTextConfig = {
  renderMark: {
    [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
  },
}
const portfolioItem = props => {
  const image = getImage(props.data.contentfulPost.postImg)
  return (
    <>
      <Layout>
        <div className="portfolio-items-content">
          <h2>{props.data.contentfulPost.title}</h2>
          <div className="items-image">
            <GatsbyImage image={image} alt={props.data.contentfulPost.title} />
          </div>
          <p>
            {renderRichText(
              props.data.contentfulPost.description,
              richTextConfig
            )}
          </p>
          <Link to="/portfolio">Tillbaka till listan</Link>
        </div>
      </Layout>
    </>
  )
}

export default portfolioItem
