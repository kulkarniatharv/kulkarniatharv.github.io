import React from 'react'
import { Box, Text, Heading, Grid, VStack } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import { useSpring, animated } from 'react-spring'

import ProfileDetails from './ProfileDetails'
import Footer from '../footer'
// import ComponentE from './ComponentE' // Assume this is the import for the new component

import aboutMeData from '../../data/aboutme.json'

const MotionHeading = motion(Heading)

const Description = () => {
  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 500,
  })

  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', '1fr 0.5fr 3fr']}
      templateRows={['repeat(4, auto)', 'repeat(3, auto)']}
      gapY={4} // Only apply vertical gap, removing horizontal gaps
      gapX={0} // Ensure no gap exists horizontally
    >
      {/* Container for A and B to stay together */}
      <Box p={4} pb={0} gridColumn={['1', '1 / span 2']} gridRow={['1', '1']}>
        <Grid
          templateColumns="60% 40%"
          width="100%"
          gap={0} // Ensure no gap within A and B
        >
          <Box
            p="3"
            pl="3"
            pr="1"
            display="flex"
            flexDirection="column"
            alignItems="left"
            justifyContent="center"
          >
            <Box>
              <Text mb={4} textAlign="left" fontSize="l">
                Welcome! I'm
              </Text>
            </Box>
            <Box>
              <animated.div style={titleSpring}>
                <MotionHeading
                  as="h1"
                  size="2xl"
                  textAlign="left"
                  fontWeight="bold"
                  letterSpacing="tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  Atharv <br />
                  Kulkarni
                </MotionHeading>
              </animated.div>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="flex-start">
            <StaticImage
              src="../../assets/images/landingPageImg.png"
              alt="Profile image"
              placeholder="blurred"
              layout="fixed"
              width={150}
              height={150}
              style={{ zIndex: '1000' }}
            />
          </Box>
        </Grid>
      </Box>

      {/* Component E */}
      <Box
        p={4}
        pt={2}
        pb={0} // Remove bottom padding to eliminate gap between E and D
        gridColumn={['1', '1 / span 2']}
        gridRow={['2', '2']}
        display="flex"
      >
        <Footer />
      </Box>

      {/* Component D */}
      <Box
        p={7}
        mt={2}
        pt={0} // Ensure top padding is removed to keep E and D together without gap
        gridColumn={['1', '1 / span 2']}
        gridRow={['3', '3']}
      >
        <Text>{aboutMeData.homeScreenDescription}</Text>
      </Box>

      {/* Component C */}
      <VStack
        p={4}
        gridColumn={['1', '3']}
        gridRow={['4', '1 / span 3']}
        justifyContent="center"
        width="100%"
      >
        <ProfileDetails details={aboutMeData.homeScreenProfileDetails} />
      </VStack>
    </Grid>
  )
}

export default Description
