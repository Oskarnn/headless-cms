import React from "react";
import { graphql, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
// import {richTextConfig} from '../utils/utils';

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      description {
        raw
      }
    }
  }
`;

const richTextConfig = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
};
const portfolioItem = (props) => {
  return (
    <Layout>
      <h2>{props.data.contentfulPost.title}</h2>
      {/* <GatsbyImage
        image={props.data.contentfulPost.postImg.gatsbyImage}
        alt={props.data.contentfulPost.title}
      /> */}
      <p>{renderRichText(props.data.description, richTextConfig)}</p>
      <Link to="/portfolio">Go back to the list</Link>
    </Layout>
  );
};

export default portfolioItem;