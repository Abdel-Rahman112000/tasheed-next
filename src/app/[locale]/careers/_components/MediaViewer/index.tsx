import AspectRatio from "@/components/AspectRatio";
import MediaComponent from "@/components/video-player";
import { Typography } from "@mui/material";

function MediaViwer() {
  return (
    <AspectRatio ratio={21 / 9}>
      <MediaComponent videoSrc="" />
      <Typography
        variant="h2"
        sx={{
          position: "absolute",
          bottom: 50,
          left: 50,
          pointerEvents: "none",
        }}
      >
        YOUR FUTURE STARTS HERE
      </Typography>
    </AspectRatio>
  );
}

export default MediaViwer;
