/* eslint-disable react/prop-types */
// src/components/header.js

import React, { useContext } from 'react'
import {
  Flex,
  Box,
  Button,
  Icon,
  Grid,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import ColorModeContext from '../contexts/ColorModeContext'

const Header = props => {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext)

  const data = useStaticQuery(graphql`
    query {
      logoLight: file(relativePath: { eq: "Atharv_Kulkarni-logo.svg" }) {
        publicURL
      }
      logoDark: file(
        relativePath: { eq: "Atharv_Kulkarni-logo_dark_mode.svg" }
      ) {
        publicURL
      }
    }
  `)

  const toggleColorModeHandler = () => {
    toggleColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <Grid
      as="header"
      px={8}
      pt={4}
      templateColumns={{ base: 'repeat(1, 1fr)', md: '3fr 2fr' }}
      gap={4}
      alignItems="center"
      maxWidth="1300px"
      justifyContent="center"
      mx="auto"
    >
      <Box justifySelf={{ base: 'center', md: 'start' }}>
        <img
          width="100px"
          src={
            colorMode === 'light'
              ? data.logoLight.publicURL
              : data.logoDark.publicURL
          }
          alt="Signature logo"
        />
      </Box>
      {/* Conditional rendering for alignment and column structure */}
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={4}
        colSpan={4}
        justifyItems="center"
      >
        <ChakraLink as={GatsbyLink} to="/" px={2} py={1} rounded="md">
          <Button
            colorScheme="gray"
            variant="ghost"
            _hover={{ bg: 'gray.700', color: 'white' }}
            width="100%"
          >
            Home
          </Button>
        </ChakraLink>
        <ChakraLink as={GatsbyLink} to="/about" px={2} py={1} rounded="md">
          <Button
            colorScheme="gray"
            variant="ghost"
            _hover={{ bg: 'gray.700', color: 'white' }}
            width="100%"
          >
            About Me
          </Button>
        </ChakraLink>
        <ChakraLink as={GatsbyLink} to="/projects" px={2} py={1} rounded="md">
          <Button
            colorScheme="gray"
            variant="ghost"
            _hover={{ bg: 'gray.700', color: 'white' }}
            width="100%"
          >
            Projects
          </Button>
        </ChakraLink>
        <ChakraLink as={GatsbyLink} to="/resume" px={2} py={1} rounded="md">
          <Button
            colorScheme="gray"
            variant="ghost"
            _hover={{ bg: 'gray.700', color: 'white' }}
            width="100%"
          >
            Resume
          </Button>
        </ChakraLink>
      </Grid>
    </Grid>
  )
}

export default Header
