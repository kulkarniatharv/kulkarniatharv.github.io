import React from "react";
import { graphql } from "gatsby";
import { Box, Grid } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";

export const query = graphql`
  query($section: String!) {
    allMarkdownRemark(filter: { frontmatter: { sections: { in: [$section] } } }) {
      nodes {
        frontmatter {
          title
          slug
          description
          imageurl {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          sections
        }
      }
    }
  }
`;


const SectionTemplate = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;

  console.log("projects in section", projects);

  return (
    <Box>
      <h1>{projects[0].frontmatter.sections[0]}</h1>
      <Grid templateColumns="repeat(auto-fill, minmax(240px, 1fr))" gap={4}>
        {projects.map((project) => (
          <ProjectCard key={project.frontmatter.slug} project={project.frontmatter} />
        ))}
      </Grid>
    </Box>
  );
}

export default SectionTemplate;
