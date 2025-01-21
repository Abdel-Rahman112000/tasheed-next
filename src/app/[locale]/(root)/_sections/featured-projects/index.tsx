"use client";

import AspectRatio from "@/components/AspectRatio";
import {
  Box,
  Container,
  Grid,
  GridProps,
  Stack,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { forwardRef, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { HomePageGetRequestRoot } from "@/types/request/home";

const ProjectGridItem = ({
  theme,
  children,
  ...props
}: GridProps & { theme: Theme }) => {
  return (
    <Grid item xs={12} sm={9} md={6} lg={4} {...props}>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {children}
      </motion.div>
    </Grid>
  );
};

const FeaturedProjects = forwardRef<HTMLDivElement, Props>(
  function FeaturedProjects({ data }, ref) {
    const boxRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(boxRef, {
      margin: "100% 0px -275px 0px",
    });
    const projects = data.featureProject;
    const theme = useTheme();
    return (
      <Box>
        <Container maxWidth="xl" ref={ref}>
          <Stack ref={boxRef} alignItems={"center"}>
            <Typography textAlign="center" fontWeight={700} variant="h2" mb={6}>
              FEATURED PROJECTS
            </Typography>
            <motion.div
              style={{ width: "100%" }}
              initial={{ y: 500, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : undefined}
              transition={{ type: "spring", duration: 1.5 }}
            >
              <Grid container justifyContent="center" spacing={3}>
                {projects.slice(0, 3).map((project) => (
                  <ProjectGridItem theme={theme} key={project.id}>
                    <AspectRatio ratio={0.75}>
                      <ProjectCard project={project} />
                    </AspectRatio>
                  </ProjectGridItem>
                ))}
              </Grid>
            </motion.div>
          </Stack>
        </Container>
      </Box>
    );
  }
);

type Props = {
  data: HomePageGetRequestRoot;
};

export default FeaturedProjects;
