/* eslint-disable react/prop-types */
// src/contexts/ColorModeProvider.js

import React, { useMemo } from 'react'
import { useColorMode } from '@chakra-ui/react'
import ColorModeContext from './ColorModeContext'

const ColorModeProvider = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const contextValue = useMemo(
    () => ({
      colorMode,
      toggleColorMode,
    }),
    [colorMode, toggleColorMode]
  )

  return (
    <ColorModeContext.Provider value={contextValue}>
      {children}
    </ColorModeContext.Provider>
  )
}

export default ColorModeProvider
