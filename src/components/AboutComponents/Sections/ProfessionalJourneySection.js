import React from 'react'
import { Heading, Box } from '@chakra-ui/react'
import TimelineItem from '../../Timeline/TimelineItem'

import aboutMeData from '../../../data/aboutme.json'

const ProfessionalJourneySection = props => (
  <Box flex="1" id="professional-journey">
    {/* <Timeline /> */}
    <Heading as="h2" mb={5} size="xl">
      Professional Journey
    </Heading>
    {aboutMeData.workExperience.map((experience, index) => (
      <TimelineItem key={index} {...experience} />
    ))}
  </Box>
)

export default ProfessionalJourneySection
