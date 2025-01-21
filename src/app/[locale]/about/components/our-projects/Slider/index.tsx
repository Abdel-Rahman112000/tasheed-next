"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import fileImage from "assets/images/file-image.png";
import { Navigation, Autoplay } from "swiper/modules";
import AspectRatio from "@/components/AspectRatio";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useResponsiveSpaceBetween } from "@/hooks/useResponsiveSpaceBetween";
import { Project } from "@/types/common/Project";
import { Link } from "@/i18n/routing";
import { useMediaQuery } from "react-responsive";
import NavigationContainer from "@/components/SwiperNavigation";

function Slider({ projects }: Props) {
  const spaceBetween = useResponsiveSpaceBetween();
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery({
    maxWidth: theme.breakpoints.values.md,
  });

  return (
    <Box width={1}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ enabled: true }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        // loop={true}
        speed={1000}
        slidesPerView={1.2}
        spaceBetween={spaceBetween / 3}
        className="swiper_container"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Box>
              <AspectRatio ratio={isTabletOrMobile ? 1 : 21 / 9}>
                <img
                  style={IMAGE_FIT_STYLES}
                  src={project?.media?.[0]?.original_url}
                  alt="ongoing-project"
                />
                <Stack
                  component={Link}
                  href={`/projects/${project.id}`}
                  spacing={1}
                  sx={{
                    p: 4,
                    width: 1,
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                  }}
                >
                  <Typography variant="h3" fontWeight={300}>
                    {project.title}
                  </Typography>
                  <Typography variant="h5" fontWeight={300}>
                    {project.location}
                  </Typography>
                  <Typography
                    variant="body1"
                    component={"p"}
                    dangerouslySetInnerHTML={{
                      __html: project.sub_title || "",
                    }}
                  />
                </Stack>
              </AspectRatio>
            </Box>
          </SwiperSlide>
        ))}
        <NavigationContainer />
      </Swiper>
    </Box>
  );
}

type Props = {
  projects: Project[];
};

export default Slider;
