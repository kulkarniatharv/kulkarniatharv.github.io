/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Link as ScrollLink,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll'
import slugify from 'slugify'
import Layout from '../components/Layout'
import ProjectMetadata from '../components/TemplateComponents/Project/ProjectMetadata'
import ProjectDetail from '../components/TemplateComponents/Project/ProjectDetail'
import * as styles from '../styles/projectTemplate.scss'

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

const TableOfContents = ({ headings }) => (
  <Box
    as="nav"
    p="4"
    borderLeft="1px"
    borderColor="gray.200"
    ml="4"
    overflowY="auto"
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
    <Text fontWeight="bold">Table of contents</Text>
    {headings.map((heading, index) => (
      <Box
        key={index}
        _hover={{ bg: 'gray.100' }}
        borderRadius="md"
        style={{ paddingLeft: `${heading.level - 1}rem`, marginTop: '0.5rem' }} // Apply indentation based on heading level
      >
        <ScrollLink
          key={index}
          containerId="project-detail-container"
          to={heading.id}
          activeStyle={{ fontWeight: 'bold' }}
          spy
          smooth
          offset={-70}
          duration={500}
          // style={{
          //   display: 'block',
          //   transition: 'background-color 0.2s ease-in-out',
          // }}
        >
          <Text fontSize="sm">
            <ChevronRightIcon />
            {heading.title}
          </Text>
        </ScrollLink>
      </Box>
    ))}
  </Box>
)

const ProjectTemplate = ({ data }) => {
  // const project = data.markdownRemark
  const { markdownRemark } = data
  const [headings, setHeadings] = React.useState([])

  // console.log('headings:', headings)

  // const headings = extractHeadings(markdownRemark.rawMarkdownBody)

  React.useEffect(() => {
    setHeadings(extractHeadingsFromMarkdown(markdownRemark.rawMarkdownBody))

    Events.scrollEvent.register('begin', () => {
      // console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', () => {
      // console.log('end', arguments)
    })

    scrollSpy.update()

    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [markdownRemark])

  return (
    <Layout>
      <Grid
        templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(6, 1fr)' }}
        gap={4}
        className={styles.projectTemplatePage}
      >
        <GridItem colSpan={{ sm: 1, md: 2 }}>
          <Box
            as="aside"
            display="flex"
            flexDirection="column"
            placeItems="left"
            position="sticky"
            top="0" // Adjust the top value as needed, e.g., top="100px" if you have a header
            maxHeight="calc(100vh - 200px)" // Adjust the offset if there is a header
            // overflowY="auto" // Allows scrolling within the sidebar if content overflows
            ml="10"
            mx="5"
          >
            <ProjectMetadata project={markdownRemark} />
            <TableOfContents headings={headings} />
          </Box>
        </GridItem>
        <GridItem colSpan={{ sm: 1, md: 4 }}>
          <ProjectDetail
            project={{ markdown: markdownRemark.rawMarkdownBody }}
            images={data.markdownRemark.frontmatter.imagesUrl.map(image => ({
              src: image.relativePath,
              gatsbyImageData: image.childImageSharp.gatsbyImageData,
            }))}
            onHeadingsExtracted={setHeadings}
          />
        </GridItem>
      </Grid>
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
          relativePath
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
