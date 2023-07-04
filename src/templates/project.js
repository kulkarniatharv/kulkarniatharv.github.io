import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Box, Image, Text } from "@chakra-ui/react";

const ProjectTemplate = ({ data }) => {
  const project = data.markdownRemark.frontmatter;

  return (
    <Box>
      <Image src={project.image} alt={project.title} />
      <Text fontWeight="bold" fontSize="xl" mb={2}>
        {project.title}
      </Text>
      <Text>{project.description}</Text>
    </Box>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        imageurl {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

export default ProjectTemplate;

// export default function ProjectTemplate({ data }) {
//   const { markdownRemark } = data
//   const { frontmatter, html } = markdownRemark
//   const { title, imageurl, description } = frontmatter

//   return (
//     <Layout>
//       <h1>{title}</h1>
//       <img src={imageurl} alt={title} />
//       <p>{description}</p>
//       <div dangerouslySetInnerHTML={{ __html: html }} />
//     </Layout>
//   )
// }

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         description
//         imageurl {
//           childImageSharp {
//             gatsbyImageData(layout: FIXED, width: 200, height: 200)
//           }
//         }
//       }
//     }
//   }
// `
