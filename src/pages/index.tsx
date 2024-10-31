/* eslint-disable react/prop-types */
import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import MainScreen from '../components/MainScreen/MainScreen'
import Seo from '../components/seo'

interface ProjectNode {
  frontmatter: {
    title: string
    description: string
    notableProject: boolean
    slug: string
    cardBadge: string
    cardBadgeColorScheme: string
  }
  parent: {
    modifiedTime: string
  }
}

interface BlogPostNode {
  frontmatter: {
    title: string
    slug: string
    description: string
  }
  parent: {
    modifiedTime: string
  }
}

interface QueryData {
  projects: {
    nodes: ProjectNode[]
  }
  blogPosts: {
    nodes: BlogPostNode[]
  }
}


const Home: React.FC<PageProps<QueryData>> = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <MainScreen
      projects={data.projects.nodes}
      blogPosts={data.blogPosts.nodes}
    />
    </Layout>
  )
}

export const query = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
    ) {
      nodes {
        frontmatter {
          title
          description
          notableProject
          slug
          cardBadge
          cardBadgeColorScheme
        }
        parent {
          ... on File {
            modifiedTime(formatString: "DD/MMM/YYYY")
          }
        }
      }
    }
    blogPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          description
        }
        parent {
          ... on File {
            modifiedTime(formatString: "DD/MMM/YYYY")
          }
        }
      }
    }
  }
`

export default Home

export const Head = (): JSX.Element => <Seo title="Home" />
