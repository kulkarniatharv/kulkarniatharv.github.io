/* eslint-disable react/prop-types */
// src/pages/blog.js
import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/blogPosts.module.scss'

export default function Blog({ data }) {
  const blogPosts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <h1>Blog Posts</h1>
      <div className={styles.blogPosts}>
        {blogPosts.map(post => (
          <div className={styles.blogPost} key={post.id}>
            <Link
              className={styles.blogPostLink}
              to={`/blog/${post.frontmatter.slug}`}
            >
              <h3>{post.frontmatter.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
      nodes {
        id
        frontmatter {
          slug
          title
        }
      }
    }
  }
`
