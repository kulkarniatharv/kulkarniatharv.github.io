import {
    Box,
    Heading,
    HStack,
    Link,
    Tag,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

const ProjectHeader = ({ frontmatter }) => (
  <FadeInSection>
    <VStack align="start" spacing={6} mb={12}>
      <Box w="full">
        <Heading 
          as="h1" 
          size="2xl" 
          bgGradient="linear(to-r, purple.500, purple.700)"
          bgClip="text"
          mb={4}
        >
          {frontmatter.title}
        </Heading>
        
        {frontmatter.description && (
          <Text fontSize="lg" color="gray.600" mb={4}>
            {frontmatter.description}
          </Text>
        )}
      </Box>

      <HStack spacing={8} wrap="wrap" align="flex-start">
        <HStack spacing={8} align="flex-start">
          {frontmatter.duration && (
            <Box>
              <Text fontWeight="medium" color="gray.500" fontSize="sm">Duration</Text>
              <Text color="gray.700">{frontmatter.duration}</Text>
            </Box>
          )}
          {frontmatter.role && (
            <Box>
              <Text fontWeight="medium" color="gray.500" fontSize="sm">Role</Text>
              <Text color="gray.700">{frontmatter.role}</Text>
            </Box>
          )}
          {frontmatter.repoLink && (
            <Link 
              href={frontmatter.repoLink}
              isExternal
              _hover={{ textDecoration: 'none' }}
              mt={4}
            >
              <Box
                as="button"
                color="gray.600"
                _hover={{ 
                  color: 'purple.500',
                  transform: 'translateY(-2px)'
                }}
                transition="all 0.2s"
              >
                <svg height="20" width="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </Box>
            </Link>
          )}
        </HStack>
      </HStack>

      {frontmatter.techStack && frontmatter.techStack.length > 0 && (
        <Wrap spacing={2}>
          {frontmatter.techStack.map(tech => (
            <WrapItem key={tech}>
              <Tag 
                size="md" 
                colorScheme="purple" 
                variant="subtle"
                borderRadius="full"
                px={3}
                py={1}
              >
                {tech}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      )}
    </VStack>
  </FadeInSection>
)

export default ProjectHeader 