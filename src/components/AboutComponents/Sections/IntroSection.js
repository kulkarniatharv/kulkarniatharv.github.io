import React from 'react'
import { SimpleGrid, Flex, Text } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'

const IntroSection = props => (
  <SimpleGrid
    gridTemplateColumns={{ sm: '1fr', md: '2fr 1fr' }}
    spacing={5}
    placeItems="center"
    id="intro"
  >
    <Flex flexDirection="column" pl={4} justifyContent="center">
      <Text mb={3}>Hello!</Text>
      <Text mb={3}>
        I'm <strong>Atharv Kulkarni</strong>, a dynamic and forward-thinking{' '}
        <strong>Consultant at IBM</strong>, currently immersed in the realms of
        Workday integration and AI-driven application development.
      </Text>
      <Text>
        With a solid foundation in both technology and business, I bring over a
        year of comprehensive experience in consulting, paired with an{' '}
        <strong>expertise in Workday and application development.</strong>
      </Text>
    </Flex>
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      maxWidth="350px"
      mb={10}
    >
      {/* <GatsbyImage image={landingPageImg} alt="Profile Photo" /> */}
      <StaticImage
        src="../../../assets/images/landingPageImg.png"
        alt="Profile Photo"
      />
    </Flex>
  </SimpleGrid>
)

export default IntroSection
