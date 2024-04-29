import React from 'react'
import {
  Box,
  Heading,
  SimpleGrid,
  Badge,
  Text,
  Button,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { useStaticQuery, graphql } from 'gatsby'

import aboutMeData from '../../../data/aboutme.json'

const CertificationsBadgesSection = props => {
  const AWSCertData = useStaticQuery(graphql`
    query {
      pdfs: file(
        relativePath: {
          eq: "AWS Certified Cloud Practitioner certificate - Atharv Kulkarni.pdf"
        }
      ) {
        publicURL
      }
    }
  `)

  const AWSCertPDF = AWSCertData.pdfs.publicURL
  return (
    <Box flex="1" id="certifications" mb={5}>
      {/* <Timeline /> */}
      <Heading as="h2" size="lg" mb={5}>
        Certifications
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {aboutMeData.certifications.map((entry, index) => (
          <Box
            key={index}
            borderWidth="1px"
            p={4}
            borderRadius="lg"
            boxShadow="md"
          >
            <Badge colorScheme="blue" mb={2}>
              {entry.badge}
            </Badge>
            <Text fontWeight="bold">{entry.name}</Text>
            <Text fontSize="sm">{entry.validity}</Text>
            {entry.verificationURL !== '' ? (
              <Button colorScheme="purple" variant="outline">
                <ChakraLink
                  href={
                    entry.badge === 'AWS' ? AWSCertPDF : entry.verificationURL
                  }
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  Verify
                </ChakraLink>
              </Button>
            ) : null}
          </Box>
        ))}
      </SimpleGrid>
      {/* <Flex flexDirection="row" flex="1">
      {aboutMeData.certifications.map(cert => (
        // console.log(cert)
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Icon
              as={cert.icon === 'FaAws' ? FaAws : FaMicrosoft}
              width="50px"
              height="auto"
            />
          </Box>
          <Box>{cert.name}</Box>
        </Flex>
      ))}
    </Flex> */}
    </Box>
  )
}

export default CertificationsBadgesSection
