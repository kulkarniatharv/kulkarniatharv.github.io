"use client";

import { HStack, IconButton, Link } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface SocialLinksProps {
  alignment?: 'flex-start' | 'center' | 'flex-end';
}

const SocialLinks: React.FC<SocialLinksProps> = ({ alignment = 'center' }) => {
  const socialLinks = [
    {
      label: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/kulkarniAtharv',
    },
    {
      label: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/kulkarniatharv',
    },
    {
      label: 'Twitter',
      icon: <FaTwitter />,
      href: 'https://twitter.com/atharv_kulkarni',
    },
    {
      label: 'Email',
      icon: <MdEmail />,
      href: 'mailto:contact@example.com',
    },
  ];

  return (
    <HStack spacing={4} justify={alignment}>
      {socialLinks.map((social) => (
        <Link key={social.label} href={social.href} isExternal>
          <IconButton
            aria-label={social.label}
            icon={social.icon}
            size="md"
            variant="ghost"
            colorScheme="gray"
            _hover={{ bg: 'gray.100', _dark: { bg: 'gray.700' } }}
          />
        </Link>
      ))}
    </HStack>
  );
};

export default SocialLinks; 