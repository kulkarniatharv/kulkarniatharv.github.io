import React from "react"
import { Link } from "gatsby"
import * as projectsStyles from "../styles/projects.module.scss"

const Projects = ({ projects }) => {
  return (
    <div className={projectsStyles.projects}>
      {projects.map((project, index) => (
        <div key={index} className={projectsStyles.project}>
          <Link to={`/projects/${project.frontmatter.slug}`} className={projectsStyles.projectLink}>
            {project.frontmatter.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Projects