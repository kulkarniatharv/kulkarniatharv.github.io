"use client";

import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { animated, useSpring } from 'react-spring';

import Footer from '../Footer';
import ProfileDetails from './ProfileDetails';
import SocialLinks from '../SocialLinks';

// Temporary placeholder data until we set up proper data fetching
const aboutMeData = {
  homeScreenDescription: "I'm a software engineer passionate about building user-friendly applications and exploring new technologies.",
  homeScreenProfileDetails: [
    { label: "Role", value: "Software Engineer" },
    { label: "Experience", value: "3+ years" },
    { label: "Location", value: "New York, NY" }
  ]
};

const MotionHeading = motion(Heading);

const Description = () => {
  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 500,
  });

  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', '1fr 0.5fr 3fr']}
      templateRows={['repeat(4, auto)', 'repeat(3, auto)']}
      gapY={4}
      gapX={0}
    >
      {/* Container for A and B to stay together */}
      <Box p={4} pb={0} gridColumn={['1', '1 / span 2']} gridRow={['1', '1']}>
        <Grid
          templateColumns="60% 40%"
          width="100%"
          gap={0}
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
            <div style={{ position: 'relative', width: 150, height: 150 }}>
              <Image
                src="/images/landingPageImg.png"
                alt="Profile image"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Box>
        </Grid>
      </Box>

      {/* Social Links */}
      <Box
        p={4}
        pt={2}
        pb={0}
        gridColumn={['1', '1 / span 2']}
        gridRow={['2', '2']}
        display="flex"
      >
        <SocialLinks alignment="flex-start" />
      </Box>

      {/* Description */}
      <Box
        p={7}
        mt={2}
        pt={0}
        gridColumn={['1', '1 / span 2']}
        gridRow={['3', '3']}
      >
        <Text>{aboutMeData.homeScreenDescription}</Text>
      </Box>

      {/* Profile Details */}
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
  );
};

export default Description; 