// src/components/header.js

import React from 'react';
import { Flex, Box, Heading, Button, useColorMode } from '@chakra-ui/react';
import Navbar from './Navbar';

const Header = (props) => {
 
  const { toggleColorModeFunction, currColorMode } = props;

  return (
    <Flex
      as="header"
      py={4}
      px={8}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Button onClick={toggleColorModeFunction}>
          {currColorMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode' }
        </Button>
      </Box>
      <Box>
        <Navbar />  
      </Box>
    </Flex>
  );
}

export default Header;