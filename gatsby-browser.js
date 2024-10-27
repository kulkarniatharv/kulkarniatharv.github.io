/* eslint-disable react/prop-types */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import './src/styles/global.scss'
import theme from './theme'

export const onInitialClientRender = () => {}

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>{element}</ChakraProvider>
)
