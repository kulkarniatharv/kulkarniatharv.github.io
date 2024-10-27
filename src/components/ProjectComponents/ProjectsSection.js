/* eslint-disable react/prop-types */
import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Box,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'

import { motion } from 'framer-motion'

import ProjectCard from './ProjectCard.tsx'

// import * as projectsStyles from '../../styles/projects.module.scss'

const ProjectsSection = ({ section, projects }) => {
  const formattedSection = section
    // Replace all hyphens with spaces
    .replace(/-/g, ' ')
    // Capitalize the first letter of each word
    .replace(/\b\w/g, letter => letter.toUpperCase())

  const MotionIconButton = motion(IconButton)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      my={4}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      id={section}
      borderRadius="lg"
      p={6}
      mx={4}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        templateColumns={['repeat(1, 1fr)', '9fr 1fr']}
        gap={4}
        justifyContent="center"
      >
        <Box mb={5}>
          <Box position="relative" display="inline-block" mx={4}>
            <Heading as="h2" size="lg">
              {formattedSection}
            </Heading>
            <Box
              as="span"
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              height="0.2rem"
              bgGradient="linear(to-r, purple.300, purple.200)"
              borderRadius="sm"
            />
          </Box>
        </Box>
        {/* <Heading as="h2" size="lg" mx={4}>
          {formattedSection}
        </Heading> */}
        {projects.length > 2 && (
          <Box textAlign="center">
            {/* <Link
              to={`/sections/${section}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            > */}
            <MotionIconButton
              onClick={onOpen}
              size="md"
              fontSize="lg"
              variant="outline"
              colorScheme="purple"
              isRound
              icon={<ArrowForwardIcon />}
              aria-label="Explore more projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            {/* </Link> */}
          </Box>
        )}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} justifyContent="center">
        {projects
          .filter(project => project.onProjectsPage === true)
          .map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
        <ModalOverlay />
        <ModalContent
          my={6}
          maxHeight="calc(100% - 3rem)"
          overflowY="auto"
          shadow="xl"
        >
          <ModalHeader>
            <Box mt={3}>
              <Box position="relative" display="inline-block" mx={4}>
                <Heading as="h2" size="md">
                  {formattedSection} Projects
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
                  opacity={0.5}
                />
              </Box>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={3}>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gap={4}
              justifyContent="center"
            >
              {projects.map(project => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default ProjectsSection
