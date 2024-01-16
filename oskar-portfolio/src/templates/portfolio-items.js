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
        <h2>{props.data.contentfulPost.title}</h2>
        <GatsbyImage image={image} alt={props.data.contentfulPost.title} />
        <p>
          {renderRichText(
            props.data.contentfulPost.description,
            richTextConfig
          )}
        </p>
        <Link to="/">Tillbaka till listan</Link>
      </Layout>
    </>
  )
}

export default portfolioItem
