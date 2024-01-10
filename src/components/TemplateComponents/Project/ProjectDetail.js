// src/components/ProjectDetail.js
import React from 'react'
import { Box, VStack, Heading, Text, Image, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const ProjectDetail = ({ project }) => {
  // Destructuring props for ease of access
  const { html } = project

  console.log('HTML: ', html)

  // Framer Motion component and hook
  const MotionBox = motion(Box)

  // Animation settings for Framer Motion
  const animationSettings = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  }

  return (
    <MotionBox
      p={4}
      m={4}
      {...animationSettings}
      maxHeight="calc(100vh - 300px)"
      overflowY="auto" // Make the box scrollable
    >
      <article>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </MotionBox>
  )
}

export default ProjectDetail
