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

const ProjectDetail = ({ project, images }) => {
  // Destructuring props for ease of access
  const { markdown } = project
  console.log('Images: ', images)

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
          <Heading
            as="h1"
            fontSize="2rem"
            mt={14}
            mb={4}
            id={id}
            color="#3a3a3a"
          >
            {children}
          </Heading>
        </Element>
      )
    },
    h2: ({ children }) => {
      const id = slugify(children, { lower: true })
      return (
        <Element name={id} className="element">
          <Heading
            as="h2"
            fontSize="1.5rem"
            mt={10}
            mb={4}
            id={id}
            color="#4a4a4a"
          >
            {children}
          </Heading>
        </Element>
      )
    },
    h3: ({ children }) => {
      const id = slugify(children, { lower: true })
      return (
        <Element name={id} className="element">
          <Heading as="h3" fontSize="1.25rem" mt={8} mb={3} id={id}>
            {children}
          </Heading>
        </Element>
      )
    },
    h4: ({ children }) => {
      const id = slugify(children, { lower: true })
      return (
        <Element name={id} className="element">
          <Heading as="h4" fontSize="1rem" mt={4} mb={2} id={id}>
            {children}
          </Heading>
        </Element>
      )
    },
    h5: ({ children }) => {
      const id = slugify(children, { lower: true })
      return (
        <Element name={id} className="element">
          <Heading as="h5" fontSize="1rem" mt={4} mb={2} id={id}>
            {children}
          </Heading>
        </Element>
      )
    },
    h6: ({ children }) => {
      const id = slugify(children, { lower: true })
      return (
        <Element name={id} className="element">
          <Heading as="h6" fontSize="1rem" mt={4} mb={2} id={id}>
            {children}
          </Heading>
        </Element>
      )
    },

    // ... add other heading levels if needed
    p: ({ children }) => <Text mb={4}>{children}</Text>,
    a: ({ href, children }) => (
      <Link href={href} isExternal color="teal.500" target="_blank">
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
    // Updating the image renderer to use GatsbyImage
    img: ({ src, alt }) => {
      console.log('src:', src)
      // Modify the src value to match the format in the images array
      const formattedSrc = src.replace('../assets/images/', '')

      // Find the image in the images array using the modified src value
      const image = images.find(img => img.src === formattedSrc)
      console.log('image', image)
      if (image) {
        const gatsbyImageData = getImage(image.gatsbyImageData)
        return (
          <GatsbyImage
            image={gatsbyImageData}
            alt={alt}
            style={{ maxWidth: '40%', marginTop: '1em' }}
          />
        )
      }
      // Fallback for any unmatched case
      return <img src={src} alt={alt} style={{ maxWidth: '100%' }} />
    },
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
      maxW="1000px"
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
