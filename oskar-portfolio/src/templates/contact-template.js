import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { MARKS } from "@contentful/rich-text-types"

const ContactTemplate = (props) => {
  const richTextConfig = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
  }
  return (
    <div className="contact-info">
      <h2>{props.title}</h2>
      <h3>{renderRichText(props.content, richTextConfig)}</h3>
    
    </div>
  );
};

export default ContactTemplate;
