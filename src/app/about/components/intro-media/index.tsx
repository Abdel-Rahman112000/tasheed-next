"use client";

import AspectRatio from "@/components/AspectRatio";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { CircularProgress } from "@mui/material";
import { useScroll, useTransform, motion } from "framer-motion";
import { WithAboutProps } from "../../page";
import RenderMedia from "@/components/RenderMedia";

function IntroMedia({ about }: WithAboutProps) {
  const { scrollY } = useScroll();

  // Map the scroll position to a blur value
  const blurValue = useTransform(scrollY, (val) => {
    const blur = Math.min(val / 100, 30);
    return `blur(${blur}px)`;
  });
  const scaleRatio = useTransform(scrollY, (val) => {
    return Math.min(1 + val / 2200, 1.7);
  });

  return (
    <AspectRatio ratio={21 / 9}>
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          filter: blurValue,
          scale: scaleRatio,
          position: "relative",
        }}
      >
        {about.media?.[0] && <RenderMedia media={about.media[0]} />}
      </motion.div>
    </AspectRatio>
  );
}

export default IntroMedia;
