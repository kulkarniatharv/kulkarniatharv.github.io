/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }


const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/blog-post.js")
  const projectTemplate = path.resolve("src/templates/project.js")

  const result = await graphql(`
    {
      blogPosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
      ) {
        nodes {
          fields {
            slug
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  result.data.blogPosts.nodes.forEach((node) => {
    createPage({
      path: `/blog${node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  result.data.projects.nodes.forEach((node) => {
    createPage({
      path: `/projects${node.fields.slug}`,
      component: projectTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
