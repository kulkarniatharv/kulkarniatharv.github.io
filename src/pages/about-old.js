// /* eslint-disable react/prop-types */

import {
  Badge,
  Box,
  Button,
  chakra,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useRef, useState } from 'react'
import { Events, Link as ScrollLink, scrollSpy } from 'react-scroll'

// Importing icons
import {
  faEthereum,
  faGitAlt,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {

// } from '@fortawesome/free-solid'
import { ChevronRightIcon } from '@chakra-ui/icons'

import { FaDatabase } from 'react-icons/fa'
import Layout from '../components/Layout'
import Timeline from '../components/Timeline/Timeline'

import styles from '../styles/about.module.scss'

const ChakraScrollLink = chakra(ScrollLink)

const About = () => {
  const [activeSection, setActiveSection] = useState('')
  const [paddingTop, setPaddingTop] = useState('0px')
  const [sections, setSections] = useState([
    { id: 'professional-journey', title: 'Professional Journey' },
    {
      id: 'key-skills-and-certifications',
      title: 'Key Skills and Certifications',
    },
    { id: 'education', title: 'Education' },
    { id: 'notable-projects', title: 'Notable Projects' },
    {
      id: 'accolades',
      title: 'Accolades',
    },
    // { id: 'looking-ahead', title: 'Looking Ahead' },
  ])

  const skillsAndCertifications = {
    'Programming/Scripting Languages': [
      'Javascript',
      'React.JS',
      'Python',
      'Scala', //
      'SQL', //
      'Solidity', //
    ],
    Technologies: [
      'Node.JS',
      'Apache Spark',
      'REST API',
      'GraphQL',
      'Ethereum',
      'Blockchain',
      'Hyperledger Fabric',
      'Git',
    ],
  }

  const education = [
    {
      institute:
        'International Institute Of Information Technology, Hinjewadi, Pune, India',
      instituteWebPageLink: 'https://www.isquareit.edu.in/',
      timeline: 'June 2018 - June 2022',
      grade: '9.31/10 GGPA',
      degree: 'Bachelor of Computer Engineering (Hons. Internet of Things)',
      extracurricular: [
        'Played key roles in the Computer Engineering Student Association, culminating as Chairman.',
        'Organized numerous technical and social events.',
        'Managed team projects and deadlines effectively.',
      ],
    },
  ]

  const notableProjects = [
    'Developed a variety of web applications using MERN Stack, including a Restaurant POS and Lodging Management software, a blockchain-based healthcare records system, and more.',
    'Contributed to the development of a Twitter clone and a Task Management Solution.',
    'Designed and hosted mobile-friendly websites for multiple hotels.',
  ]

  const accolades = [
    'Recognized for outstanding communication and presentation skills.',
    'Participated in the "WatsonX AI Enhancement Challenge,"demonstrating innovative applications of AI in the HR domain.',
  ]

  const getIcon = skillName => {
    switch (skillName) {
      case 'Javascript':
        return faJsSquare
      case 'React.JS':
        return faReact
      case 'Python':
        return faPython
      case 'SQL':
        return FaDatabase
      case 'Git':
        return faGitAlt
      case 'Ethereum':
        return faEthereum
      case 'Node.JS':
        return faNodeJs
      // Add cases for other skills with their respective icons
      default:
        return null // Default case if no icon is found
    }
  }

  const buttonContainerRef = useRef(null)

  const isSectionActive = sectionId => sectionId === activeSection

  const updateActiveSection = section => {
    setActiveSection(section)
    // Reset padding when a new section is active
    setPaddingTop('0px')
  }

  // const scrollToCenter = sectionId => {
  //   setActiveSection(sectionId)

  //   const newSectionsOrder = [...sections]
  //   const index = newSectionsOrder.findIndex(
  //     section => section.id === sectionId
  //   )
  //   newSectionsOrder.splice(index, 1)
  //   newSectionsOrder.splice(Math.floor(sections.length / 2), 0, sections[index])

  //   setSections(newSectionsOrder)
  // }

  // useEffect(() => {
  //   Events.scrollEvent.register('begin', () => {})
  //   Events.scrollEvent.register('end', () => {})
  //   scrollSpy.update()

  //   return () => {
  //     Events.scrollEvent.remove('begin')
  //     Events.scrollEvent.remove('end')
  //   }
  // }, [])

  useEffect(() => {
    if (activeSection && buttonContainerRef.current) {
      const button = buttonContainerRef.current.querySelector(
        `[data-section-id="${activeSection}"]`
      )
      if (button) {
        const buttonRect = button.getBoundingClientRect()
        const containerRect = buttonContainerRef.current.getBoundingClientRect()
        const containerCenter = containerRect.height / 2
        const buttonCenter = buttonRect.top + buttonRect.height / 2
        const offsetCenter = buttonCenter - containerCenter
        const scrollOffset =
          buttonRect.top -
          containerRect.top +
          buttonContainerRef.current.scrollTop -
          offsetCenter

        // Check if the button is in the first or last half of the container
        if (buttonCenter < containerCenter) {
          // Button is in the first half, add padding to the top
          setPaddingTop(`${containerCenter - buttonCenter}px`)
        } else if (
          buttonContainerRef.current.scrollHeight - buttonCenter <
          containerCenter
        ) {
          // Button is in the last half, add padding to the bottom by adjusting the container height
          setPaddingTop(
            `${
              containerCenter -
              (buttonContainerRef.current.scrollHeight - buttonCenter)
            }px`
          )
        }

        buttonContainerRef.current.scrollTo({
          top: scrollOffset,
          behavior: 'smooth',
        })
      }
    }
  }, [activeSection])

  return (
    <Layout>
      <Flex className={styles.aboutPage}>
        <Box flex="1" className={styles.content}>
          {/* The main content goes here. Ensure each section has a corresponding `id` attribute */}
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <HStack alignItems="center" mb={8} py={4}>
            <Box flex="1">
              <Text mb={3}>Hello!</Text>
              <Text mb={3}>
                I'm <strong>Atharv Kulkarni</strong>, a dynamic and
                forward-thinking <strong>Consultant at IBM</strong>, currently
                immersed in the realms of Workday integration and AI-driven
                application development.
              </Text>
              <Text>
                With a solid foundation in both technology and business, I bring
                over a year of comprehensive experience in consulting, paired
                with an{' '}
                <strong>
                  expertise in Workday and application development.
                </strong>
              </Text>
            </Box>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxWidth="350px"
              mb={10}
            >
              {/* <GatsbyImage image={landingPageImg} alt="Profile Photo" /> */}
              <StaticImage
                src="../assets/images/landingPageImg.png"
                alt="Profile Photo"
              />
            </Flex>
          </HStack>

          <Timeline />

          <Box flex="1" my={10}>
            <Heading as="h2" id="key-skills-and-certifications" size="lg">
              Key Skills
            </Heading>
            {/* Skills List */}
            {Object.keys(skillsAndCertifications).map(category => (
              <Box key={category} mt={4}>
                <Heading as="h3" size="md" fontWeight="semibold">
                  {category}
                </Heading>
                <Grid
                  templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
                  gap={6}
                >
                  {skillsAndCertifications[category].map(item => (
                    <GridItem
                      key={item}
                      boxShadow="md"
                      p={4}
                      rounded="md"
                      textAlign="center"
                    >
                      <Icon
                        as={FontAwesomeIcon}
                        icon={getIcon(item)}
                        size="2x"
                      />
                      <Text mt={2}>{item}</Text>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            ))}
          </Box>

          {/* Education Details */}
          <Box flex="1" my={10}>
            <Heading as="h2" id="education" size="lg">
              Education
            </Heading>

            {education.map(entry => (
              <>
                <Heading as="h3" size="md">
                  {entry.degree}
                </Heading>
                <Text fontSize="md" mt="2">
                  <i>
                    <a
                      href={entry.instituteWebPageLink}
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer"
                    >
                      {entry.institute}
                    </a>
                  </i>
                  <Text fontSize="sm">{entry.timeline}</Text>
                </Text>
                <Text fontSize="sm">
                  <strong>Grade:</strong> {entry.grade}
                </Text>
                <Text fontWeight="bold" fontSize="sm">
                  Extracurricular Leadership:
                </Text>
                <Text fontSize="sm">
                  {entry.extracurricular.map(item => (
                    <List spacing={2} mt={2}>
                      <ListItem>
                        <ListIcon as={ChevronRightIcon} color="arrowColor" />
                        {item}
                      </ListItem>
                    </List>
                  ))}
                </Text>
              </>
            ))}
          </Box>

          <Box flex="1" my={10}>
            <Heading as="h2" id="notable-projects" size="lg">
              Notable Projects
            </Heading>
            {/* Projects Details */}
            <List spacing={2} mt={2}>
              {notableProjects.map(item => (
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color="arrowColor" />
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>

          <Box flex="1" my={10}>
            <Heading as="h2" id="accolades" size="lg" mt={10}>
              Accolades
            </Heading>
            {/* Certifications Details */}
            <List spacing={2} mt={2}>
              {accolades.map(item => (
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color="arrowColor" />
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
          {/* <Heading as="h2" id="looking-ahead" size="lg" mt={10}>
            Looking Ahead
          </Heading>
          <Text mb={3} mt={2} pb={100}>
            As I explore new horizons, I am keen on roles that align with AI or
            application development, where I can apply my skills in technology
            and innovation to drive impactful solutions.
          </Text> */}
        </Box>

        <Box className={styles.toc} ref={buttonContainerRef}>
          {/* Table of Contents */}
          {sections.map(section => (
            <ChakraScrollLink
              key={section.id}
              to={section.id}
              spy
              smooth
              offset={-50}
              duration={500}
              onSetActive={() => updateActiveSection(section.id)}
              activeClass={styles.activeLink}
              width="100%"
              _hover={{
                textDecoration: 'none', // This ensures no underline on hover
              }}
            >
              <Button
                variant={section.id === activeSection ? 'solid' : 'outline'}
                colorScheme={section.id === activeSection ? 'purple' : 'blue'}
                w="100%"
                maxWidth="250px"
                justifyContent="center"
                textAlign="center"
                textDecoration="none" // This ensures no underline on the text
                isActive={section.id === activeSection}
                data-section-id={section.id}
                onClick={() => updateActiveSection(section.id)}
                // Apply scale transform to inactive buttons
                transform={
                  section.id === activeSection ? 'scale(1.0)' : 'scale(0.9)'
                }
                // Smooth transition for the transform effect
                transition="transform 0.2s ease-in-out"
              >
                {section.title}
              </Button>
            </ChakraScrollLink>
          ))}
        </Box>
      </Flex>
    </Layout>
  )
}

export default About

//-----------------------
