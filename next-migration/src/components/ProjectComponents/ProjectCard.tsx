"use client";

import { Badge, Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    slug: string;
    lastModified?: string | null;
    cardBadge?: string;
    cardBadgeColorScheme?: string;
  };
  clampDescription?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, clampDescription = false }) => {
  const { title, description, slug, lastModified, cardBadge, cardBadgeColorScheme } = project;

  return (
    <Link href={`/projects/${slug}`} passHref legacyBehavior>
      <Box
        as="a"
        display="flex"
        flexDirection="column"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        height="100%"
        transition="all 0.2s"
        _hover={{
          transform: 'translateY(-4px)',
          shadow: 'lg',
        }}
        cursor="pointer"
      >
        <Box display="flex" alignItems="center" mb={2}>
          <Heading as="h3" size="md" flex="1">
            {title}
          </Heading>
          {cardBadge && (
            <Badge colorScheme={cardBadgeColorScheme || 'blue'} ml={2}>
              {cardBadge}
            </Badge>
          )}
        </Box>
        <Text
          flex="1"
          color="gray.600"
          _dark={{ color: 'gray.300' }}
          noOfLines={clampDescription ? 3 : undefined}
        >
          {description}
        </Text>
        {lastModified && (
          <Text fontSize="sm" mt={2} color="gray.500">
            Last updated: {lastModified}
          </Text>
        )}
      </Box>
    </Link>
  );
};

export default ProjectCard; 