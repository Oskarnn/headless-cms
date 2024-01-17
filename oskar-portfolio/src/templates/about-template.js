import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { MARKS } from "@contentful/rich-text-types"

const AboutTemplate = props => {
  const richTextConfig = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
  }
  const image = getImage(props.featuredImage)

  return (
    <div className="about-me-section">
      <div className="profile-info">
        <h2>{props.title}</h2>
        <h4>{props.secondaryTitle}</h4>
        <p>{renderRichText(props.content, richTextConfig)}</p>
      </div>
      <div className="profile-img">
        <GatsbyImage image={image} alt={props.title} />
      </div>
    </div>
  )
}

export default AboutTemplate
