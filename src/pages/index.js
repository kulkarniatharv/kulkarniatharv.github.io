/* eslint-disable react/prop-types */
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import React, { useContext } from 'react'
import { FaAws, FaMicrosoft } from 'react-icons/fa'
import { animated, useSpring } from 'react-spring'
// Context import
import theme from '../../theme'
import ColorModeContext from '../contexts/ColorModeContext'
import ColorModeProvider from '../contexts/ColorModeProvider'

import Seo from '../components/seo'
import * as styles from '../styles/index.module.scss'

import Layout from '../components/Layout'
import MainScreen from '../components/MainScreen/MainScreen.tsx'

const MotionHeading = motion(Heading)

const Home = ({ data }) => (
  <Layout>
    <MainScreen
      projects={data.projects.nodes}
      blogPosts={data.blogPosts.nodes}
    />
  </Layout>
)

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
        }
        parent {
          ... on File {
            modifiedTime(formatString: "DD/MMM/YYYY")
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
