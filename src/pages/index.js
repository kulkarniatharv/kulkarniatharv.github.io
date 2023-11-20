/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Container,
  Heading,
  Text,
  Box,
  Flex,
  Button,
  ChakraProvider,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { useSpring, animated } from 'react-spring'

import theme from '../../theme'

import Seo from '../components/seo'
import * as styles from '../styles/index.module.scss'

import Layout from '../components/Layout'
import Projects from '../components/Projects'
import BlogPosts from '../components/BlogPosts'

const MotionHeading = motion(Heading)

const Home = ({ data }) => {
  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 500,
  })

  const landingPageImg = getImage(
    data.landingPageProfilePic.childImageSharp.gatsbyImageData
  )


  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Box display="flex" flexDirection="row">
          <Flex justifyContent="center" alignItems="center" flexGrow={1}>
            <Container maxWidth="unset">
              <Text mt={4} textAlign="left" fontSize="xl">
                Hi, I'm
              </Text>
              <animated.div style={titleSpring}>
                <MotionHeading
                  as="h1"
                  size="2xl"
                  textAlign="left"
                  fontWeight="bold"
                  letterSpacing="tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  Atharv Kulkarni
                </MotionHeading>
              </animated.div>
              <Text maxWidth="600px" mt={2} textAlign="left" fontSize="l">
                a Consultant at IBM, and I am steering a course towards the
                cutting-edge fields of AI and application development. My
                journey is fortified by professional certifications in Workday
                Integration and Human Capital Management, along with a proven
                track record of delivering complex projects to top-tier clients.
              </Text>
              <Text maxWidth="600px" mt={4} textAlign="left" fontSize="l">
                I bring a nuanced understanding of cloud infrastructures, with
                credentials in AWS and Azure, to the rapidly evolving tech
                landscape. My skills in communication and content creation are
                complemented by my innovative work in enhancing AI applications
                within the HR domain at IBM. My technical portfolio showcases my
                versatility, from developing MERN stack applications to
                pioneering blockchain in healthcare.
              </Text>
              <Text maxWidth="600px" mt={4} textAlign="left" fontSize="l">
                As I continue to decode the future, I invite you to explore my
                projects and insights, which are a testament to my relentless
                pursuit of innovation and excellence.
              </Text>
              <Box mt={6}>
                <Link to="/projects">
                  <Button
                    colorScheme="customBlue"
                    variant="outline"
                    _hover={{
                      bg: 'customBlue.500',
                      color: 'white',
                    }}
                  >
                    Explore My Projects
                  </Button>
                </Link>
                <span style={{ padding: '10px' }}>Or</span>
                <Link to="/blog">
                  <Button
                    colorScheme="customOrange"
                    variant="outline"
                    _hover={{
                      bg: 'customOrange.500',
                      color: 'white',
                    }}
                  >
                    Read One Of My Articles
                  </Button>
                </Link>
              </Box>
            </Container>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            py={8}
          >
            <GatsbyImage image={landingPageImg} alt="Profile Photo" />
          </Flex>
        </Box>
      </Layout>
    </ChakraProvider>
  )
}

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
    landingPageProfilePic: file(relativePath: { eq: "landingPageImg.png" }) {
      childImageSharp {
        gatsbyImageData(width: 500, layout: CONSTRAINED)
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
