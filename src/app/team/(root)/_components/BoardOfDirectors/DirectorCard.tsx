"use client";

import AspectRatio from "@/components/AspectRatio";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { TeamMember } from "@/types/request/team";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

function DirectorCard({ member }: Props) {
  const [opened, setOpened] = useState(false);
  const { palette } = useTheme();
  return (
    <motion.div
      style={{
        position: "relative",
      }}
      whileInView={opened ? "opened" : undefined}
      whileHover={"opened"}
      onClick={() => {
        setOpened((x) => !x);
      }}
    >
      <Box
        sx={{
          ".director-card": {
            filter: { xs: "grayscale(0%)", md: "none" },
          },
        }}
      >
        <motion.div
          style={{ filter: "grayscale(100%)" }}
          className="director-card"
          variants={{
            opened: { filter: "grayscale(0%)" },
          }}
        >
          <AspectRatio ratio={1}>
            <img
              src={member.media?.[0]?.original_url}
              alt="director"
              style={IMAGE_FIT_STYLES}
            />
          </AspectRatio>
        </motion.div>
      </Box>

      <motion.div
        style={{
          padding: 8,
          left: `calc(10%)`,
          position: "absolute",
          background: palette.text.primary,
          borderTop: `8px solid ${palette.secondary.main}`,
          bottom: -25,
          width: "80%",
          zIndex: 100,
        }}
        initial={{ opacity: 0 }}
        variants={{
          opened: {
            opacity: 1,
          },
        }}
      >
        <Typography
          variant="h6"
          fontWeight={500}
          color="background.darkest"
          textAlign="center"
        >
          {member.name}
        </Typography>
        <Typography
          fontWeight={700}
          color="background.darkest"
          textAlign="center"
        >
          {member.job_name}
        </Typography>
      </motion.div>
    </motion.div>
  );
}

type Props = {
  member: TeamMember;
};
export default DirectorCard;
