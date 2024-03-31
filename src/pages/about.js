import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Grid,
  GridItem,
  Button,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link, navigate } from 'gatsby'

import Layout from '../components/Layout'
import IntroSection from '../components/AboutComponents/Sections/IntroSection'
import ProfessionalJourneySection from '../components/AboutComponents/Sections/ProfessionalJourneySection'
import KeySkillsSection from '../components/AboutComponents/Sections/KeySkillsSection'
import CertificationsBadgesSection from '../components/AboutComponents/Sections/CertificationsBadgesSection'
import EducationSection from '../components/AboutComponents/Sections/EducationSection'
import AccoladesSection from '../components/AboutComponents/Sections/AccoladesSection'

const About = () => {
  const [activeSection, setActiveSection] = useState('intro')
  const sectionRefs = useRef({
    intro: useRef(null),
    'professional-journey': useRef(null),
    'key-skills': useRef(null),
    certifications: useRef(null),
    education: useRef(null),
    accolades: useRef(null),
  })

  const componentsList = [
    { id: 'intro', title: 'Intro', Component: IntroSection },
    {
      id: 'professional-journey',
      title: 'Professional Journey',
      Component: ProfessionalJourneySection,
    },
    { id: 'key-skills', title: 'Key Skills', Component: KeySkillsSection },
    {
      id: 'certifications',
      title: 'Certifications and Badges',
      Component: CertificationsBadgesSection,
    },
    { id: 'education', title: 'Education', Component: EducationSection },
    { id: 'accolades', title: 'Accolades', Component: AccoladesSection },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (
            entry.isIntersecting &&
            entry.boundingClientRect.top < window.innerHeight / 2
          ) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    )

    // Start observing
    componentsList.forEach(({ id }) => {
      const el = sectionRefs.current[id].current
      if (el) observer.observe(el)
    })

    // Cleanup function
    return () => {
      componentsList.forEach(({ id }) => {
        const el = sectionRefs.current[id].current
        // Ensure the element is both non-null and was previously observed
        if (el && observer) observer.unobserve(el)
      })
    }
  }, [componentsList])

  // Active and hover styles
  const hoverBg = 'gray.600'
  const hoverColor = 'white'
  const activeBg = 'gray.800'
  const activeColor = 'white'

  // Function to handle box click
  const handleBoxClick = id => {
    sectionRefs.current[id].current.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id) // Update the active section state
    navigate(`#${id}`) // Navigate using Gatsby's navigate function for hash navigation
  }

  return (
    <Layout>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: '1fr 3fr' }}
        gap={6}
        maxHeight="75vh"
        maxWidth="1400px"
        mx={4}
        justifyContent="center"
      >
        <GridItem>
          <VStack align="center" spacing={4} position="sticky" top={0} mt={10}>
            {componentsList.map(({ id, title }) => (
              <Box
                key={id}
                as="button"
                onClick={() => handleBoxClick(id)}
                p={2}
                bg={activeSection === id ? activeBg : 'transparent'}
                color={activeSection === id ? activeColor : 'inherit'}
                _hover={{ bg: hoverBg, color: hoverColor }}
                borderRadius="md"
                width="80%"
                textAlign="center"
                transition="background 0.2s, color 0.2s" // Smooth transition for background and color
              >
                <strong>{title}</strong>
              </Box>
            ))}
          </VStack>
        </GridItem>
        <GridItem overflowY="auto">
          {componentsList.map(({ id, Component }) => (
            <Box key={id} id={id} ref={sectionRefs.current[id]} py={5}>
              <Component />
            </Box>
          ))}
        </GridItem>
      </Grid>
    </Layout>
  )
}

export default About
