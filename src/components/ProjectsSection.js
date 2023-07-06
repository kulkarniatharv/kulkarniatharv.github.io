/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'gatsby'
import { Box, Button, Heading, SimpleGrid, IconButton } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import ProjectCard from './ProjectCard'

import * as projectsStyles from '../styles/projects.module.scss'

const ProjectsSection = ({ section, projects }) => (
  <Box
    my={8}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    id={section}
    borderTop={1}
    borderRight={1}
    borderWidth={1}
    borderColor="blackAlpha.300"
    borderRadius="lg"
    p={6}
    mx={4}
  >
    <Heading
      as="h2"
      size="xl"
      mb={4}
      mx={4}
      textAlign="center"
      alignSelf="flex-start"
    >
      {section}
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} justifyContent="center">
      {projects.slice(0, 2).map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </SimpleGrid>
    {projects.length > 2 && (
      <Box textAlign="center" mt={4}>
        <Link to={`/sections/${section}`}>
          {/* <Button variant="outline">See all</Button> */}
          <IconButton
            size="md"
            fontSize="lg"
            variant="outline"
            colorScheme="red"
            isRound
            icon={<ArrowForwardIcon />}
            aria-label="Explore more projects"
          />
        </Link>
      </Box>
    )}
  </Box>
)

export default ProjectsSection
