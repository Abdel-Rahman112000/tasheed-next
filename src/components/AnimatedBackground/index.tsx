"use client";
import TasheedOutlined from "@/assets/images/tasheed-outlined.png";
import { Box } from "@mui/material";
import ParallaxScrollSpeed from "@/components/ParallaxScrollSpeed";

const ImageInstance = ({ reverse }: ImageInstanceProps) => (
  <div
    style={{
      width: "140vw",
      display: "flex",
      flexDirection: "column",
      alignItems: reverse ? "end" : "start",
    }}
  >
    <img
      src={TasheedOutlined.src}
      alt="Tasheed Outlined"
      style={{ width: "85%", opacity: 0.1 }}
    />
  </div>
);
type ImageInstanceProps = {
  reverse?: boolean;
};

function AnimatedBackground() {
  return (
    <Box
      sx={{
        position: "fixed",
        width: 1,
        height: 1,
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 4,
        maxWidth: 1,
        overflow: "hidden",
        zIndex: -10,
      }}
    >
      <ParallaxScrollSpeed baseVelocity={1}>
        <ImageInstance />
      </ParallaxScrollSpeed>
      <ParallaxScrollSpeed baseVelocity={-1}>
        <ImageInstance />
      </ParallaxScrollSpeed>
    </Box>
  );
}

export default AnimatedBackground;
