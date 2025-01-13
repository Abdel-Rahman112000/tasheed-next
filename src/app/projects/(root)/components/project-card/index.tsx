"use client";

import CircularButton from "@/components/CircularButton";
import { Box, Stack, useTheme, Typography, Tooltip } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types/common/Project";
import LimitTypography from "@/components/LimitTypography";
function ProjectCard({ reversed, project }: Props) {
  const { palette } = useTheme();

  return (
    <motion.div
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      initial={{ x: reversed ? 300 : -300, opacity: 0 }}
      whileInView={"inView"}
      transition={{ ease: "easeOut", duration: 0.9 }}
      viewport={{ margin: "100% 0px -50px 0%" }}
      variants={{
        inView: { x: 0, y: 0, opacity: 1 },
      }}
    >
      <div
        className="image-holder"
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url('${project.media?.[0]?.original_url}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          position: "absolute",
          top: 0,
          transition: "200ms",
        }}
      ></div>
      <motion.div
        style={{
          display: "flex",
          alignItems: reversed ? "flex-end" : "flex-start",
          flexDirection: "column",
          width: "100%",
          minHeight: 420,
          background: `linear-gradient(${
            reversed ? 90 : 270
          }deg, rgba(0, 0, 0, 0) 0%, ${palette.background.default} 95.02%)`,
        }}
        initial={{
          x: reversed ? 250 : -250,
        }}
        variants={{
          inView: {
            x: 0,
          },
        }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <Stack
          maxWidth={{ xs: "100%", md: 800 }}
          overflow={"hidden"}
          justifyContent={"center"}
          alignItems={reversed ? "end" : " start"}
          sx={{
            width: "fit-content",
            px: 4,
            py: 4,
          }}
        >
          <Typography
            sx={{
              // whiteSpace: "nowrap",
              // textOverflow: "ellipsis",
              // overflow: "hidden",
              lineHeight: 0.8,
              mb: 3,
            }}
            textAlign={reversed ? "end" : "start"}
            variant="h1"
          >
            {project.title}
          </Typography>

          <Typography
            variant="h6"
            mb={6}
            textAlign={reversed ? "end" : "start"}
          >
            {project.location}
          </Typography>
          <Typography
            variant="body1"
            textAlign={reversed ? "end" : "start"}
            maxWidth={{ xs: 0.8, md: 400 }}
            component="p"
            dangerouslySetInnerHTML={{ __html: project.sub_title || "" }}
          ></Typography>
          <Tooltip
            arrow
            title={
              <Typography fontWeight={300} p={1}>
                Go to &quot;{project.title}&quot; page!
              </Typography>
            }
            placement="top"
          >
            <Box mt={2}>
              <CircularButton
                size="small"
                color="secondary"
                component={Link}
                href={`/projects/${project.id}`}
              >
                <ArrowOutwardIcon />
              </CircularButton>
            </Box>
          </Tooltip>
        </Stack>
      </motion.div>
    </motion.div>
  );
}

type Props = {
  reversed?: boolean;
  project: Project;
};

export default ProjectCard;
