/* eslint-disable react/prop-types */
// src/components/header.js

import React, { useContext } from 'react'
import { Flex, Box, Button, Icon, Link as ChakraLink } from '@chakra-ui/react'
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
    <Flex
      as="header"
      py={4}
      px={8}
      justifyContent="space-between"
      alignItems="center"
      wrap="wrap"
    >
      <Box>
        {/* <Box boxSize="100px">{SvgLogo} </Box> */}
        <img
          width="100px"
          src={
            colorMode === 'light'
              ? data.logoLight.publicURL
              : data.logoDark.publicURL
          }
          alt="Atharv Kulkarni Logo"
        />
      </Box>
      <Box>
        {/* <Navbar /> */}
        <Box display="flex" alignItems="center">
          <ChakraLink as={GatsbyLink} to="/" px={2} py={1} rounded="md">
            <Button
              colorScheme="customColorForNavLinks"
              variant="ghost"
              _hover={{
                bg: 'customColorForNavLinks.500',
                color: 'white',
              }}
            >
              Home
            </Button>
          </ChakraLink>
          <ChakraLink as={GatsbyLink} to="/about" px={2} py={1} rounded="md">
            <Button
              colorScheme="customColorForNavLinks"
              variant="ghost"
              _hover={{
                bg: 'black',
                color: 'teal',
              }}
            >
              About Me
            </Button>
          </ChakraLink>
          <ChakraLink as={GatsbyLink} to="/projects" px={2} py={1} rounded="md">
            <Button
              colorScheme="customColorForNavLinks"
              variant="ghost"
              _hover={{
                bg: 'customColorForNavLinks.500',
                color: 'white',
              }}
            >
              Projects
            </Button>
          </ChakraLink>
          <ChakraLink as={GatsbyLink} to="/blog" px={2} py={1} rounded="md">
            <Button
              colorScheme="customColorForNavLinks"
              variant="ghost"
              _hover={{
                bg: 'customColorForNavLinks.500',
                color: 'white',
              }}
            >
              Blog
            </Button>
          </ChakraLink>
          <Button variant="ghost" onClick={toggleColorModeHandler}>
            {colorMode === 'light' ? (
              <Icon as={MoonIcon} boxSize="6" />
            ) : (
              <Icon as={SunIcon} boxSize="6" />
            )}
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default Header
