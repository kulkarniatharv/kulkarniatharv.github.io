/* eslint-disable react/prop-types */
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  Container,
  Heading,
  Text,
  Box,
  Flex,
  Button,
  ChakraProvider,
  CSSReset,
} from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { motion } from 'framer-motion'
import { useSpring, animated } from 'react-spring'

import theme from '../../theme'

import Seo from '../components/seo'
import * as styles from '../components/index.module.css'

import Layout from '../components/Layout'
import Projects from '../components/Projects'
import BlogPosts from '../components/BlogPosts'

const MotionHeading = motion(Heading)

const globalStyles = css`
  body.chakra-ui-light {
    /* override styles for light mode */
    font-family: 'Inter', sans-serif !important;
  }
  body.chakra-ui-dark {
    /* override styles for dark mode */
    font-family: 'Inter', sans-serif !important;
  }
`

const Home = ({ data }) => {
  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 500,
  })

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Global styles={globalStyles} />
      <Layout>
        <Box display="flex" flexDirection="column">
          <Flex justifyContent="center" alignItems="center" flexGrow={1}>
            <Container maxWidth="unset">
              <Text mt={4} textAlign="center" fontSize="xl">
                Hi, I'm
              </Text>
              <animated.div style={titleSpring}>
                <MotionHeading
                  as="h1"
                  size="4xl"
                  textAlign="center"
                  fontWeight="bold"
                  letterSpacing="tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  Atharv Kulkarni
                </MotionHeading>
              </animated.div>
              <Text mt={4} textAlign="center" fontSize="2xl">
                Deciphering the Future, One Innovation at a Time.
              </Text>
            </Container>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            py={8}
          >
            <Link to="/projects">
              <Button size="lg" colorScheme="twitter" variant="solid">
                Explore My Projects
              </Button>
            </Link>
            <span style={{ padding: '10px' }}>Or</span>
            <Link to="/blog">
              <Button size="lg" colorScheme="messenger" variant="solid">
                Read One Of My Articles
              </Button>
            </Link>
          </Flex>
        </Box>
      </Layout>
    </ChakraProvider>
  )
}

// export default function Home({ data }) {
//   return (
//     <Layout>
//       <Projects projects={data.projects.nodes} />
//       <BlogPosts blogPosts={data.blogPosts.nodes} />
//     </Layout>
//   )
// }

export const query = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      nodes {
        frontmatter {
          title
          slug
        }
      }
    }
    blogPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      nodes {
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

export default Home

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />
