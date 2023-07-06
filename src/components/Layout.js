/* eslint-disable react/prop-types */
// src/components/Layout.js
import React from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
import Header from './header'
import Footer from './footer'
import ScrollToTopButton from './ScrollToTopButton'

import '../styles/global.scss'
import * as layoutStyles from '../styles/layout.module.scss'
import '../styles/layout-overlay-radial-gradients.scss'

const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isLightMode = colorMode === 'light'

  const overlayContainerClass = `overlay-container ${
    isLightMode ? '' : 'dark-mode'
  }`

  const toggleColorModeFunction = () => {
    toggleColorMode()
  }

  return (
    <div className={overlayContainerClass}>
      <Box className={layoutStyles.layout}>
        <Header
          toggleColorModeFunction={toggleColorModeFunction}
          currColorMode={colorMode}
        />
        <Box
          flexGrow={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {children}
          <ScrollToTopButton />
        </Box>
        <Footer currColorMode={colorMode} />
      </Box>
    </div>
  )
}

export default Layout