/* eslint-disable react/prop-types */
// src/components/header.js

import React from 'react'
import { Flex, Box, Button, Icon } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

import Navbar from './Navbar'

const Header = props => {
  const { toggleColorModeFunction, currColorMode } = props

  return (
    <Flex
      as="header"
      py={4}
      px={8}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Button variant="ghost" onClick={toggleColorModeFunction}>
          {currColorMode === 'light' ? (
            <Icon as={MoonIcon} boxSize="6" />
          ) : (
            <Icon as={SunIcon} boxSize="6" />
          )}
        </Button>
      </Box>
      <Box>
        <Navbar />
      </Box>
    </Flex>
  )
}

export default Header
