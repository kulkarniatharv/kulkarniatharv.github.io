import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box } from "@chakra-ui/react";
import * as projectsStyles from "../styles/projects.module.scss";
import ProjectsSection from '../components/ProjectsSection';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        nodes {
          frontmatter {
            title
            description
            sections
            slug
            imageurl {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allMarkdownRemark.nodes.map((node) => ({
    ...node.frontmatter,
    slug: node.frontmatter.slug,
  }));

  const sectionGroups = projects.reduce((groups, project) => {
    project.sections.forEach((section) => {
      groups[section] = groups[section] || [];
      groups[section].push(project);
    });
    return groups;
  }, {});

  return (
    <Box>
      {Object.entries(sectionGroups).map(([section, projects]) => (
        <ProjectsSection key={section} section={section} projects={projects} />
      ))}
    </Box>
  );
};


///--- --- --- --- --- --- --- ---
// const Projects = ({ projects }) => {

//   const groupedProjects = projects.reduce((grouped, project) => {
//     (grouped[project.frontmatter.section] = grouped[project.frontmatter.section] || []).push(project);
//     return grouped;
//   }, {});

//   return (
//     <div className={projectsStyles.projects}>
//       {Object.entries(groupedProjects).map(([sectionTitle, projects]) => (
//         <ProjectsSection key={sectionTitle} sectionTitle={sectionTitle} projects={projects} />
//       ))}
//     </div>
//   )
// }

export default Projects;