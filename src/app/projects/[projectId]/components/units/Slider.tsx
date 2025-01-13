"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import AspectRatio from "@/components/AspectRatio";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import { useResponsiveSpaceBetween } from "@/hooks/useResponsiveSpaceBetween";
import SwiperNavigation from "../../../../../components/SwiperNavigation";
import { Unit } from "@/types/common/Project";
import NextLink from "next/link";
import { useMediaQuery } from "react-responsive";

function Slider({ units }: Props) {
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
        {units.map((unit) => (
          <SwiperSlide key={unit.id}>
            <Box href={`/units/${unit.id}`} component={NextLink}>
              <AspectRatio ratio={isTabletOrMobile ? 1 : 21 / 9}>
                <img
                  style={IMAGE_FIT_STYLES}
                  src={unit.media?.[0]?.original_url}
                  alt="ongoing-project"
                />
                <Stack
                  spacing={1}
                  sx={{
                    p: { xs: 1, md: 4 },
                    width: 1,
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                  }}
                >
                  <Typography variant="h3" fontWeight={300}>
                    {unit.title}
                  </Typography>
                  <Typography variant="body1">{unit.description}</Typography>
                </Stack>
              </AspectRatio>
            </Box>
          </SwiperSlide>
        ))}
        <SwiperNavigation />
      </Swiper>
    </Box>
  );
}

type Props = {
  units: Unit[];
};

export default Slider;
