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
import { graphql, Link, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import React, { useContext } from 'react'
import { FaAws, FaMicrosoft } from 'react-icons/fa'
import { animated, useSpring } from 'react-spring'

import theme from '../../theme'
import Layout from '../components/Layout'
import MainScreen from '../components/MainScreen/MainScreen'
import Seo from '../components/seo'
import ColorModeContext from '../contexts/ColorModeContext'
import ColorModeProvider from '../contexts/ColorModeProvider'
import styles from '../styles/index.module.scss'

interface ProjectNode {
  frontmatter: {
    title: string
    description: string
    notableProject: boolean
    slug: string
    cardBadge: string
    cardBadgeColorScheme: string
  }
  parent: {
    modifiedTime: string
  }
}

interface BlogPostNode {
  frontmatter: {
    title: string
    slug: string
    description: string
  }
  parent: {
    modifiedTime: string
  }
}

interface QueryData {
  projects: {
    nodes: ProjectNode[]
  }
  blogPosts: {
    nodes: BlogPostNode[]
  }
}


const Home: React.FC<PageProps<QueryData>> = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <MainScreen
      projects={data.projects.nodes}
      blogPosts={data.blogPosts.nodes}
    />
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
          description
        }
        parent {
          ... on File {
            modifiedTime(formatString: "DD/MMM/YYYY")
          }
        }
      }
    }
  }
`

export default Home

export const Head = (): JSX.Element => <Seo title="Home" />
