/* eslint-disable react/prop-types */
// src/components/ProjectDetail.js
import React from 'react'
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import remarkImages from 'remark-images'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Element } from 'react-scroll'
import slugify from 'slugify'

const ProjectDetail = ({ project }) => {
  // Destructuring props for ease of access
  const { markdown } = project

  // React.useEffect(() => {
  //   const headingRegex = /^(#{1,6})\s+(.+)/gm
  //   const extractedHeadings = markdown
  //     .split('\n')
  //     .filter(line => line.match(headingRegex))
  //     .map(rawHeading => {
  //       const title = rawHeading.replace(/^(#{1,6})\s+/, '').trim()
  //       return { title, id: slugify(title, { lower: true }) }
  //     })

  //   // Pass headings up to the parent component
  //   if (onHeadingsExtracted) {
  //     setLocalExtractedHeadings(extractedHeadings)
  //     onHeadingsExtracted(extractedHeadings)
  //   }
  // }, [markdown, onHeadingsExtracted])

  // Framer Motion component and hook
  const MotionBox = motion(Box)

  // Animation settings for Framer Motion
  const animationSettings = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  }

  // Custom renderers for markdown elements
  const renderers = {
    h1: ({ children }) => {
      const id = slugify(children, { lower: true })
      return (
        <Element name={id} className="element">
          <Heading as="h1" size="2xl" mt={6} mb={4} id={id} color="#3a3a3a">
            {children}
          </Heading>
        </Element>
      )
    },
    h2: ({ children }) => {
      const id = slugify(children, { lower: true })
      return (
        <Element name={id} className="element">
          <Heading as="h2" size="xl" mt={4} mb={3} id={id} color="#4a4a4a">
            {children}
          </Heading>
        </Element>
      )
    },
    h3: ({ children }) => {
      const id = slugify(children, { lower: true })
      return (
        <Element name={id} className="element">
          <Heading as="h3" size="lg" mt={4} mb={3} id={id}>
            {children}
          </Heading>
        </Element>
      )
    },
    h4: ({ children }) => {
      const id = slugify(children, { lower: true })
      return (
        <Element name={id} className="element">
          <Heading as="h4" size="md" mt={4} mb={2} id={id}>
            {children}
          </Heading>
        </Element>
      )
    },
    h5: ({ children }) => {
      const id = slugify(children, { lower: true })
      return (
        <Element name={id} className="element">
          <Heading as="h5" size="md" mt={4} mb={2} id={id}>
            {children}
          </Heading>
        </Element>
      )
    },
    h6: ({ children }) => {
      const id = slugify(children, { lower: true })
      return (
        <Element name={id} className="element">
          <Heading as="h6" size="md" mt={4} mb={2} id={id}>
            {children}
          </Heading>
        </Element>
      )
    },

    // ... add other heading levels if needed
    p: ({ children }) => <Text mb={4}>{children}</Text>,
    a: ({ href, children }) => (
      <Link href={href} isExternal color="teal.500">
        {children}
      </Link>
    ),
    ul: ({ href, children }) => (
      // console.log('ul', children)
      <List>
        {children.map(li => {
          if (li.type === 'li') {
            return (
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                <Text as="span">{li.props.children}</Text>
              </ListItem>
            )
          }
        })}
      </List>
    ),
  }

  return (
    <MotionBox
      p={4}
      m={4}
      {...animationSettings}
      maxHeight="calc(100vh - 200px)"
      overflowY="auto"
      id="project-detail-container"
      sx={{
        '&::-webkit-scrollbar': {
          height: '10px',
          width: '5px',
        },

        '&::-webkit-scrollbar-track': {
          borderRadius: '5px',
          backgroundColor: '#DFE9EB',
        },

        '&::-webkit-scrollbar-track:hover': {
          backgroundColor: '#B8C0C2',
        },

        '&::-webkit-scrollbar-track:active': {
          backgroundColor: '#B8C0C2',
        },

        '&::-webkit-scrollbar-thumb': {
          borderRadius: '5px',
          backgroundColor: '#7D58E3',
        },

        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#553C9A',
        },

        '&::-webkit-scrollbar-thumb:active': {
          backgroundColor: '#8D63FF',
        },
      }}
      maxW="800px"
    >
      <article>
        <ReactMarkdown
          remarkPlugins={[gfm, remarkImages]}
          components={renderers}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </MotionBox>
  )
}

export default ProjectDetail
