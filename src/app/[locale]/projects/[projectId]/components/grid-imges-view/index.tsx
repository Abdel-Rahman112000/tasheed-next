"use client";

import AspectRatio from "@/components/AspectRatio";
import GridImagesViewer from "@/components/GridImagesViewer";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { Project } from "@/types/common/Project";
import { Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ImageItem = () => (
  <Grid item xs={12} sm={6} md={4}>
    <AspectRatio>
      <img
        style={IMAGE_FIT_STYLES}
        src="https://galerias.vapf.com/dyntrim/14793.1.Vafp_AL030_night_220523_4200px_.0007-1080.jpg"
        alt="Project"
      />
    </AspectRatio>
  </Grid>
);

function GridImagesView({ project }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref}>
      <GridImagesViewer
        columns={3}
        limitRows={2}
        images={
          project.media?.map((media) => ({
            src: media.original_url,
            wrapper: ({ children }) => {
              const delay = Math.random() * 0.8;

              return (
                <motion.div
                  style={{ width: "100%", height: "100%" }}
                  transition={{
                    delay,
                    bounceStiffness: 20,
                    ease: "easeOut",
                    duration: 0.65,
                  }}
                  initial={{ y: 300, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                >
                  {children}
                </motion.div>
              );
            },
          })) || []
        }
      />
    </div>
  );
}

type Props = {
  project: Project;
};

export default GridImagesView;
