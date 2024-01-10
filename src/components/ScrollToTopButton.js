import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import useScrollTrigger from './useScrollTrigger'

const ScrollToTopButton = () => {
  const show = useScrollTrigger({ threshold: 100 })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return show ? (
    <IconButton
      position="fixed"
      bottom="1rem"
      right="1rem"
      size="md"
      fontSize="lg"
      variant="solid"
      colorScheme="purple"
      isRound
      icon={<ArrowUpIcon />}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    />
  ) : null
}

export default ScrollToTopButton
