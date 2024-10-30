import { Box, Heading, useBreakpointValue } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import BlogCard from '../BlogComponents/BlogCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface BlogPost {
  frontmatter: {
    title: string;
    slug: string;
    description: string;
  };
}

interface FeaturedBlogsProps {
  blogPosts: BlogPost[];
}

const FeaturedBlogs: React.FC<FeaturedBlogsProps> = ({ blogPosts }) => {
  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;
  const [emblaRef, setEmblaRef] = useState(null);

  const scrollPrev = useCallback(() => emblaRef && emblaRef.scrollPrev(), [emblaRef]);
  const scrollNext = useCallback(() => emblaRef && emblaRef.scrollNext(), [emblaRef]);

  useEffect(() => {
    if (emblaRef) {
      const rootNode = emblaRef.rootNode();
      rootNode.style.setProperty('--slides-per-view', `${slidesToShow}`);
    }
  }, [emblaRef, slidesToShow]);

  return (
    <Box overflow="hidden" position="relative" px={12}>
      <Box mb={6}>
        <h2 className="text-2xl font-bold">Featured Blog Posts</h2>
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
          {blogPosts.map((post) => (
            <CarouselItem key={post.frontmatter.slug} className="pl-4" style={{ flex: `0 0 calc(100% / var(--slides-per-view))` }}>
              <div className="h-full">
                <BlogCard post={post.frontmatter} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {blogPosts.length > slidesToShow && (
          <>
            <CarouselPrevious onClick={scrollPrev} />
            <CarouselNext onClick={scrollNext} />
          </>
        )}
      </Carousel>
    </Box>
  );
}

export default FeaturedBlogs
