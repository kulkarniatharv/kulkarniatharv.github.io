/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Projects from '../components/Projects'

export default function ProjectsPage({ data }) {
  return (
    <Layout>
      <Projects projects={data.projects.nodes} />
    </Layout>
  )
}

export const query = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          sections
        }
      }
    }
  }
`
