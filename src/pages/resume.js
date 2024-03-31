/* eslint-disable new-cap */
// src/pages/index.js
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Box,
  Text,
  Flex,
  Link,
  Icon,
  Heading,
  VStack,
  HStack,
  Badge,
  Wrap,
  WrapItem,
  Tag,
  SimpleGrid,
  Container,
  Button,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from 'react-icons/fa'
// import { AiOutlinePrinter } from 'react-icons/ai'
import { MdFileDownload } from 'react-icons/md'
// import html2canvas from 'html2canvas'
// import jsPDF from 'jspdf'

import Layout from '../components/Layout'

import '../styles/resume.module.scss'
import aboutMeData from '../data/aboutme.json'

const ResumePage = () => {
  const ResumePDFData = useStaticQuery(graphql`
    query {
      pdfs: file(relativePath: { eq: "Website Resume - Atharv Kulkarni.pdf" }) {
        name
        publicURL
      }
    }
  `)

  const ResumePDF = ResumePDFData.pdfs.publicURL
  const ResumePDFName = ResumePDFData.pdfs.name

  return (
    <Layout>
      <Container maxW="container.md" p={4}>
        <Box mb={4} textAlign="right">
          <Button
            leftIcon={<MdFileDownload />}
            colorScheme="gray"
            variant="outline"
            _hover={{ bg: 'gray.700', color: 'white' }}
            size="md"
            borderWidth="1px"
            borderColor="black"
            className="download-pdf-button"
          >
            <Link
              href={ResumePDF}
              target="_blank"
              style={{ textDecoration: 'none' }}
              download={ResumePDFName}
            >
              Download as PDF
            </Link>
            >
            <Link
              href={ResumePDF}
              target="_blank"
              style={{ textDecoration: 'none' }}
              download={ResumePDFName}
            >
              Download as PDF
            </Link>
          </Button>
        </Box>
        <Box
          as="article"
          id="resume"
          p={4}
          boxShadow="2xl"
          borderRadius="md"
          bg="white"
        >
          {/* Intro section */}
          <Box p={4} className="resume-section">
            <Flex alignItems="center" justifyContent="space-between">
              <Box>
                <Text fontSize="4xl" fontWeight="bold">
                  Atharv Kulkarni
                </Text>
                <Text fontSize="md">
                  Consultant at IBM, currently immersed in the realms of Workday
                  integration and AI-driven application development.
                </Text>

                {/* Contact details */}
                <Flex alignItems="left" flexDirection="column" mt={4}>
                  <Box mb={1}>
                    <Text fontSize="sm">
                      <Icon as={FaEnvelope} mx={4} />
                      {aboutMeData.contactInfo.email}
                    </Text>
                  </Box>

                  {/* <Box mb={1}>
                    <Text fontSize="sm">
                      <Icon as={FaPhoneAlt} mx={4} />
                      {aboutMeData.contactInfo.phone}
                    </Text>
                  </Box> */}

                  <Box mb={1}>
                    <Link
                      href={`${aboutMeData.contactInfo.website.link}`}
                      isExternal
                    >
                      <Text fontSize="sm">
                        <Icon as={FaGlobe} mx={4} />
                        {aboutMeData.contactInfo.website.text}
                      </Text>
                    </Link>
                  </Box>

                  <Box mb={1}>
                    <Link
                      href={`${aboutMeData.contactInfo.linkedin.link}`}
                      isExternal
                    >
                      <Text fontSize="sm">
                        <Icon as={FaLinkedin} mx={4} />
                        {aboutMeData.contactInfo.linkedin.text}
                      </Text>
                    </Link>
                  </Box>

                  <Box mb={1}>
                    <Link
                      href={`${aboutMeData.contactInfo.github.link}`}
                      isExternal
                    >
                      <Text fontSize="sm">
                        <Icon as={FaGithub} mx={4} />
                        {aboutMeData.contactInfo.github.text}
                      </Text>
                    </Link>
                  </Box>
                </Flex>
              </Box>
              <Box maxWidth="250px">
                <StaticImage
                  src="../assets/images/landingPageImg.png"
                  alt="Profile Photo"
                />
              </Box>
            </Flex>
          </Box>

          {/* About Section */}
          <Box p={4} className="resume-section">
            <Heading as="h3" size="lg" mb={2}>
              About
            </Heading>
            <Text fontSize="md">
              I'm <strong>Atharv Kulkarni</strong>, a dynamic and
              forward-thinking <strong>Consultant at IBM</strong>, currently
              immersed in the realms of Workday integration and AI-driven
              application development. With a solid foundation in both
              technology and business, I bring over a year of comprehensive
              experience in consulting, paired with an{' '}
              <strong>expertise in Workday and application development.</strong>
            </Text>
          </Box>

          {/* Work experiences */}
          <Box p={4} className="resume-section">
            <Heading className="item" as="h3" size="lg" mb={4}>
              Work Experience
            </Heading>
            <VStack spacing={5} align="stretch">
              {aboutMeData.workExperience.map((experience, index) => (
                <Box
                  key={index}
                  className="item"
                  borderWidth="1px"
                  p={4}
                  borderRadius="md"
                >
                  <HStack justifyContent="space-between">
                    <Text fontWeight="bold">
                      {experience.role}{' '}
                      <Badge colorScheme="green" mr={2}>
                        {experience.badge}
                      </Badge>
                    </Text>

                    <Text fontSize="sm">{experience.duration}</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize="md">{experience.company}</Text>
                  </HStack>
                  <List spacing={3} mt={6}>
                    {experience.points.map((point, indexNest) => (
                      <ListItem key={indexNest} fontSize="sm">
                        <ListIcon as={ChevronRightIcon} color="arrowColor" />
                        {point}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Certifications section */}
          <Box p={4} className="resume-section">
            <Heading as="h3" size="lg" mb={4}>
              Certifications
            </Heading>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
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
          </Box>

          {/* Skills section */}
          <Box p={4} className="resume-section">
            <Heading as="h3" size="lg" mb={4}>
              Skills
            </Heading>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
              {Object.keys(aboutMeData.skills).map((entry, index) => (
                <Box
                  key={index}
                  borderWidth="1px"
                  p={4}
                  borderRadius="lg"
                  boxShadow="md"
                >
                  <Badge colorScheme="purple" mb={2}>
                    {aboutMeData.skills[entry].title}
                  </Badge>
                  <Wrap my="5">
                    {aboutMeData.skills[entry].skills.map(skill => (
                      <WrapItem key={skill}>
                        <Tag
                          size="md"
                          variant="solid"
                          colorScheme="purple"
                          borderRadius="full"
                        >
                          {skill}
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Project section */}
          <Box p={4} className="resume-section">
            <Heading as="h3" size="lg" mb={4}>
              Projects
            </Heading>
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
          </Box>

          {/* Education section */}
          <Box p={4} className="resume-section">
            <Heading as="h3" size="lg" mb={4}>
              Education
            </Heading>
            <VStack spacing={3} align="stretch">
              {aboutMeData.education.map((entry, index) => (
                <Box borderWidth="1px" p={4} borderRadius="md">
                  <Text fontWeight="bold">{entry.institute}</Text>
                  <Text fontSize="sm">{entry.degree}</Text>
                  <Text fontSize="sm">{entry.timeline}</Text>
                  {/* <Text fontSize="sm">Grade: {entry.grade}</Text> */}
                </Box>
              ))}
            </VStack>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default ResumePage
