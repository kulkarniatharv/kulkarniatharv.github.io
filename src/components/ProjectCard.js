/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'gatsby'
import { Box, Text, Badge } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as projectsStyles from '../styles/projects.module.scss'

const MotionBox = motion(Box)

const ProjectCard = ({ project }) => {
  const image = getImage(project.imageurl)

  return (
    <Link to={`/projects/${project.slug}`}>
      <MotionBox
        whileHover={{ scale: 1.05, boxShadow: 'lg' }}
        m={4}
        maxW="sm"
        borderWidth={1}
        borderRadius="lg"
        overflow="hidden"
        _hover={{ textDecoration: 'none' }}
        backgroundColor="blackAlpha.200"
      >
        <GatsbyImage
          imgStyle={{ objectFit: 'cover' }}
          image={image}
          alt={project.title}
        />
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="orange">
              New
            </Badge>
          </Box>

          <Box
            mt="1"
            mb={2}
            fontWeight="bold"
            as="h2"
            fontSize="xl"
            lineHeight="tight"
            noOfLines={1}
          >
            {project.title}
          </Box>

          {/* <Text fontWeight="bold"  fontSize="xl" mb={2}>
            {project.title}
          </Text> */}
          <Text>{project.description}</Text>
        </Box>
      </MotionBox>
    </Link>
  )
}

export default ProjectCard
