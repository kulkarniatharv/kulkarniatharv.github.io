/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState, useRef } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListIcon,
  ListItem,
  Button,
  SimpleGrid,
  Badge,
  Link as ChakraLink,
  Icon,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiPython,
  SiMysql,
  SiMicrosoftazure,
  SiSolidity,
  SiWeb3Dotjs,
  SiHyperledger,
} from 'react-icons/si'
import { motion, AnimatePresence } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Layout from '../components/Layout'
// import TimelineItem from '../components/Timeline/TimelineItem'

import * as styles from '../styles/about.module.scss'
import aboutMeData from '../data/aboutme.json'

// Data for the components
const sections = [
  { id: 'about', title: 'About' },
  { id: 'professional-journey', title: 'Professional Journey' },
  {
    id: 'key-skills',
    title: 'Key Skills',
  },
  {
    id: 'certifications',
    title: 'Certifications',
  },
  { id: 'education', title: 'Education' },
  { id: 'notable-projects', title: 'Notable Projects' },
  { id: 'accolades', title: 'Accolades' },
]

/// ////////////////////////////////////////////////////////////////////////

const SkillIcon = ({ icon, label }) => (
  <Flex
    py={4}
    px={2}
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="md"
  >
    <Icon as={icon} w={10} h={10} m={2} />
    {label}
  </Flex>
)

// Create a mapping of string names to icon components
const ICONS_MAP = {
  JavaScript: SiJavascript,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
  GraphQL: SiGraphql,
  Git: SiGit,
  Python: SiPython,
  SQL: SiMysql,
  Azure: SiMicrosoftazure,
  Solidity: SiSolidity,
  'Web3.js': SiWeb3Dotjs,
  'Hyperledger Fabric': SiHyperledger,
}

