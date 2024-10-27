import { Box, useBreakpointValue } from '@chakra-ui/react'
import { UseEmblaCarouselType } from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from 'react'
import ProjectCard from '../ProjectComponents/ProjectCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

const NotableProjects = ({ projects }) => {
  const notableProjects = projects
    .filter(project => project.frontmatter.notableProject)
    .reverse() // Reverse the array to show the latest project first

  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1
  const [emblaRef, setEmblaRef] = useState<UseEmblaCarouselType[1] | null>(null)

  const scrollPrev = useCallback(() => emblaRef && emblaRef.scrollPrev(), [emblaRef])
  const scrollNext = useCallback(() => emblaRef && emblaRef.scrollNext(), [emblaRef])

  useEffect(() => {
    if (emblaRef) {
      // Adjust the number of slides visible based on the breakpoint
      const rootNode = emblaRef.rootNode()
      rootNode.style.setProperty('--slides-per-view', `${slidesToShow}`)
    }
  }, [emblaRef, slidesToShow])

  return (
    <Box overflow="hidden" position="relative" px={12}>
      <Box mb={6} >
        <h2 className="text-2xl font-bold">Featured Projects</h2>
      </Box>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setEmblaRef}
      >
        <CarouselContent className="-ml-4">
          {notableProjects.map((project) => (
            <CarouselItem key={project.frontmatter.slug} className="pl-4" style={{ flex: `0 0 calc(100% / var(--slides-per-view))` }}>
              <div className="h-full">
                <ProjectCard 
                  project={{
                    ...project.frontmatter,
                    lastModified: project.parent.modifiedTime
                  }} 
                  clampDescription={true}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {notableProjects.length > slidesToShow && (
          <>
            <CarouselPrevious onClick={scrollPrev} />
            <CarouselNext onClick={scrollNext} />
          </>
        )}
      </Carousel>
    </Box>
  )
}

export default NotableProjects
