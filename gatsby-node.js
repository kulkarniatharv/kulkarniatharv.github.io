/* eslint-disable no-console */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }

  // Check node type and exclude PDF files
  if (
    node.internal.type === 'File' &&
    node.internal.mediaType === 'application/pdf'
  ) {
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve('src/templates/blog-post.js')
  const projectTemplate = path.resolve('src/templates/project.js')
  const sectionTemplate = path.resolve('src/templates/section.js')

  const result = await graphql(`
    {
      blogPosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }

      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        nodes {
          frontmatter {
            slug
            sections
            description
          }
        }
      }
    }
  `)

  console.log('result.data', result.data)

  result.data.blogPosts.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  const projects = result.data.projects.nodes

  projects.forEach(node => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: projectTemplate,
      context: {
        frontmatter: node.frontmatter,
        slug: node.frontmatter.slug,
      },
    })
  })

  const sections = []
  result.data.projects.nodes.forEach(node => {
    node.frontmatter.sections.forEach(section => {
      if (!sections.includes(section)) {
        sections.push(section)
        createPage({
          path: `/sections/${section}`,
          component: sectionTemplate,
          context: {
            section,
          },
        })
      }
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemarkFrontmatter {
      imagesUrl: [File] @fileByRelativePath
    }
    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `
  createTypes(typeDefs)
}
