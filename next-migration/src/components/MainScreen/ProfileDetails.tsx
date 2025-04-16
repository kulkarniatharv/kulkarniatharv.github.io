"use client";

import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';

interface ProfileDetail {
  label: string;
  value: string;
}

interface ProfileDetailsProps {
  details: ProfileDetail[];
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ details }) => {
  return (
    <Box width="100%">
      <Heading as="h2" size="md" mb={4}>
        Profile Details
      </Heading>
      <Grid templateColumns="repeat(1, 1fr)" gap={4}>
        {details.map((detail, index) => (
          <GridItem key={index} padding={4} borderWidth="1px" borderRadius="md">
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              {detail.label}
            </Text>
            <Text fontSize="md">{detail.value}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProfileDetails; 