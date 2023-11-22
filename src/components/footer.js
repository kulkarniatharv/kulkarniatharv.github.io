/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Box, Link, Icon, Flex } from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ColorModeContext from '../contexts/ColorModeContext'

const Footer = props => {
  // const { currColorMode } = props
  const { colorMode, toggleColorMode } = useContext(ColorModeContext)
  return (
    <Box as="footer" role="contentinfo" py="6">
      <Flex justify="center">
        <Link
          className="social-icon"
          href="https://twitter.com/iatharvkulkarni"
          isExternal
          mx="2.5"
        >
          <Icon as={FaTwitter} boxSize="6" color="#1DA1F2" />
        </Link>
        <Link
          className="social-icon"
          href="https://github.com/kulkarniatharv"
          isExternal
          mx="2.5"
        >
          <Icon
            as={FaGithub}
            boxSize="6"
            color={colorMode === 'light' ? '#333' : 'FFF'}
          />
        </Link>
        <Link
          className="social-icon"
          href="https://linkedin.com/in/kulkarniatharv"
          isExternal
          mx="2.5"
        >
          <Icon as={FaLinkedin} boxSize="6" color="#0077B5" />
        </Link>
        <Link
          className="social-icon"
          href="mailto:iatharvkulkarni@gmail.com"
          mx="2.5"
        >
          <Icon
            as={FaEnvelope}
            boxSize="6"
            color={colorMode === 'light' ? '#333' : 'FFF'}
          />
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
