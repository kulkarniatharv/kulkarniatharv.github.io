/* eslint-disable react/prop-types */
// TableOfContents.js
import React from 'react'
import { Link } from 'gatsby'
import { Box, SimpleGrid, Button, Heading } from '@chakra-ui/react'

const TableOfContents = ({ sectionGroups }) => (
  <Box p={5} mx={4} rounded="md" marginBottom={5} textAlign="center">
    <Box maxW="600px" margin="auto">
      <SimpleGrid columns={{ base: 2 }} spacing={5}>
        {Object.keys(sectionGroups).map(section => (
          <Link key={section} to={`#${section}`}>
            <Button variant="outline" colorScheme="red" w="100%">
              {section}
            </Button>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  </Box>
)

export default TableOfContents
