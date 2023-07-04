import React from "react";
import { Link } from "gatsby";
import { Box, Button, Grid, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import * as projectsStyles from "../styles/projects.module.scss";

const ProjectsSection = ({ section, projects }) => (
  <Box my={8}>
    <Heading as="h2" size="xl" mb={4}>
      {section}
    </Heading>
    <Grid templateColumns="repeat(auto-fill, minmax(240px, 1fr))" gap={4}>
      {projects.slice(0, 4).map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </Grid>
    {projects.length > 4 && (
      <Box textAlign="center" mt={4}>
        <Link to={`/sections/${section}`}>
          <Button>See all</Button>
        </Link>
      </Box>
    )}
  </Box>
);

export default ProjectsSection;
