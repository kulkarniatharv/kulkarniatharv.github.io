/* eslint-disable react/prop-types */
// src/components/header.js

import {
  Box,
  Button,
  Link as ChakraLink,
  Grid,
} from '@chakra-ui/react'
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import * as styles from '../styles/header.module.scss'
import Container from './Container'

const Header = props => {

  const data = useStaticQuery(graphql`
    query {
      logoLight: file(relativePath: { eq: "Atharv_Kulkarni-logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <Box as="header" className={styles.header}>
      <Container>
        <Grid
          pt={4}
          templateColumns={{ base: "1fr", md: "1fr auto" }}
          gap={4}
          alignItems="center"
        >
          <Box justifySelf={{ base: "center", md: "start" }}>
            <img
              width="100px"
              src={data.logoLight.publicURL}
              alt="Signature logo"
            />
          </Box>
          <Grid
            templateColumns={{ base: "1fr", sm: "repeat(3, auto)" }}
            gap={2}
            justifyItems={{ base: "center", md: "end" }}
            mt={{ base: 4, md: 0 }}
          >
            <ChakraLink as={GatsbyLink} to="/" px={2} py={1} rounded="md" w="100%">
              <Button
                colorScheme="gray"
                variant="ghost"
                _hover={{ bg: 'gray.700', color: 'white' }}
                w="100%"
              >
                Home
              </Button>
            </ChakraLink>
            <ChakraLink as={GatsbyLink} to="/about" px={2} py={1} rounded="md" w="100%">
              <Button
                colorScheme="gray"
                variant="ghost"
                _hover={{ bg: 'gray.700', color: 'white' }}
                w="100%"
              >
                About Me
              </Button>
            </ChakraLink>
            <ChakraLink as={GatsbyLink} to="/projects" px={2} py={1} rounded="md" w="100%">
              <Button
                colorScheme="gray"
                variant="ghost"
                _hover={{ bg: 'gray.700', color: 'white' }}
                w="100%"
              >
                Projects
              </Button>
            </ChakraLink>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Header
