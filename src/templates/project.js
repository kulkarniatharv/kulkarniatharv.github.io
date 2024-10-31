/* eslint-disable react/prop-types */
import { ChevronRightIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Container } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import React from 'react'
import {
  Events,
  animateScroll as scroll,
  Link as ScrollLink,
  scrollSpy,
} from 'react-scroll'
import slugify from 'slugify'
import Layout from '../components/Layout'
import ProjectDetail from '../components/TemplateComponents/Project/ProjectDetail'
import ProjectMetadata from '../components/TemplateComponents/Project/ProjectMetadata'
import styles from '../styles/projectTemplate.module.scss'
import TableOfContents from '../components/TableOfContents'

// Extract headings from markdownRemark.rawMarkdownBody
const extractHeadingsFromMarkdown = markdown => {
  const headingRegex = /^(#{1,6})\s+(.+)/gm
  const extractedHeadings = markdown
    .split('\n')
    .filter(line => line.match(headingRegex))
    .map(rawHeading => {
      const level = rawHeading.match(/^#+/)[0].length // Count the number of '#' characters
      const title = rawHeading.replace(/^#{1,6}\s+/, '').trim()
      return { title, id: slugify(title, { lower: true }), level }
    })
  return extractedHeadings
}

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data
  const [headings, setHeadings] = React.useState([])
  const [isTocOpen, setIsTocOpen] = React.useState(false)

  React.useEffect(() => {
    setHeadings(extractHeadingsFromMarkdown(markdownRemark.rawMarkdownBody))
    scrollSpy.update()
    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [markdownRemark])

  return (
    <Layout>
      {/* Mobile TOC Toggle */}
      <Box 
        display={{ base: 'block', lg: 'none' }} 
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="10"
      >
        <IconButton
          aria-label="Toggle Table of Contents"
          icon={<HamburgerIcon />}
          onClick={() => setIsTocOpen(!isTocOpen)}
          colorScheme="purple"
          borderRadius="full"
        />
      </Box>

      {/* Mobile TOC Drawer */}
      <Drawer
        isOpen={isTocOpen}
        placement="right"
        onClose={() => setIsTocOpen(false)}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Contents</DrawerHeader>
          <DrawerBody>
            <TableOfContents headings={headings} onClose={() => setIsTocOpen(false)} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <Box display="flex" gap={12}>
          {/* Main Content Area */}
          <Box flex="1" maxW="860px">
            <ProjectDetail
              project={markdownRemark}
              images={markdownRemark.frontmatter.imagesUrl?.map(image => ({
                src: image.publicURL,
                gatsbyImageData: image.childImageSharp.gatsbyImageData,
              })) || []}
            />
          </Box>

          {/* Desktop TOC */}
          <Box
            display={{ base: 'none', lg: 'block' }}
            w="280px"
            flexShrink={0}
            position="relative"
            height="fit-content"
          >
            <TableOfContents headings={headings} />
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        title
        description
        imagesUrl {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        sections
        techStack
        duration
        role
        repoLink: liveLink
      }
    }
  }
`

export default ProjectTemplate
