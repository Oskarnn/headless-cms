import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import AboutTemplate from "../templates/about-template";
import ContactTemplate from "../templates/contact-template";
import HomeTemplate from "../templates/home-template";
import PortfolioTemplate from "../templates/portfolio-template";

const Page = (props) => {
  const { data } = props;
  const { contentfulPage } = data;
  const getTemplate = (contentfulPage) => {
    switch (contentfulPage.template) {
      case "about-template":
        return <AboutTemplate {...contentfulPage} />;
      case "contact-template":
        return <ContactTemplate {...contentfulPage} />;
      case "portfolio-template":
        return <PortfolioTemplate {...contentfulPage} />;
      default:
        return <HomeTemplate {...contentfulPage} />;
    }
  };
  return <Layout>{getTemplate(contentfulPage)}</Layout>;
};

export const query = graphql`
  query ($id: String) {
    contentfulPage(id: {eq: $id}) {
      template
      title
      url
      secondaryTitle
      thirdTitle
      button
      featuredImage {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      content {
        raw
      }
    }
  }
`;

export default Page;
