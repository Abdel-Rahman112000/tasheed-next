import { motion } from "framer-motion";
import "./styles.scss";
import { Box, Button, Typography } from "@mui/material";
import { Project } from "@/types/common/Project";
import { Link } from "@/i18n/routing";

function ProjectCard({ project }: Props) {
  return (
    <div className="home-project-card">
      <img
        src={project.media?.[0]?.original_url || ""}
        alt="project"
        className="project-image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        component={Link}
        href={`/projects/${project.id}`}
        className="overlay"
      >
        <Typography className="main-title" variant="h2">
          {project.title}
        </Typography>
        <Typography className="sub-title" variant="body2" fontWeight={700}>
          {project.location}
        </Typography>
        <Button>Learn More</Button>
      </Box>
    </div>
  );
}

type Props = {
  project: Project;
};

export default ProjectCard;
