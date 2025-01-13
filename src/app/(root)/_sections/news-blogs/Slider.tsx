"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import AspectRatio from "@/components/AspectRatio";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { Box, Typography, useTheme } from "@mui/material";
import { useResponsiveSpaceBetween } from "@/hooks/useResponsiveSpaceBetween";
import { Blog } from "@/types/request/home";
import Link from "next/link";
import { motion } from "framer-motion";
import moment from "moment";
import { useMediaQuery } from "react-responsive";

function Slider({ blogs }: Props) {
  const spaceBetween = useResponsiveSpaceBetween();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  const { palette } = useTheme();
  return (
    <Box width={1}>
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        effect={"coverflow"}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
          stopOnLastSlide: false,
        }}
        // loop={true}
        speed={1000}
        slidesPerView={isTabletOrMobile ? 1.2 : 2}
        spaceBetween={spaceBetween}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className="swiper_container"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <Box component={Link} href={`blogs/${blog.id}`}>
              <AspectRatio ratio={16 / 9}>
                <motion.div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                  whileHover={"hovered"}
                  whileInView={isTabletOrMobile ? "hovered" : undefined}
                >
                  <motion.div
                    style={{ width: "100%", height: "100%" }}
                    transition={{ duration: 0.4 }}
                    variants={{
                      hovered: {
                        filter: `blur(${isTabletOrMobile ? 3 : 8}px)`,
                        scale: 1.4,
                      },
                    }}
                  >
                    <img
                      style={IMAGE_FIT_STYLES}
                      src={blog.media[0]?.original_url}
                      alt="ongoing-project"
                    />
                  </motion.div>
                  <motion.div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      background: palette.background.medTransparent,
                      top: 0,
                      left: 0,
                      zIndex: 10,
                      display: "flex",
                      flexDirection: "column-reverse",
                    }}
                    initial={{ opacity: 0 }}
                    variants={{
                      hovered: {
                        opacity: 1,
                      },
                    }}
                  >
                    <Box p={{ xs: 1, md: 6 }} maxWidth={0.8}>
                      <motion.div
                        transition={{
                          delay: 0.3,
                          ease: "easeInOut",
                          duration: 0.3,
                        }}
                        initial={{ x: 50, opacity: 0 }}
                        variants={{ hovered: { x: 0, opacity: 1 } }}
                      >
                        <Typography variant="h6">
                          {moment(blog.created_at).format("YYYY-MM-DD")}
                        </Typography>
                      </motion.div>
                      <motion.div
                        transition={{
                          delay: 0.2,
                          ease: "easeInOut",
                          duration: 0.3,
                        }}
                        initial={{ x: 50, opacity: 0 }}
                        variants={{ hovered: { x: 0, opacity: 1 } }}
                      >
                        <Typography variant={isTabletOrMobile ? "h5" : "h3"}>
                          {blog.title}
                        </Typography>
                      </motion.div>
                    </Box>
                  </motion.div>
                </motion.div>
              </AspectRatio>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

type Props = {
  blogs: Blog[];
};

export default Slider;
