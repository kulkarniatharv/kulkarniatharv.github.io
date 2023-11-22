/* eslint-disable react/prop-types */
// src/components/Layout.js
import React, { useEffect, useContext } from 'react'
import { Box, CSSReset } from '@chakra-ui/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import gsap from 'gsap'
import { Global, css } from '@emotion/react'
import Header from './header'
import Footer from './footer'
import ScrollToTopButton from './ScrollToTopButton'

// Context import
import ColorModeContext from '../contexts/ColorModeContext'

// Styles
import '../styles/global.scss'
import * as layoutStyles from '../styles/layout.module.scss'
import '../styles/layout-overlay-radial-gradients.scss'

const globalStyles = css`
  body.chakra-ui-light {
    /* override styles for light mode */
    font-family: 'Inter', sans-serif !important;
  }
  body.chakra-ui-dark {
    /* override styles for dark mode */
    font-family: 'Inter', sans-serif !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Inter', sans-serif !important;
  }
`

const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext)
  const isLightMode = colorMode === 'light'

  const overlayContainerClass = `overlay-container ${
    isLightMode ? '' : 'dark-mode'
  }`

  useEffect(() => {
    // Ensure GSAP animations only run in the browser
    if (typeof window !== 'undefined') {
      // Function to animate each gradient layer
      const animateGradientLayer = selector => {
        // Randomize initial positions
        const initialX = Math.random() * 400 - 100
        const initialY = Math.random() * 400 - 100

        gsap.to(selector, {
          backgroundPosition: `${initialX}% ${initialY}%`,
          duration: 3, // Duration of one loop of the animation
          repeat: 1, // 1 time
          yoyo: true, // Go back and forth
          ease: 'none', // No easing for constant speed
          delay: 2,
        })
      }

      // Apply the function to each gradient layer
      animateGradientLayer('.gradient-layer.one')
      animateGradientLayer('.gradient-layer.two')
    }
  }, [])

  return (
    <>
      {/* this is done so that font on every page is the same */}
      <CSSReset />
      <Global styles={globalStyles} />
      <div className={overlayContainerClass}>
        <div
          className={`gradient-layer one ${isLightMode ? 'light' : 'dark'}`}
        />
        <div
          className={`gradient-layer two ${isLightMode ? 'light' : 'dark'}`}
        />
        <Box className={layoutStyles.layout}>
          <Header />
          <Box
            flexGrow={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {children}
            <ScrollToTopButton />
          </Box>
          <Footer />
        </Box>
      </div>
    </>
  )
}

export default Layout
