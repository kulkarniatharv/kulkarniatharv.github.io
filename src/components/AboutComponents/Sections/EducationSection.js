import React from 'react'
import {
  Box,
  Heading,
  Flex,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import aboutMeData from '../../../data/aboutme.json'

const EducationSection = props => (
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
            {/* <Text fontSize="sm">
           <strong>Grade:</strong> {entry.grade}
         </Text> */}
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
      </Flex>
    </Flex>
  </Box>
)

export default EducationSection
