// src/components/header.js

import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import Navbar from './Navbar';

const Header = () => (
  <Flex
    as="header"
    py={4}
    px={8}
    justifyContent="space-between"
    alignItems="center"
  >
    <Box>
      <Heading as="h1" size="md" fontWeight="bold" color="black">
        AK
      </Heading>
    </Box>
    <Box>
      <Navbar />  
    </Box>
  </Flex>
);

export default Header;