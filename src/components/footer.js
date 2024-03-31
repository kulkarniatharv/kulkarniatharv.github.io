/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Link, Icon, Flex } from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ColorModeContext from '../contexts/ColorModeContext'

import aboutMeData from '../data/aboutme.json'

const Footer = props => {
  // const { currColorMode } = props
  const { colorMode, toggleColorMode } = useContext(ColorModeContext)
  return (
    <Flex justifyContent="center" alignItems="center">
      <Link
        className="social-icon"
        href={`${aboutMeData.contactInfo.twitter.link}`}
        isExternal
        mx="2.5"
      >
        <Icon
          as={FaTwitter}
          boxSize="6"
          color="#333"
          // color="#1DA1F2"
        />
      </Link>
      <Link
        className="social-icon"
        href={`${aboutMeData.contactInfo.github.link}`}
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
        href={`${aboutMeData.contactInfo.linkedin.link}`}
        isExternal
        mx="2.5"
      >
        <Icon
          as={FaLinkedin}
          boxSize="6"
          color="#333"
          // color="#0077B5"
        />
      </Link>
      <Link
        className="social-icon"
        href="mailto:iatharvkulkarni at gmail dot com"
        mx="2.5"
      >
        <Icon
          as={FaEnvelope}
          boxSize="7"
          color={colorMode === 'light' ? '#333' : 'FFF'}
        />
      </Link>
    </Flex>
  )
}

export default Footer
