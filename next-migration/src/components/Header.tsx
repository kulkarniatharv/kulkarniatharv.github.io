"use client";

import { Box, Flex, HStack, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Resume', path: '/resume' },
];

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <Box as="header" py={4} px={8} borderBottom="1px" borderColor="gray.200" _dark={{ borderColor: 'gray.700' }}>
      <Flex justify="space-between" align="center" maxW="7xl" mx="auto">
        <Link href="/" passHref legacyBehavior>
          <ChakraLink fontSize="xl" fontWeight="bold" _hover={{ textDecoration: 'none' }}>
            Atharv Kulkarni
          </ChakraLink>
        </Link>

        <HStack as="nav" spacing={8}>
          {navItems.map(item => (
            <Link key={item.path} href={item.path} passHref legacyBehavior>
              <ChakraLink
                fontWeight={pathname === item.path ? 'bold' : 'normal'}
                color={pathname === item.path ? 'teal.500' : 'inherit'}
                _hover={{ color: 'teal.500' }}
              >
                {item.name}
              </ChakraLink>
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header; 