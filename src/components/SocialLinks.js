import { Flex, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import aboutMeData from '../data/aboutme.json'

const SocialLinks = ({ alignment = 'center' }) => {
  return (
    <Flex justifyContent={alignment} alignItems="center" width="100%">
      <Link
        className="social-icon"
        href={`${aboutMeData.contactInfo.twitter.link}`}
        isExternal
        mx="2.5"
      >
        <Icon as={FaXTwitter} boxSize="6" color="#333" />
      </Link>
      <Link
        className="social-icon"
        href={`${aboutMeData.contactInfo.github.link}`}
        isExternal
        mx="2.5"
      >
        <Icon as={FaGithub} boxSize="6" color="#333" />
      </Link>
      <Link
        className="social-icon"
        href={`${aboutMeData.contactInfo.linkedin.link}`}
        isExternal
        mx="2.5"
      >
        <Icon as={FaLinkedin} boxSize="6" color="#333" />
      </Link>
      <Link
        className="social-icon"
        href="mailto:iatharvkulkarni at gmail dot com"
        mx="2.5"
      >
        <Icon as={FaEnvelope} boxSize="7" color="#333" />
      </Link>
    </Flex>
  )
}

export default SocialLinks
