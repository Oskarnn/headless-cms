import React from "react"
import { graphql, useStaticQuery } from "gatsby"



function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);
  const title = data.site.siteMetadata.title;
  const desc = data.site.siteMetadata.description;
  const author = data.site.siteMetadata.author;
  return (
    <div className="footer">
      <h3>{title}</h3>
      <h3>{desc}</h3>
      <h3>{author}</h3>
    </div>
  )
}

export default Footer
