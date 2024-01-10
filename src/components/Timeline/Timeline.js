import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import TimelineItem from './TimelineItem'

const Timeline = () => {
  const experiences = [
    {
      company: 'IBM India Private Limited',
      role: 'Role: Package Consultant - Workday Integrations',
      duration: 'November 2022 - Present',
      points: [
        'Attained top-tier certifications in Workday HCM and Integrations.',
        'Led the development of complex Workday integrations and resolved critical errors.',
        'Expertise in security management and HCM concepts.',
        'Collaborated with elite clients like DirectTV and crafted HCM Configuration Workbooks.',
        'Contributed significantly to the Tools CoE team, enhancing application development using Java, Spring Boot, Selenium, and Maven.',
      ],
    },
    {
      company: 'Vega Innovations and Technoconsultants Private Limited',
      role: 'Role: Product Development Intern',
      duration: 'May 2021 to October 2021',
      points: [
        'Developed PoCs for MQTT-based infrastructure and central log aggregation systems using Elasticsearch, Kibana, and Filebeat.',
      ],
    },
    // Add more experiences as needed
  ]

  return (
    <Box id="professional-journey">
      <Heading as="h2" size="xl">
        Professional Journey
      </Heading>
      {experiences.map((experience, index) => (
        <TimelineItem key={index} {...experience} />
      ))}
    </Box>
  )
}

export default Timeline
