/* eslint-disable react/prop-types */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Link,
  Box,
  Text,
  Grid,
  UnorderedList,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'

const ProfileDetails = ({ details }) => {
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

  const renderDetailValue = value => {
    if (Array.isArray(value)) {
      return (
        <UnorderedList styleType="none" ml={0}>
          {value.map((item, itemIndex) => {
            if (
              typeof item === 'object' &&
              'linkText' in item &&
              'link' in item
            ) {
              const isAWSCert = item.linkText.includes(
                'AWS Certified Cloud Practitioner'
              )
              const linkHref = isAWSCert
                ? AWSCertData.pdfs.publicURL
                : item.link
              const displayLinkText = item.linkText

              return (
                <ListItem key={itemIndex} fontSize="sm">
                  <ListIcon as={ChevronRightIcon} />
                  <Link href={linkHref} isExternal={!isAWSCert} target="_blank">
                    {displayLinkText}
                  </Link>
                </ListItem>
              )
            }
            // Handling non-object items in the array
            return (
              <ListItem key={itemIndex} fontSize="sm">
                <ListIcon as={ChevronRightIcon} />
                {item}
              </ListItem>
            )
          })}
        </UnorderedList>
      )
    }
    if (typeof value === 'object') {
      // Object handling (single objects, not arrays)
      if ('linkText' in value && 'link' in value) {
        const isAWSCert = value.linkText.includes(
          'AWS Certified Cloud Practitioner'
        )
        const linkHref = isAWSCert ? AWSCertData.pdfs.publicURL : value.link
        return (
          <Link href={linkHref} isExternal={!isAWSCert} fontSize="sm">
            {value.linkText}
          </Link>
        )
      }
      if ('name' in value && 'verificationURL' in value) {
        // Handling specific object structures
        return (
          <Link href={value.verificationURL} isExternal fontSize="sm">
            {value.name}
          </Link>
        )
      }
    } else {
      // Handling simple string values
      return <Text fontSize="sm">{value}</Text>
    }
  }

  return (
    <Box width="100%" mx="auto">
      {Object.entries(details).map(([key, value], index) => (
        <Box
          key={index}
          pb={2}
          pt={2}
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Grid templateColumns="30% 70%" columnGap={4} px={2}>
            <Box>
              <Box position="relative" display="inline-block">
                <Text fontWeight="bold" fontSize="sm">
                  {key}
                </Text>
                <Box
                  as="span"
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  height="0.15rem"
                  bgGradient="linear(to-r, teal.300, teal.200)"
                  borderRadius="md"
                  opacity={0.5}
                />
              </Box>
            </Box>
            <Box>{renderDetailValue(value)}</Box>
          </Grid>
        </Box>
      ))}
    </Box>
  )
}

export default ProfileDetails
