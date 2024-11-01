/* eslint-disable react/prop-types */
import { Box, Grid } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import React from 'react'
import ProjectCard from '../components/ProjectComponents/ProjectCard.tsx'

export const query = graphql`
  query ($section: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { sections: { in: [$section] } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          description
          sections
        }
      }
    }
  }
`

const SectionTemplate = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Box>
      <h1>{projects[0].frontmatter.sections[0]}</h1>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} justifyContent="center">
        {projects.map(project => (
          <ProjectCard
            key={project.frontmatter.slug}
            project={project.frontmatter}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default SectionTemplate
