"use client";

import { Container, Stack, Typography } from "@mui/material";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { $Framer } from "@/constants/framer";
import { HomePageGetRequestRoot } from "@/types/request/home";
import { Link } from "@/i18n/routing";

function NewsAndBlogs({ data: { blogs } }: Props) {
  return (
    <Stack
      spacing={4}
      sx={{
        display: {
          xs: "flex",
        },
      }}
    >
      <div>
        <Container maxWidth={"xl"}>
          <Stack spacing={4} textAlign={"center"} alignItems={"center"}>
            <Typography variant="h2">NEWS & BLOGS</Typography>
            {/* <Typography
              variant="h6"
              fontWeight={500}
              maxWidth={{ xs: 1, md: 0.8, lg: 0.6 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              illum omnis architecto, fugiat maiores iste in minima aperiam quas
              facilis molestias voluptates eius fugit eos porro veniam
              dignissimos cupiditate natus!
            </Typography> */}
          </Stack>
        </Container>
      </div>
      <motion.div
        transition={{ stiffness: 1, duration: 0.4 }}
        viewport={{ margin: $Framer.ViewPortBottomMargin }}
        initial={{ opacity: 0, scale: 1.4, y: 200 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
      >
        <Slider blogs={blogs} />
      </motion.div>
    </Stack>
  );
}

type Props = {
  data: HomePageGetRequestRoot;
};

export default NewsAndBlogs;
