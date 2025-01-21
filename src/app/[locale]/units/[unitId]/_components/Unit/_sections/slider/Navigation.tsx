"use client";

import { Button, ButtonProps, darken } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSwiper } from "swiper/react";

const NavigationButton = ({ sx, ...props }: ButtonProps) => (
  <Button
    sx={({ palette }) => ({
      position: "absolute",
      height: 1,
      top: 0,
      zIndex: 100,
      bgcolor: palette.background.medTransparent,
      "&:hover": {
        bgcolor: darken(
          palette.background.medTransparent || palette.background.default,
          0.4
        ),
      },
      ...(sx as {}),
    })}
    {...props}
  />
);

function SwiperNavigation() {
  const swiper = useSwiper();
  return (
    <>
      <NavigationButton sx={{ left: 0 }} onClick={() => swiper.slidePrev()}>
        <ArrowBackIosNewIcon sx={{ color: "primary.main" }} />
      </NavigationButton>
      <NavigationButton sx={{ right: 0 }} onClick={() => swiper.slideNext()}>
        <ArrowForwardIosIcon />
      </NavigationButton>
    </>
  );
}

export default SwiperNavigation;
