/* eslint-disable react/prop-types */
// TableOfContents.js
import React from 'react'
import { Link } from 'gatsby'
import { Box, SimpleGrid, Button } from '@chakra-ui/react'

const TableOfContents = ({ sectionGroups }) => (
  <SimpleGrid columns={{ base: 1 }} gap={6} justifyContent="center" mt={10}>
    {Object.keys(sectionGroups).map(section => {
      const formattedSectionGroup = section
        // Replace all hyphens with spaces
        .replace(/-/g, ' ')
        // Capitalize the first letter of each word
        .replace(/\b\w/g, letter => letter.toUpperCase())

      return (
        <Box
          boxShadow="md"
          borderRadius="md"
          borderColor="gray.200"
          width="80%"
          mx="auto"
        >
          <Link key={section} to={`#${section}`}>
            <Button variant="ghost" colorScheme="purple" w="100%">
              {formattedSectionGroup}
            </Button>
          </Link>
        </Box>
      )
    })}
  </SimpleGrid>
  // </Box>
)

export default TableOfContents
