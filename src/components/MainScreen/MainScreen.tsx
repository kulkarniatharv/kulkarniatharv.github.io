import { Box } from '@chakra-ui/react'
import React from 'react'
import Container from '../Container'
import Description from './Description'
import FeaturedBlogs from './FeaturedBlogs'
import NotableProjects from './NotableProjects'

interface Project {
  frontmatter: {
    title: string;
    description: string;
    notableProject: boolean;
    slug: string;
    cardBadge?: string;
    cardBadgeColorScheme?: string;
  };
  parent: {
    modifiedTime: string;
  };
}

interface BlogPost {
  frontmatter: {
    title: string;
    slug: string;
  };
}

interface MainScreenProps {
  projects: Project[];
  blogPosts: BlogPost[];
}

const MainScreen: React.FC<MainScreenProps> = ({ projects, blogPosts }) => (
  <Container>
    <Box as="section" display="flex" alignItems="center" justifyContent="center">
      <Description />
    </Box>

    <Box as="section" mt={5} mb={5}>
      <NotableProjects projects={projects} />
    </Box>

    {/* <Box as="section" mt={5} mb={5}>
      <FeaturedBlogs blogPosts={blogPosts} />
    </Box> */}
  </Container>
)

export default MainScreen
