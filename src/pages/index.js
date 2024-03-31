/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
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
import MainScreen from '../components/MainScreen/MainScreen'

const MotionHeading = motion(Heading)

const Home = ({ data }) => {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext)
  const arrowColor = colorMode === 'light' ? 'black' : 'white'

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 500,
  })

  return (
    <Layout>
      <MainScreen projects={data.projects.nodes} />
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
          description
          notableProject
          slug
          cardBadge
          cardBadgeColorScheme
          imageurl {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
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
