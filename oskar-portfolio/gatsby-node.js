const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const response = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  response.data.allContentfulPost.edges.forEach((edge) => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve(`./src/templates/portfolio-items.js`),
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
