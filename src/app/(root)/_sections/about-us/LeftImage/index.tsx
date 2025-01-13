"use client";

import { Box, BoxProps, Grid, GridProps, Stack } from "@mui/material";
import AspectRatio from "@/components/AspectRatio";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useHooks from "./hooks";
import { About } from "@/types/request/home";

const FullColumn = ({ children, ...props }: GridProps) => (
  <Grid item height={1} {...props}>
    <Stack width={1} height={1}>
      {children}
    </Stack>
  </Grid>
);
const BlankItem = () => (
  <Box
    sx={{
      width: 1,
      height: 1,
      bgcolor: "background.default",
      border: "1px solid transparent",
      borderColor: "background.default",
    }}
  />
);

function LeftImage({ about }: Props) {
  const { ref, transformedScroll } = useHooks();
  const image = about.aboutGallery[0];
  return (
    <Grid item xs={12} md={6.5}>
      <AspectRatio ratio={1}>
        <Box
          ref={ref}
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            style={{
              width: "125%",
              height: "125%",
              position: "absolute",
              bottom: transformedScroll,
              left: 0,
            }}
          >
            <img
              style={{ ...IMAGE_FIT_STYLES }}
              src={image?.media?.[0]?.original_url}
              alt="Background Image"
            />
          </motion.div>
          {/* Overlay Container */}
          <Box
            sx={{
              position: "absolute",
              width: 1,
              height: 1,
              top: 0,
              left: 0,
              zIndex: 5,
            }}
          >
            <Grid container height={1}>
              <FullColumn xs={4}>
                <Box height={0.75}></Box>
                <Box flexGrow={1} width={1}>
                  <BlankItem />
                </Box>
              </FullColumn>
              <FullColumn xs={1}>
                <Box flexGrow={1} width={1}>
                  <BlankItem />
                </Box>
              </FullColumn>
              <FullColumn xs={7}>
                <Box height={"50px"} width={1}>
                  <BlankItem />
                </Box>
                <Box flexGrow={1} width={1}></Box>
                <Box height={"50px"} width={1}>
                  <BlankItem />
                </Box>
                <Box flexGrow={2} width={1}></Box>
              </FullColumn>
            </Grid>
          </Box>
        </Box>
      </AspectRatio>
    </Grid>
  );
}

type Props = {
  about: About;
};
export default LeftImage;
