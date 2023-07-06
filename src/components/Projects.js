/* eslint-disable react/prop-types */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Box, Heading } from '@chakra-ui/react'
import * as projectsStyles from '../styles/projects.module.scss'
import ProjectsSection from './ProjectsSection'
import TableOfContents from './TableOfContents'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        nodes {
          frontmatter {
            title
            description
            sections
            slug
            imageurl {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `)

  const allProjects = data.allMarkdownRemark.nodes.map(node => ({
    ...node.frontmatter,
    slug: node.frontmatter.slug,
  }))

  const sectionGroups = allProjects.reduce((groups, project) => {
    project.sections.forEach(section => {
      groups[section] = groups[section] || []
      groups[section].push(project)
    })
    return groups
  }, {})

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Heading as="h1" size="3xl" my={40} textAlign="center">
        My Projects
      </Heading>
      <TableOfContents sectionGroups={sectionGroups} />
      {Object.entries(sectionGroups).map(([section, projects]) => (
        <ProjectsSection key={section} section={section} projects={projects} />
      ))}
    </Box>
  )
}

export default Projects
