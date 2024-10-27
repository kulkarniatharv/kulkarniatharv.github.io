/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react'
import React from 'react'
import * as styles from '../styles/footer.module.scss'
import Container from './Container'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Container>
        <SocialLinks alignment="center" />
      </Container>
    </Box>
  )
}

export default Footer
