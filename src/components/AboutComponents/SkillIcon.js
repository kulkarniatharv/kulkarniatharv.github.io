/* eslint-disable react/prop-types */
import React from 'react'
import { Flex, Icon } from '@chakra-ui/react'

const SkillIcon = ({ icon, label }) => (
  <Flex
    py={4}
    px={2}
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="md"
  >
    <Icon as={icon} w={10} h={10} m={2} />
    {label}
  </Flex>
)

export default SkillIcon