const SectionComponent = React.forwardRef(
  ({ section, isActive, onScroll, onWheel }, ref) =>
    isActive ? (
      <motion.div
        ref={ref}
        key={section.id}
        onScroll={onScroll} // Handle scroll events for overflow
        onWheel={onWheel} // Handle wheel events when there is no overflow
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          height: '100%', // Full height of the container
          overflowY: 'auto', // Scrollable if content overflows
          width: '100%',
        }}
      >
        {section.id === 'about' && (
          <SimpleGrid
            gridTemplateColumns={{ sm: '1fr', md: '2fr 1fr' }}
            spacing={5}
            placeItems="center"
          >
            <Flex flexDirection="column" pl={4} justifyContent="center">
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
                src="../assets/images/landingPageImg.png"
                alt="Profile Photo"
              />
            </Flex>
          </SimpleGrid>
        )}

        {section.id === 'professional-journey' && (
          <Box flex="1" id="professional-journey">
            {/* <Timeline /> */}
            <Heading as="h2" size="xl">
              Professional Journey
            </Heading>
            {aboutMeData.workExperience.map((experience, index) => (
              <TimelineItem key={index} {...experience} />
            ))}
          </Box>
        )}

        {section.id === 'key-skills' && (
          <Flex id="key-skills" flexDirection="column">
            <Heading as="h1" size="lg">
              Key Skills
            </Heading>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} m={4}>
              {/*  columns={{ sm: 1, md: 2, lg: 3 }} */}
              {Object.keys(aboutMeData.skills).map((entry, index) => (
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  p={5}
                  key={index}
                  borderWidth="1px"
                  borderRadius="lg"
                  boxShadow="md"
                >
                  <Text fontSize="xl" mb={8}>
                    <strong>{aboutMeData.skills[entry].title}</strong>
                  </Text>

                  <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={6} p={6}>
                    {aboutMeData.skills[entry].skills.map(skill => (
                      <SkillIcon icon={ICONS_MAP[skill]} label={`${skill}`} />
                    ))}
                  </SimpleGrid>
                </Flex>
              ))}
            </SimpleGrid>
          </Flex>
        )}

        {section.id === 'certifications' && (
          <Box flex="1" id="certifications">
            {/* <Timeline /> */}
            <Heading as="h2" size="xl">
              Certifications
            </Heading>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} my="5">
              {aboutMeData.certifications.map((entry, index) => (
                <Box
                  key={index}
                  borderWidth="1px"
                  p={4}
                  borderRadius="lg"
                  boxShadow="md"
                >
                  <Badge colorScheme="blue" mb={2}>
                    {entry.badge}
                  </Badge>
                  <Text fontWeight="bold">{entry.name}</Text>
                  <Text fontSize="sm">{entry.validity}</Text>
                </Box>
              ))}
            </SimpleGrid>
            {/* <Flex flexDirection="row" flex="1">
              {aboutMeData.certifications.map(cert => (
                // console.log(cert)
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box>
                    <Icon
                      as={cert.icon === 'FaAws' ? FaAws : FaMicrosoft}
                      width="50px"
                      height="auto"
                    />
                  </Box>
                  <Box>{cert.name}</Box>
                </Flex>
              ))}
            </Flex> */}
          </Box>
        )}

        {section.id === 'education' && (
          <Box my={10} id="education">
            <Heading as="h2" size="lg">
              Education
            </Heading>

            <Flex>
              <Flex flexDirection="column" alignItems="center">
                <Box
                  width="2px"
                  height="90%"
                  bg="blue.500"
                  left="10px" // top="0" bottom="2"
                />
              </Flex>
              <Flex flexDirection="column" p={4}>
                {aboutMeData.education.map(entry => (
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
                            <ListIcon
                              as={ChevronRightIcon}
                              color="arrowColor"
                            />
                            {item}
                          </ListItem>
                        </List>
                      ))}
                    </Text>
                  </>
                ))}
              </Flex>
            </Flex>
          </Box>
        )}

        {section.id === 'notable-projects' && (
          <Box flex="1" my={10} id="notable-projects">
            <Heading as="h2" size="lg">
              Notable Projects
            </Heading>
            {/* Projects Details */}
            <List spacing={2} mt={2}>
              <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
                {aboutMeData.projects.map((project, index) => (
                  <Box
                    key={index}
                    borderWidth="1px"
                    p={4}
                    borderRadius="lg"
                    boxShadow="md"
                  >
                    <Badge colorScheme="green" mb={2}>
                      {project.badge}
                    </Badge>
                    <Text fontWeight="bold">{project.name}</Text>
                    <Text fontSize="sm">{project.description}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </List>
          </Box>
        )}

        {section.id === 'accolades' && (
          <Box flex="1" my={10} id="accolades">
            <Heading as="h2" size="lg" mt={10}>
              Accolades
            </Heading>
            {/* Certifications Details */}

            <Flex>
              <Flex flexDirection="column" alignItems="center">
                <Box
                  width="2px"
                  height="100%"
                  bg="blue.500"
                  left="10px" // top="0" bottom="2"
                />
              </Flex>
              <Flex px={4}>
                <List spacing={2} mt={2}>
                  {aboutMeData.accolades.map(item => (
                    <ListItem>
                      <ListIcon as={ChevronRightIcon} color="arrowColor" />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Flex>
            </Flex>
          </Box>
        )}
      </motion.div>
    ) : null
)

const TimelineItem = ({ company, role, duration, points }) => (
  <Flex mb={8}>
    <Flex flexDirection="column" alignItems="center">
      <Box
        width="20px"
        height="20px"
        bg="blue.500"
        borderRadius="full"
        // position="absolute"
        // left="1px"
        // top="0"
      />
      <Box
        width="2px"
        height="100%"
        bg="blue.500"
        left="10px" // top="0" bottom="2"
      />
    </Flex>
    <Box pl={4}>
      <Heading size="lg" as="h3" mb={2}>
        {role}
      </Heading>
      <Text fontSize="md" mb={1}>
        <strong>{company}</strong>
      </Text>
      <Text fontSize="sm" color="gray.600" mb={4}>
        {duration}
      </Text>
      <List spacing={3} mt={6}>
        {points.map((point, index) => (
          <ListItem key={index} fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="arrowColor" />
            {point}
          </ListItem>
        ))}
      </List>
    </Box>
  </Flex>
)

const About = () => {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef(sections.map(() => React.createRef()))
  const scrollDelta = useRef(0) // To track cumulative scroll delta
  const scrollThreshold = 200 // Adjust this value to control sensitivity

  const isSectionActive = sectionIndex => sectionIndex === activeSection

  // Handle scroll events
  const handleScroll = e => {
    const { scrollTop, scrollHeight, clientHeight } = e.target
    const atBottom = scrollTop + clientHeight >= scrollHeight
    const atTop = scrollTop === 0

    if (atBottom && activeSection < sections.length - 1) {
      setActiveSection(prevActiveSection => prevActiveSection + 1)
    } else if (atTop && activeSection > 0) {
      setActiveSection(prevActiveSection => prevActiveSection - 1)
    }
  }

  const handleWheel = e => {
    const currentSectionRef = sectionRefs.current[activeSection].current
    if (!currentSectionRef) return

    const { scrollTop, scrollHeight, clientHeight } = currentSectionRef
    const atBottom = scrollTop + clientHeight >= scrollHeight
    const atTop = scrollTop === 0

    scrollDelta.current += e.deltaY // Accumulate scroll delta

    // Check if we've exceeded our scroll threshold
    if (Math.abs(scrollDelta.current) > scrollThreshold) {
      if (atBottom && e.deltaY > 0 && activeSection < sections.length - 1) {
        setActiveSection(prevActiveSection => prevActiveSection + 1)
      } else if (atTop && e.deltaY < 0 && activeSection > 0) {
        setActiveSection(prevActiveSection => prevActiveSection - 1)
      }
      scrollDelta.current = 0 // Reset the scroll delta after changing sections
    }
  }

  // const debouncedHandleWheel = debounce(handleWheel, 200) // Adjust the 200ms delay as needed

  return (
    <Layout>
      <Flex m={10} className={styles.aboutPage}>
        <Box className={styles.toc}>
          {/* Table of Contents */}
          {sections.map((section, index) => (
            <Button
              key={section.id}
              variant={index === activeSection ? 'solid' : 'outline'}
              colorScheme={index === activeSection ? 'purple' : 'blue'}
              w="100%"
              maxWidth="280px"
              justifyContent="center"
              textAlign="center"
              textDecoration="none"
              isActive={index === activeSection}
              onClick={() => setActiveSection(index)}
              style={{
                opacity: isSectionActive(index) ? 1 : 0.9,
                transform:
                  index === activeSection ? 'scale(1.0)' : 'scale(0.9)',
              }}
              transition="transform 0.2s ease-in-out, filter 0.2s ease-in-out"
              size="lg"
              mb={3}
            >
              {section.title}
            </Button>
          ))}
        </Box>

        <Box px={10} mx={10} className={styles.content}>
          <AnimatePresence>
            {sections.map((section, index) => (
              <SectionComponent
                key={section.id}
                section={section}
                isActive={index === activeSection}
                // onScroll={handleScroll}
                onWheel={handleWheel}
                ref={sectionRefs.current[index]} // Pass the ref for the section
              />
            ))}
          </AnimatePresence>
        </Box>
      </Flex>
    </Layout>
  )
}

export default About
