/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Container,
  Heading,
  Text,
  Box,
  Flex,
  Button,
  List,
  ListItem,
  ListIcon,
  Icon,
  ChakraProvider,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { useSpring, animated } from 'react-spring'
import { FaAws, FaMicrosoft } from 'react-icons/fa'
import { ChevronRightIcon } from '@chakra-ui/icons'
// Context import
import ColorModeProvider from '../contexts/ColorModeProvider'
import ColorModeContext from '../contexts/ColorModeContext'
import theme from '../../theme'

import Seo from '../components/seo'
import * as styles from '../styles/index.module.scss'

import Layout from '../components/Layout'

const MotionHeading = motion(Heading)

const Home = ({ data }) => {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext)
  console.log('colorMode', colorMode)
  const arrowColor = colorMode === 'light' ? 'black' : 'white'
  console.log('arrowColor', arrowColor)

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 500,
  })

  const landingPageImg = getImage(
    data.landingPageProfilePic.childImageSharp.gatsbyImageData
  )

  return (
    <Layout>
      <Box display="flex" flexDirection="row">
        <Flex justifyContent="center" alignItems="center" flexGrow={1}>
          <Container maxWidth="unset">
            <Text mt={4} mb={4} textAlign="left" fontSize="l">
              👋 Welcome! I'm
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

            {/* <Text maxWidth="600px" mt={2} textAlign="left" fontSize="l">
                Current Role: Consultant at IBM Specialization: Workday
                Integration, AI & Application Development Experience: Over a
                year at IBM with significant achievements
              </Text> */}
            <List spacing={3} mt={6}>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="arrowColor" />
                <Text as="span" fontWeight="semibold">
                  Current Role:
                </Text>{' '}
                Consultant at IBM
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color={arrowColor} />
                <Text as="span" fontWeight="semibold">
                  Specialization:
                </Text>{' '}
                Workday Integration, AI & Application Development
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color={arrowColor} />
                <Text as="span" fontWeight="semibold">
                  Experience:
                </Text>{' '}
                Over a year at IBM with significant achievements
              </ListItem>

              <ListItem>
                <ListIcon as={ChevronRightIcon} color={arrowColor} />
                <Text as="span" fontWeight="semibold">
                  Certified Expert:
                </Text>{' '}
                Workday Integration, Human Capital Management
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color={arrowColor} />
                <Text as="span" fontWeight="semibold">
                  Cloud Certifications
                </Text>
                <Text pl={8}>
                  <Icon as={FaAws} /> AWS Certified Cloud Practitioner
                </Text>
                <Text pl={8}>
                  <Icon as={FaMicrosoft} /> Azure Certified Data Engineer
                </Text>
              </ListItem>
              {/* <ListItem>
                  <ListIcon as={CustomListIcon6} color="yellow.500" />
                  Skills: Robust Integrations, Security Management, Business
                  Solutions
                </ListItem> */}
              <ListItem>
                <ListIcon as={ChevronRightIcon} color={arrowColor} />
                <Text as="span" fontWeight="semibold">
                  Tech Stack:{' '}
                </Text>
                Proficient in JavaScript, Python, React.js, and more
              </ListItem>
            </List>

            <Text maxWidth="600px" mt={4} textAlign="left" fontSize="l">
              As I continue to decode the future, I invite you to explore my
              projects and insights, which are a testament to my relentless
              pursuit of innovation and excellence.
            </Text>

            {/* <Heading as="h2" size="lg" mt={5}>
                🔍 On This Site
              </Heading>
              {/* 
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={() => <span>⭐</span>} color="yellow.500" />
                  My Journey: Insights into my professional growth and
                  achievements
                </ListItem>
                <ListItem>
                  <ListIcon as={() => <span>⭐</span>} color="yellow.500" />
                  Projects: Showcase of notable works and contributions
                </ListItem>
                <ListItem>
                  <ListIcon as={() => <span>⭐</span>} color="yellow.500" />
                  Collaboration: Open to opportunities and partnerships
                </ListItem>
              </List> */}
            <Flex mt={6} justifyContent="space-around">
              <Link to="/projects">
                <Button
                  colorScheme="customBlue"
                  variant="outline"
                  flex="1"
                  mr={4}
                  _hover={{
                    bg: 'customBlue.500',
                    color: 'white',
                  }}
                >
                  Explore My Projects
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  colorScheme="customOrange"
                  variant="outline"
                  flex="1"
                  mr={4}
                  _hover={{
                    bg: 'customOrange.500',
                    color: 'white',
                  }}
                >
                  Read More About Me
                </Button>
              </Link>
              <Link to="/about">
                <Button colorScheme="cyan" variant="outline" flex="1" mr={4}>
                  Check out my Blog
                </Button>
              </Link>
            </Flex>
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
