"use client";

import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box textAlign="center" py={4}>
      <Text fontSize="sm" color="gray.500">
        © {currentYear} Atharv Kulkarni. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer; 