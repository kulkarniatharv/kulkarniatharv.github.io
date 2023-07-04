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
  const sectionTemplate = path.resolve("src/templates/section.js")

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
            imageurl {
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 200, height: 200)
              }
            }
          }
        }
      }
    }
  `)

  console.log("result.data", result.data);

  result.data.blogPosts.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  const projects = result.data.projects.nodes;

  projects.forEach((node) => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: projectTemplate,
      context: {
        frontmatter: node.frontmatter,
        slug: node.frontmatter.slug
      },
    })
  })

  // const sectionGroups = projects.reduce((groups, project) => {
  //   project.frontmatter.sections.forEach((section) => {
  //     groups[section] = groups[section] || [];
  //     groups[section].push(project);
  //   });
  //   return groups;
  // }, {});

  // Object.keys(sectionGroups).forEach((section) => {
  //   createPage({
  //     path: `/sections/${section}`,
  //     component: sectionTemplate,
  //     context: {
  //       projects: sectionGroups[section],
  //     },
  //   });
  // });

  let sections = [];
  result.data.projects.nodes.forEach((node) => {
    node.frontmatter.sections.forEach((section) => {
      if (!sections.includes(section)) {
        sections.push(section);
        createPage({
          path: `/sections/${section}`,
          component: sectionTemplate,
          context: {
            section,
          },
        });
      }
    });
  });
}



// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogPostTemplate = path.resolve("src/templates/blog-post.js")
//   const projectTemplate = path.resolve("src/templates/project.js")

//   const result = await graphql(`
//     {
//       blogPosts: allMarkdownRemark(
//         filter: { fileAbsolutePath: { regex: "/blog/" } }
//       ) {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }

//       projects: allMarkdownRemark(
//         filter: { fileAbsolutePath: { regex: "/projects/" } }
//       ) {
//         nodes {
//           frontmatter {
//             slug
//             description
//             imageurl {
//               childImageSharp {
//                 gatsbyImageData(layout: FIXED, width: 200, height: 200)
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   console.log("result.data", result.data);

//   result.data.blogPosts.nodes.forEach((node) => {
//     createPage({
//       path: `/blog/${node.frontmatter.slug}`,
//       component: blogPostTemplate,
//       context: {
//         slug: node.frontmatter.slug,
//       },
//     })
//   })

//   result.data.projects.nodes.forEach((node) => {
    
//     createPage({
//       path: `/projects/${node.frontmatter.slug}`,
//       component: projectTemplate,
//       context: {
//         slug: node.frontmatter.slug,
//         imageurl: node.frontmatter.imageurl,
//         description: node.frontmatter.description,
//       },
//     })
//   })
// }
