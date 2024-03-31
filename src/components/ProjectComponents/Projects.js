/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Heading, Grid } from '@chakra-ui/react'
import * as projectsStyles from '../../styles/projects.module.scss'
import ProjectsSection from './ProjectsSection'
import TableOfContents from './TableOfContents'

const Projects = props => {
  const { projects } = props

  const allProjects = projects.map(node => ({
    ...node.frontmatter,
  }))

  const sectionGroups = allProjects.reduce((groups, project) => {
    project.sections.forEach(section => {
      groups[section] = groups[section] || []
      groups[section].push(project)
    })
    return groups
  }, {})

  return (
    <Box maxW="1300px" m="0 auto" p={5}>
      <Grid
        templateColumns={['repeat(1, 1fr)', '1fr 3fr']} // 1 column on small screens, 3 columns on larger screens
        gap={4} // Space between grid items
      >
        <Box mt={10}>
          <Box mb={5} textAlign="center">
            <Box position="relative" display="inline-block">
              <Heading as="h1" size="lg">
                Project Sections
              </Heading>
              <Box
                as="span"
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                height="0.15rem"
                bgGradient="linear(to-r, purple.300, purple.200)"
                borderRadius="sm"
                opacity={0.6}
              />
            </Box>
          </Box>
          <TableOfContents sectionGroups={sectionGroups} />
        </Box>

        <Box overflowX="auto">
          {Object.entries(sectionGroups).map(([section, nprojects]) => (
            <ProjectsSection
              key={section}
              section={section}
              projects={nprojects}
            />
          ))}
        </Box>
      </Grid>
    </Box>
  )
}

export default Projects
