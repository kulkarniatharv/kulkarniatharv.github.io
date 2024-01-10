/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

// Define the section data or import it if it's coming from an external source
const sections = [
  {
    id: 'section1',
    title: 'Section 1',
    content:
      'Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1... Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1... Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1... Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1... Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1... Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...Content for Section 1...',
  },
  {
    id: 'section2',
    title: 'Section 2',
    content:
      'Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 ',
  },
  { id: 'section3', title: 'Section 3', content: 'Content for Section 3...' },
  { id: 'section4', title: 'Section 4', content: 'Content for Section 4...' },
  // Add more sections as needed
]

const SectionComponent = React.forwardRef(
  ({ section, isActive, onScroll, onWheel }, ref) =>
    isActive ? (
      <motion.div
        ref={ref}
        key={section.id}
        onScroll={onScroll} // Handle scroll events for overflow
        onWheel={onWheel} // Handle wheel events when there is no overflow
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          height: '100%', // Full height of the container
          overflowY: 'auto', // Scrollable if content overflows
        }}
      >
        {section.content}
      </motion.div>
    ) : null
)

const AboutMeContainer = () => {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef(sections.map(() => React.createRef()))
  const scrollDelta = useRef(0) // To track cumulative scroll delta
  const scrollThreshold = 500 // Adjust this value to control sensitivity

  const debounce = (func, delay) => {
    let inDebounce
    return function () {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
  }

  const handleScroll = e => {
    const { scrollTop, scrollHeight, clientHeight } = e.target
    const atBottom = scrollTop + clientHeight >= scrollHeight
    const atTop = scrollTop === 0

    if (atBottom && activeSection < sections.length - 1) {
      setActiveSection(prevActiveSection => prevActiveSection + 1)
    } else if (atTop && activeSection > 0) {
      setActiveSection(prevActiveSection => prevActiveSection - 1)
    }
  }

  // Since the overflow is on the active section, we can directly listen for the wheel event on it
  const handleWheel = e => {
    const currentSectionRef = sectionRefs.current[activeSection].current
    if (!currentSectionRef) return

    const { scrollTop, scrollHeight, clientHeight } = currentSectionRef
    const atBottom = scrollTop + clientHeight >= scrollHeight
    const atTop = scrollTop === 0

    scrollDelta.current += e.deltaY // Accumulate scroll delta

    // Check if we've exceeded our scroll threshold
    if (Math.abs(scrollDelta.current) > scrollThreshold) {
      if (atBottom && e.deltaY > 0 && activeSection < sections.length - 1) {
        // e.preventDefault()
        setActiveSection(prevActiveSection => prevActiveSection + 1)
      } else if (atTop && e.deltaY < 0 && activeSection > 0) {
        // e.preventDefault()
        setActiveSection(prevActiveSection => prevActiveSection - 1)
      }
      scrollDelta.current = 0 // Reset the scroll delta after changing sections
    }
  }

  const debouncedHandleWheel = debounce(handleWheel, 200) // Adjust the 200ms delay as needed
  return (
    <Box>
      <Box
        position="relative"
        h="300px" // Set a maximum height for the container
        overflow="hidden" // Hide overflow
        w="100%"
      >
        <AnimatePresence>
          {sections.map((section, index) => (
            <SectionComponent
              key={section.id}
              section={section}
              isActive={index === activeSection}
              onScroll={handleScroll}
              onWheel={handleWheel}
              ref={sectionRefs.current[index]} // Pass the ref for the section
            />
          ))}
        </AnimatePresence>
      </Box>
      <Heading as="h2" size="xl">
        About Me
      </Heading>

      {/* <Box flex="1" maxWidth="500px">
        <Text mb={3}>Hello!</Text>
        <Text mb={3}>
          I'm <strong>Atharv Kulkarni</strong>, a dynamic and forward-thinking{' '}
          <strong>Consultant at IBM</strong>, currently immersed in the realms
          of Workday integration and AI-driven application development.
        </Text>
        <Text>
          With a solid foundation in both technology and business, I bring over
          a year of comprehensive experience in consulting, paired with an{' '}
          <strong>expertise in Workday and application development.</strong>
        </Text>
        <Text>
          With a solid foundation in both technology and business, I bring over
          a year of comprehensive experience in consulting, paired with an{' '}
          <strong>expertise in Workday and application development.</strong>
        </Text>
        <Text>
          With a solid foundation in both technology and business, I bring over
          a year of comprehensive experience in consulting, paired with an{' '}
          <strong>expertise in Workday and application development.</strong>
        </Text>
        <Text>
          With a solid foundation in both technology and business, I bring over
          a year of comprehensive experience in consulting, paired with an{' '}
          <strong>expertise in Workday and application development.</strong>
        </Text>
      </Box> */}
    </Box>
  )
}

export default AboutMeContainer
