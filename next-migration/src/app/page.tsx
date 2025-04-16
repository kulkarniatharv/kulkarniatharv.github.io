import Layout from '@/components/Layout';
import MainScreen from '@/components/MainScreen/MainScreen';

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
    description: string;
  };
  parent: {
    modifiedTime: string;
  };
}

export default function Home() {
  // In Next.js, we'll fetch this data in a different way than Gatsby's GraphQL
  const projects: Project[] = [];
  const blogPosts: BlogPost[] = [];
  
  return (
    <Layout>
      <MainScreen 
        projects={projects}
        blogPosts={blogPosts}
      />
    </Layout>
  );
}
