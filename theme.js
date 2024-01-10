import { extendTheme, theme as base } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light', // set this to 'light' or 'dark' as per your preference
  useSystemColorMode: true, // set this to 'true' if you want to use the system color mode
}

const theme = extendTheme({
  config,
  fonts: { ...base.fonts, body: 'Montserrat', heading: 'Montserrat' },
  lineHeights: {
    normal: '1.7', // You can adjust this value as needed
  },
  colors: {
    customColorForNavLinks: {
      500: '#e094d0',
    },
    customBlue: {
      500: '#2B6CB0', // Normal state
      600: '#2C5282', // Darker shade for the hover state
    },
    customOrange: {
      500: '#DD6B20', // Normal state
      600: '#C05621', // Darker shade for the hover state
    },
  },
})

export default theme
