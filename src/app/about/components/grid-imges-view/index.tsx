"use client";

import GridImagesViewer from "@/components/GridImagesViewer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WithAboutProps } from "../../page";

function GridImagesView({ about }: WithAboutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const images =
    about.aboutGallery[0]?.media.map((image) => ({
      src: image.original_url,
    })) || [];
  return (
    <div ref={ref}>
      <GridImagesViewer
        columns={3}
        limitRows={4}
        images={images.map((x) => ({
          ...x,
          wrapper: ({ children }) => {
            const delay = Math.random() * 0.6;

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
        }))}
      />
    </div>
  );
}

export default GridImagesView;
