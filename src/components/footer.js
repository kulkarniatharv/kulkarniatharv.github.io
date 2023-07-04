// src/components/footer.js

//   <Box as="footer" py={4} textAlign="center">
//     <HStack spacing="24px" justifyContent="center" marginBottom="1rem">
//       <Link href="https://twitter.com/your-handle" isExternal>
//         <TwitterIcon boxSize="24px" />
//       </Link>
//       <Link href="https://github.com/your-handle" isExternal>
//         <GithubIcon boxSize="24px" />
//       </Link>
//       <Link href="https://www.linkedin.com/in/your-handle/" isExternal>
//         <LinkedinIcon boxSize="24px" />
//       </Link>
//       <Link href="mailto:your-email@example.com">
//         <EmailIcon boxSize="24px" />
//       </Link>
//     </HStack>
//     <Text fontSize="xs" color="black">
//       © {new Date().getFullYear()} Atharv Kulkarni. All rights reserved.
//     </Text>
//   </Box>

import React from "react";
import { Box, Link, Icon, Flex } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { createIcon } from "@chakra-ui/icons";

const GmailIcon = createIcon({
    displayName: "GmailIcon",
    path: (
      <svg viewBox="0 0 256 209" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
        <path d="M232.7 35.3v-1.9C232.7 15 217.7 0 197.4 0H58.6C38.3 0 23.3 15 23.3 33.4v1.9l104.7 64.8L232.7 35.3z" fill="#F2AB27"/>
        <path d="M128 174.6v34.4l106-65.3V67.5l-106 65.3z" fill="#E94235"/>
        <path d="M128 174.6l-106-65.3v1.9l106 65.3v-1.9z" fill="#F2AB27"/>
        <path d="M232.7 33.4L128 98.2 23.3 33.4v35.2l104.7 64.8 104.7-64.8V33.4z" fill="#E94235"/>
      </svg>
    ),
  });

const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" py="6">
      <Flex justify="center">
        <Link href="https://twitter.com/iatharvkulkarni" isExternal mx="2.5">
          <Icon as={FaTwitter} boxSize="6" color="#1DA1F2" />
        </Link>
        <Link href="https://github.com/kulkarniatharv" isExternal mx="2.5">
          <Icon as={FaGithub} boxSize="6" color="#333" />
        </Link>
        <Link href="https://linkedin.com/in/kulkarniatharv" isExternal mx="2.5">
          <Icon as={FaLinkedin} boxSize="6" color="#0077B5" />
        </Link>
        <Link href="mailto:iatharvkulkarni@gmail.com" mx="2.5">
          <Icon as={FaEnvelope} boxSize="6" color="#000" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;

