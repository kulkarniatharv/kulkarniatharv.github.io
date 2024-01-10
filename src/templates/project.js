/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import Layout from '../components/Layout'
import ProjectMetadata from '../components/TemplateComponents/Project/ProjectMetadata'
import ProjectDetail from '../components/TemplateComponents/Project/ProjectDetail'

const ProjectTemplate = ({ data }) => {
  const project = data.markdownRemark

  return (
    <Layout>
      <Grid
        templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }}
        gap={4}
      >
        <GridItem colSpan={{ sm: 1, md: 2 }}>
          <Box
            as="aside"
            display="flex"
            flexDirection="column"
            placeItems="center"
            position="sticky"
            top="0" // Adjust the top value as needed, e.g., top="100px" if you have a header
            maxHeight="calc(100vh - 100px)" // Adjust the offset if there is a header
            // overflowY="auto" // Allows scrolling within the sidebar if content overflows
            ml="10"
            mx="5"
          >
            <ProjectMetadata project={project} />
          </Box>
        </GridItem>
        <GridItem colSpan={{ sm: 1, md: 3 }}>
          <ProjectDetail project={project} />
        </GridItem>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        imageurl {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        sections
        techStack
        duration
        role
        repoLink: liveLink
      }
    }
  }
`

export default ProjectTemplate
