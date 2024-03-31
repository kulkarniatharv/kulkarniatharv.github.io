import React from 'react'
import { Box, Heading, Flex, List, ListItem, ListIcon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import aboutMeData from '../../../data/aboutme.json'

const AccoladesSection = props => (
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
)

export default AccoladesSection
