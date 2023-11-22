/* eslint-disable react/prop-types */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import initializeAOS from './aos.config'
import theme from './theme'
import ColorModeProvider from './src/contexts/ColorModeProvider'

export const onInitialClientRender = () => {
  initializeAOS()
}

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>
    <ColorModeProvider>{element}</ColorModeProvider>
  </ChakraProvider>
)
