"use client";

import AspectRatio from "@/components/AspectRatio";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavigation from "./Navigation";
import { Unit } from "@/types/common/Project";

function Slider({ unit }: Props) {
  return (
    <div style={{ position: "relative" }}>
      <Swiper spaceBetween={0} slidesPerView={1} loop>
        {unit.media?.map((unit) => (
          <SwiperSlide key={unit.id}>
            <AspectRatio ratio={21 / 9}>
              <img style={IMAGE_FIT_STYLES} src={unit.original_url} />
            </AspectRatio>
          </SwiperSlide>
        ))}
        <SwiperNavigation />
      </Swiper>
    </div>
  );
}

type Props = {
  unit: Unit;
};

export default Slider;
