/* eslint-disable react/prop-types */
// src/components/ProjectDetail.js
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Heading,

  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Element } from 'react-scroll'
import gfm from 'remark-gfm'
import remarkImages from 'remark-images'
import slugify from 'slugify'
import ProjectHeader from './ProjectHeader'


const ProjectDetail = ({ project, images }) => {
  // Destructuring props for ease of access
  const markdown = project.rawMarkdownBody
  // console.log('Images: ', images)

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
      // Find the image in the images array using the filename
      const imageName = src.split('/').pop() // Get filename from path
      const image = images.find(img => img.src.includes(imageName))
      
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
      
      // Fallback: if image not found in Gatsby images, use the direct URL
      return (
        <img 
          src={src.startsWith('/static') ? src : `/static${src}`} 
          alt={alt} 
          style={{ maxWidth: '100%' }} 
        />
      )
    },
  }

  return (
    <MotionBox
      p={{ base: 2, md: 4 }}
      {...animationSettings}
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
    >
      {/* Project Header Section */}
      <ProjectHeader frontmatter={project.frontmatter} />

      {/* Article Content */}
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
