/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Text, Heading, List, ListIcon, ListItem } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const TimelineItem = ({ company, role, duration, points }) => (
  <Box position="relative" mb={8}>
    <Box
      width="2px"
      bg="blue.500"
      position="absolute"
      left="10px"
      top="0"
      bottom="2"
    />
    <Box pl={8}>
      <Heading size="md" as="h3" mb={2}>
        {company}
      </Heading>
      <Text fontSize="sm" mb={1}>
        {role}
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
      {/* </VStack> */}
    </Box>
    <Box
      width="20px"
      height="20px"
      bg="blue.500"
      borderRadius="full"
      position="absolute"
      left="1px"
      top="0"
    />
  </Box>
)

export default TimelineItem
