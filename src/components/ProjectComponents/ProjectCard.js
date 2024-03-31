/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'gatsby'
import { Box, Text, Badge } from '@chakra-ui/react'
import { motion } from 'framer-motion'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import * as projectsStyles from '../../styles/projects.module.scss'

const MotionBox = motion(Box)

const ProjectCard = ({ project }) => (
  // const image = getImage(project.imageurl)

  <MotionBox
    whileHover={{
      scale: 1.05,
      // boxShadow: 'lg'
    }}
    m={4}
    maxW="sm"
    overflow="hidden"
    _hover={{ textDecoration: 'none' }}
    boxShadow="md"
    borderRadius="10px"
    // style={{
    //   boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    //   borderRadius: '10px',
    // }}
  >
    <Link to={`/projects/${project.slug}`}>
      {/* <GatsbyImage
            imgStyle={{ objectFit: 'cover' }}
            image={image}
            alt={project.title}
          /> */}
      <Box p="6">
        <Box
          mt="1"
          mb={2}
          fontWeight="bold"
          as="h2"
          fontSize="lg"
          lineHeight="tight"
          noOfLines={2}
        >
          <Box position="relative" display="inline-block">
            {project.title}
            <Box
              as="span"
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              height="0.2rem"
              bgGradient={`linear(to-r, ${project.cardBadgeColorScheme}.400, ${project.cardBadgeColorScheme}.200)`}
              borderRadius="sm"
              opacity={0.5}
            />
          </Box>
          {project.cardBadge !== '' ? (
            <Badge
              borderRadius="full"
              px="2"
              ml="2"
              colorScheme={project.cardBadgeColorScheme}
              fontSize="xs"
            >
              {project.cardBadge}
            </Badge>
          ) : // </Box>
          null}
        </Box>
        <Text fontSize="sm">{project.description}</Text>
      </Box>
    </Link>
  </MotionBox>
  // </Link>
)

export default ProjectCard
