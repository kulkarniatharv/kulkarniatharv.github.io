/* eslint-disable react/prop-types */

import React from 'react'
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  Badge,
} from '@chakra-ui/react'
// import { Link, graphql, useStaticQuery } from 'gatsby'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

const About = () => (
  <Layout>
    <Box p={5}>
      <Heading as="h2" size="xl" mb={4}>
        About Me
      </Heading>
      <Text mb={3}>
        Hello! I'm Atharv Kulkarni, a dynamic and forward-thinking Consultant at
        IBM, currently immersed in the realms of Workday integration and
        AI-driven application development. With a solid foundation in both
        technology and business, I bring over a year of comprehensive experience
        in consulting, paired with a profound expertise in Workday and
        application development.
      </Text>

      <Heading as="h3" size="lg" mt={5}>
        Professional Journey
      </Heading>
      {/* IBM Experience */}
      <Text fontWeight="bold" mt={3}>
        IBM India Private Limited
      </Text>
      <Text>Role: Package Consultant - Workday Integrations</Text>
      <Text>Duration: [Start Date] to Present</Text>
      {/* Achievements */}
      <List spacing={2} mt={2}>
        <ListItem>
          Attained top-tier certifications in Workday HCM and Integrations.
        </ListItem>
        <ListItem>
          Led the development of complex Workday integrations and resolved
          critical errors.
        </ListItem>
        <ListItem>Expertise in security management and HCM concepts.</ListItem>
        <ListItem>
          Collaborated with elite clients like DirectTV and crafted HCM
          Configuration Workbooks.
        </ListItem>
        <ListItem>
          Contributed significantly to the Tools CoE team, enhancing application
          development using Java, Spring Boot, Selenium, and Maven.
        </ListItem>
        {/* Add more list items as needed */}
      </List>

      {/* Vega Innovations Experience */}
      <Text fontWeight="bold" mt={3}>
        Vega Innovations and Technoconsultants Private Limited
      </Text>
      <Text>Role: Product Development Intern</Text>
      <Text>Duration: [Start Date] to Present</Text>
      {/* Achievements */}
      <List spacing={2} mt={2}>
        <ListItem>
          Developed PoCs for MQTT-based infrastructure and central log
          aggregation systems using Elasticsearch, Kibana, and Filebeat.
        </ListItem>
      </List>

      <Heading as="h3" size="lg" mt={5}>
        Key Skills
      </Heading>
      {/* Skills List */}
      <Badge mr={2}>JavaScript</Badge>
      <Badge mr={2}>React.js</Badge>
      {/* Add more badges as needed */}

      <Heading as="h3" size="lg" mt={5}>
        Education
      </Heading>
      {/* Education Details */}
      <List spacing={2} mt={2}>
        <ListItem>
          Bachelor of Engineering, Computer Engineering (Hons. IoT)
          International Institute Of Information Technology, Hinjewadi, Pune
          June 2018 - June 2022 CGPA: 9.31
        </ListItem>
      </List>

      <Heading as="h3" size="lg" mt={5}>
        Extracurricular Leadership
      </Heading>
      {/* Leadership Details */}
      <List spacing={2} mt={2}>
        <ListItem>
          Played key roles in the Computer Engineering Student Association,
          culminating as Chairman.
        </ListItem>
        <ListItem>Organized numerous technical and social events.</ListItem>
        <ListItem>Managed team projects and deadlines effectively.</ListItem>
      </List>

      <Heading as="h3" size="lg" mt={5}>
        Notable Projects
      </Heading>
      {/* Projects Details */}
      <List spacing={2} mt={2}>
        <ListItem>
          Developed a variety of web applications using MERN Stack, including a
          Restaurant POS and Lodging Management software, a blockchain-based
          healthcare records system, and more.
        </ListItem>
        <ListItem>
          Contributed to the development of a Twitter clone and a Task
          Management Solution.
        </ListItem>
        <ListItem>
          Designed and hosted mobile-friendly websites for multiple hotels.
        </ListItem>
      </List>

      <Heading as="h3" size="lg" mt={5}>
        Certifications and Accolades
      </Heading>
      {/* Certifications Details */}
      <List spacing={2} mt={2}>
        <ListItem>AWS Certified Cloud Practitioner.</ListItem>
        <ListItem>Azure Certified Data Engineer (DP-203).</ListItem>
        <ListItem>
          Recognized for outstanding communication and presentation skills.
        </ListItem>
        <ListItem>
          Participated in the "WatsonX AI Enhancement Challenge," demonstrating
          innovative applications of AI in the HR domain.
        </ListItem>
      </List>

      <Heading as="h3" size="lg" mt={5}>
        Looking Ahead
      </Heading>
      <Text mb={3} mt={2}>
        As I explore new horizons, I am keen on roles that align with AI or
        application development, where I can apply my skills in technology and
        innovation to drive impactful solutions.
      </Text>
    </Box>
  </Layout>
)

export default About
