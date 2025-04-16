"use client";

import { Box, BoxProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface ContainerProps extends BoxProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, ...rest }) => (
  <Box
    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className || ''}`}
    {...rest}
  >
    {children}
  </Box>
);

export default Container; 