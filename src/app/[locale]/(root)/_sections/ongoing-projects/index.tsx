"use client";

import { Container, Stack, Typography } from "@mui/material";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { $Framer } from "@/constants/framer";
import { HomePageGetRequestRoot } from "@/types/request/home";
import { useTranslations } from "next-intl";

function OngoingProjects({ data }: Props) {
  const { singleProject } = data;
  const t = useTranslations();

  return (
    <motion.div
      transition={{ stiffness: 10, duration: 0.4 }}
      initial={{ scale: 1.4, y: 200, transformOrigin: "center" }}
      viewport={{ margin: $Framer.ViewPortBottomMargin }}
      whileInView={{
        scale: 1,
        y: 0,
      }}
    >
      <Stack spacing={4}>
        <div>
          <Container maxWidth={"xl"}>
            <Stack spacing={4}>
              <Typography variant="h2">
                {t("HomePage.ONGOING_PROJECTS")}
              </Typography>
            </Stack>
          </Container>
        </div>
        <Slider projects={data.singleProject} />
      </Stack>
    </motion.div>
  );
}

type Props = {
  data: HomePageGetRequestRoot;
};
export default OngoingProjects;
