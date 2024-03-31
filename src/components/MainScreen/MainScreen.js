import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Description from './Description'
import NotableProjects from './NotableProjects'

// The MainScreen component uses Chakra UI's Box component for layout purposes
const MainScreen = props => (
  <Box maxW="1300px" m="0 auto">
    <Box
      as="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Description />
    </Box>

    <Box as="section" mt={5}>
      <NotableProjects projects={props.projects} />
    </Box>
  </Box>
)

export default MainScreen
