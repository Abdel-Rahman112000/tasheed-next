"use client";

import AspectRatio from "@/components/AspectRatio";
import { Box, Container, Grid, Typography } from "@mui/material";
import { BackImageComponent, FrontImageComponent } from "./components/Image";
import { motion } from "framer-motion";
import { WithAboutProps } from "../../page";

function Vision({ about }: WithAboutProps) {
  return (
    <Box py={12}>
      <Container maxWidth="xl">
        <motion.div whileInView={"in-view"} viewport={{ once: true }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <motion.div
                transition={{ stiffness: 1 }}
                initial={{ x: -100, opacity: 0, y: 100 }}
                variants={{
                  "in-view": {
                    x: 0,
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                <Typography variant="h2" mb={8}>
                  OUR VISION
                </Typography>
              </motion.div>
              <motion.div
                transition={{ stiffness: 1, delay: 0.25 }}
                initial={{ x: 100, opacity: 0, y: -20 }}
                variants={{
                  "in-view": {
                    x: 0,
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                <Typography
                  mb={8}
                  component="div"
                  dangerouslySetInnerHTML={{
                    __html: about.aboutVision?.description || "",
                  }}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <AspectRatio ratio={1} boxProps={{ sx: { overflow: "visible" } }}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: "70%",
                    }}
                  >
                    <motion.div
                      transition={{ stiffness: 1, delay: 0.4 }}
                      style={{ width: "100%", height: "100%" }}
                      initial={{ y: -150, opacity: 0, x: -20 }}
                      variants={{
                        "in-view": {
                          x: 0,
                          opacity: 1,
                          y: 0,
                        },
                      }}
                    >
                      <BackImageComponent
                        src={about.aboutVision.media?.[0]?.original_url}
                      />
                    </motion.div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "55%",
                    }}
                  >
                    <motion.div
                      transition={{ stiffness: 1, delay: 0.5 }}
                      style={{ width: "100%", height: "100%" }}
                      initial={{ y: 150, opacity: 0, x: 20 }}
                      variants={{
                        "in-view": {
                          x: 0,
                          opacity: 1,
                          y: 0,
                        },
                      }}
                    >
                      <FrontImageComponent
                        src={about.aboutVision.media?.[1]?.original_url}
                      />
                    </motion.div>
                  </div>
                </div>
              </AspectRatio>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Vision;
