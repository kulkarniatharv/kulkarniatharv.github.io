/* eslint-disable react/prop-types */
// src/pages/blog.js
import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import '../styles/global.scss'
import * as styles from '../styles/blogPosts.module.scss'

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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
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
