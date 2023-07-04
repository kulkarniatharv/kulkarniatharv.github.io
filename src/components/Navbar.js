// src/components/navbar.js

import React, { useState } from 'react';
import { Box, Flex, IconButton, Link, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { HamburgerIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClose = () => setIsDrawerOpen(false);
  const handleToggle = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <IconButton
        aria-label="Menu"
        icon={<HamburgerIcon />}
        onClick={handleToggle}
      />
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={handleClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader marginBottom={"10px"}></DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} alignItems="stretch">
                <MotionLink
                  as={GatsbyLink}
                  to="/"
                  fontWeight="bold"
                  fontSize="xl"
                  bg="gray.100"
                  p={4}
                  rounded="md"
                  whileHover={{ scale: 1.05, bg: "gray.200" }}
                  transition={{ duration: 0.1 }}
                  onClick={handleClose}
                >
                  Home
                </MotionLink>
                <MotionLink
                  as={GatsbyLink}
                  to="/projects"
                  fontWeight="bold"
                  fontSize="xl"
                  bg="gray.100"
                  p={4}
                  rounded="md"
                  whileHover={{ scale: 1.05, bg: "gray.200" }}
                  transition={{ duration: 0.1 }}
                  onClick={handleClose}
                >
                  Projects
                </MotionLink>
                <MotionLink
                  as={GatsbyLink}
                  to="/blog"
                  fontWeight="bold"
                  fontSize="xl"
                  bg="gray.100"
                  p={4}
                  rounded="md"
                  whileHover={{ scale: 1.05, bg: "gray.200" }}
                  transition={{ duration: 0.1 }}
                  onClick={handleClose}
                >
                  Blog
                </MotionLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Navbar;




