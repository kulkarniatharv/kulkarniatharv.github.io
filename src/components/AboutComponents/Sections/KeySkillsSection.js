import React from 'react'
import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiPython,
  SiMysql,
  SiMicrosoftazure,
  SiSolidity,
  SiWeb3Dotjs,
  SiHyperledger,
} from 'react-icons/si'

import SkillIcon from '../SkillIcon'

import aboutMeData from '../../../data/aboutme.json'

const KeySkillsSection = props => {
  // Create a mapping of string names to icon components
  const ICONS_MAP = {
    JavaScript: SiJavascript,
    'React.js': SiReact,
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    MongoDB: SiMongodb,
    GraphQL: SiGraphql,
    Git: SiGit,
    Python: SiPython,
    SQL: SiMysql,
    Azure: SiMicrosoftazure,
    Solidity: SiSolidity,
    'Web3.js': SiWeb3Dotjs,
    'Hyperledger Fabric': SiHyperledger,
  }

  return (
    <Flex id="key-skills" flexDirection="column" mb={5}>
      <Heading as="h1" size="lg" mb={5}>
        Key Skills
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} m={4} my={0}>
        {/*  columns={{ sm: 1, md: 2, lg: 3 }} */}
        {Object.keys(aboutMeData.skills).map((entry, index) => (
          <Flex
            flexDirection="column"
            alignItems="center"
            p={5}
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
          >
            <Text fontSize="xl" mb={8}>
              <strong>{aboutMeData.skills[entry].title}</strong>
            </Text>

            <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={6} p={6}>
              {aboutMeData.skills[entry].skills.map(skill => (
                <SkillIcon icon={ICONS_MAP[skill]} label={`${skill}`} />
              ))}
            </SimpleGrid>
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  )
}
export default KeySkillsSection
