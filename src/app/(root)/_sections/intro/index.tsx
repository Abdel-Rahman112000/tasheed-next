"use client";

import VideoContainer from "./VideoContainer";
import { $Heights } from "@/constants/sizes";
import { HomePageGetRequestRoot } from "@/types/request/home";
import { Stack } from "@mui/material";

function Intro({ data }: Props) {
  const introData = data.home[0];
  return (
    <Stack
      sx={{
        position: "relative",
        height: `calc(100vh - ${$Heights.Navbar}px)`,
        width: 1,
      }}
    >
      <VideoContainer introData={introData} />
    </Stack>
  );
}

type Props = {
  data: HomePageGetRequestRoot;
};

export default Intro;
