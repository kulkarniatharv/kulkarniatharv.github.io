import React from "react"
import { Link } from "gatsby"
import * as blogPostsStyles from "../styles/blogPosts.module.scss"

const BlogPosts = ({ blogPosts }) => {
  return (
    <div className={blogPostsStyles.blogPosts}>
      {blogPosts.map((blogPost, index) => (
        <div key={index} className={blogPostsStyles.blogPost}>
          <Link to={`/blog/${blogPost.frontmatter.slug}`} className={blogPostsStyles.blogPostLink}>
            {blogPost.frontmatter.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogPosts