import { extendTheme, theme as base } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light', // set this to 'light' or 'dark' as per your preference
  useSystemColorMode: true, // set this to 'true' if you want to use the system color mode
}

const theme = extendTheme({
  config,
  fonts: { ...base.fonts, body: 'Inter', heading: 'Inter' },
})

export default theme
