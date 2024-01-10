// src/components/ProjectMetadata.js

import React from 'react'
import {
  Box,
  Heading,
  Text,
  Link,
  HStack,
  Wrap,
  WrapItem,
  Tag,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const ProjectMetadata = ({ project }) => {
  // Destructuring props for ease of access
  const { title, techStack, duration, role, repoLink, liveLink } =
    project.frontmatter

  // Framer Motion component
  const MotionBox = motion(Box)

  // Animation settings for Framer Motion
  const animationSettings = {
    initial: { opacity: 0, translateY: 50 },
    animate: { opacity: 1, translateY: 0 },
    exit: { opacity: 0, translateY: -50 },
    transition: { duration: 0.5 },
  }

  return (
    <MotionBox p={4} m={4} {...animationSettings}>
      <Heading as="h1" size="xl" mb={2}>
        {title}
      </Heading>
      <Box my="10">
        {techStack && (
          <Text mb={1}>
            <strong>Tech Stack: </strong>
            {
              // techStack.join(', ')
              <Wrap my="5">
                {techStack.map(skill => (
                  <WrapItem key={skill}>
                    <Tag
                      size="md"
                      variant="solid"
                      colorScheme="purple"
                      borderRadius="full"
                    >
                      {skill}
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            }
          </Text>
        )}
        {duration && <Text mb={1}>Duration: {duration}</Text>}
        {role && <Text mb={1}>Role: {role}</Text>}
        <HStack spacing={4}>
          {repoLink && (
            <Link href={repoLink} isExternal>
              GitHub
            </Link>
          )}
          {liveLink && (
            <Link href={liveLink} isExternal>
              Live Project
            </Link>
          )}
        </HStack>
      </Box>
    </MotionBox>
  )
}

export default ProjectMetadata
