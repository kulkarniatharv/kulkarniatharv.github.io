/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import { Box, Image, Text } from '@chakra-ui/react'
import Layout from '../components/Layout'

const ProjectTemplate = ({ data }) => {
  const project = data.markdownRemark.frontmatter

  return (
    <Box>
      <Image src={project.image} alt={project.title} />
      <Text fontWeight="bold" fontSize="xl" mb={2}>
        {project.title}
      </Text>
      <Text>{project.description}</Text>
    </Box>
  )
}

export const query = graphql`
  query ($slug: String!) {
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
`

export default ProjectTemplate
