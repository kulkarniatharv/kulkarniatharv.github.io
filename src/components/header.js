/* eslint-disable react/prop-types */
// src/components/header.js

import React from 'react'
import { Flex, Box, Button, Icon, Link as ChakraLink } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
// import LogoDark from '../assets/images/Atharv_Kulkarni-logo_dark_mode.svg'
// import LogoLight from '../assets/images/Atharv_Kulkarni-logo.svg'

import Navbar from './Navbar'

const Header = props => {
  const { toggleColorModeFunction, currColorMode } = props

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
            currColorMode === 'light'
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
          <Button variant="ghost" onClick={toggleColorModeFunction}>
            {currColorMode === 'light' ? (
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
