import React, { useState, useEffect } from 'react'
import { Box, IconButton, useBreakpointValue, Grid } from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../ProjectComponents/ProjectCard'

const cardVariants = {
  initial: direction => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.5 },
    },
  },
  exit: direction => ({
    x: direction < 0 ? 500 : -500,
    opacity: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  }),
}

const NotableProjects = ({ projects }) => {
  const [currentSlides, setCurrentSlides] = useState([0, 1])
  const [pauseSlideshow, setPauseSlideshow] = useState(false)
  const [direction, setDirection] = useState(1)
  const gridTemplateColumns = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
  })

  const notableProjects = projects.filter(
    project => project.frontmatter.notableProject
  )

  useEffect(() => {
    if (pauseSlideshow) return
    const timer = setTimeout(() => {
      const nextSlides = currentSlides.map(
        slide => (slide + 1) % projects.length
      )
      setCurrentSlides(nextSlides)
    }, 10000) // Change cards every 10 seconds
    return () => clearTimeout(timer)
  }, [currentSlides, pauseSlideshow, projects.length])

  const handleChangeSlide = slideDirection => {
    setPauseSlideshow(true)
    setDirection(slideDirection === 'next' ? 1 : -1)
    const adjustment = slideDirection === 'next' ? 1 : -1
    setCurrentSlides(slides =>
      slides.map(
        slide => (slide + adjustment + projects.length) % projects.length
      )
    )
  }

  return (
    <Box overflow="hidden">
      <Grid
        templateColumns="1fr 8fr 1fr"
        alignItems="center"
        justifyItems="center"
        gap={4}
      >
        <IconButton
          gridColumnStart={1}
          icon={<FaArrowLeft />}
          onClick={() => handleChangeSlide('prev')}
          aria-label="Previous Slide"
          isRound
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <Grid
          as={motion.div}
          templateColumns={gridTemplateColumns}
          gap={4}
          justifyContent="center"
          alignItems="center"
          gridColumn="2 / span 1"
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            {currentSlides.map(slideIndex => {
              const project =
                notableProjects[slideIndex % notableProjects.length]
              return (
                <Box
                  key={`${project.frontmatter.slug}-parentdiv`}
                  position="relative"
                >
                  <motion.div
                    key={project.frontmatter.slug}
                    custom={direction}
                    variants={cardVariants}
                    layoutId={`project-card-${project.frontmatter.slug}`}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    layout // This prop enables layout animation which helps in maintaining uniformity
                  >
                    <ProjectCard project={project.frontmatter} />
                  </motion.div>
                </Box>
              )
            })}
          </AnimatePresence>
        </Grid>
        <IconButton
          gridColumnStart={3}
          icon={<FaArrowRight />}
          onClick={() => handleChangeSlide('next')}
          aria-label="Next Slide"
          isRound
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </Grid>
    </Box>
  )
}

export default NotableProjects
