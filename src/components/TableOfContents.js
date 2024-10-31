import React from 'react'
import { Box, Text, VStack, Divider } from '@chakra-ui/react'
import { Link } from 'react-scroll'

const TableOfContents = ({ headings, onClose }) => {
  return (
    <Box
      as="nav"
      position="sticky"
      top="2rem"
      p={4}
      borderLeft="1px"
      borderColor="purple.200"
      background="none"
      borderRadius="lg"
      maxHeight="calc(100vh - 6rem)"
      overflowY="auto"
      transition="all 0.2s"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 'lg',
        background: 'linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,0))',
        backdropFilter: 'blur(4px)',
        zIndex: -1,
      }}
      _hover={{
        borderColor: "purple.300",
        _before: {
          background: 'linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0))',
          backdropFilter: 'blur(8px)',
        }
      }}
      css={{
        '&::-webkit-scrollbar': { width: '4px' },
        '&::-webkit-scrollbar-track': { 
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': { 
          backgroundColor: 'rgba(159, 122, 234, 0.3)',
          borderRadius: '4px'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'rgba(159, 122, 234, 0.5)',
        }
      }}
    >
      <Text 
        fontSize="sm" 
        fontWeight="medium" 
        color="purple.600"
        mb={3}
      >
        On this page
      </Text>
      <VStack align="stretch" spacing={0.5}>
        {headings.map((heading, index) => (
          <Link
            key={index}
            to={heading.id}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={onClose}
            style={{ textDecoration: 'none' }}
          >
            <Text
              fontSize="sm"
              pl={heading.level * 3}
              py={1}
              cursor="pointer"
              color={heading.level === 1 ? "purple.600" : "gray.600"}
              fontWeight={heading.level === 1 ? "medium" : "normal"}
              opacity={heading.level === 1 ? 1 : 0.8}
              _hover={{ 
                color: 'purple.500',
                backgroundColor: 'rgba(159, 122, 234, 0.08)',
                borderRadius: 'md'
              }}
              transition="all 0.2s"
            >
              {heading.title}
            </Text>
          </Link>
        ))}
      </VStack>
    </Box>
  )
}

export default TableOfContents 