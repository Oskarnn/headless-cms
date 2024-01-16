import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { MARKS } from "@contentful/rich-text-types"

const HomeTemplate = props => {
  const richTextConfig = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
  }
  const image = getImage(props.featuredImage)
  return (
    <div className="home-section-content">
      <div className="home-section-1">
        <GatsbyImage
          image={image}
          alt={renderRichText(props.content, richTextConfig)}
        />
      </div>
      <div className="home-section-2">
        <h3>{props.secondaryTitle}</h3>
        <h1>{renderRichText(props.content, richTextConfig)}</h1>

        <h3>{props.thirdTitle}</h3>
        <div className="line" />
        {console.log(image)}
        <Link className="cta-button" to="/portfolio">
          {props.button}
        </Link>
      </div>
    </div>
  )
}

export default HomeTemplate
