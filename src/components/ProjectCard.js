import React from "react";
import { Link } from "gatsby";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as projectsStyles from "../styles/projects.module.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MotionBox = motion(Box);

const ProjectCard = ({ project }) => {
  const image = getImage(project.imageurl)

  return (
    <Link to={`/projects/${project.slug}`}>
      <MotionBox
        whileHover={{ scale: 1.05, boxShadow: "lg" }}
        m={4}
        borderWidth={1}
        borderRadius="lg"
        overflow="hidden"
        _hover={{ textDecoration: "none" }}
      >
        <GatsbyImage image={image} alt={project.title} />
        <Box p="6">
          <Text fontWeight="bold" fontSize="xl" mb={2}>
            {project.title}
          </Text>
          <Text>{project.description}</Text>
        </Box>
      </MotionBox>
    </Link>
  );
}

export default ProjectCard;