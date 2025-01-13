"use client";

import { Container, Stack } from "@mui/material";
import { motion } from "framer-motion";
import Video from "./Video";
import { useRef, useState, useEffect } from "react";
import { $Heights } from "@/constants/sizes";
import type { Home } from "@/types/request/home";

function VideoContainer({ introData }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const updateOffset = () => {
      if (ref.current) {
        setOffset({
          left: ref.current.offsetLeft,
          top: ref.current.offsetTop,
        });
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("resize", updateOffset);
    };
  }, [ref]);

  return (
    <>
      <Stack
        sx={{
          width: 1,
          height: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl" sx={{ height: 0.9 }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
            ref={ref}
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
              whileHover={{
                top: `${-1 * (offset.top + $Heights.Navbar)}px`,
                left: `${-1 * offset.left}px`,
                width: "100vw",
                height: "100vh",
                zIndex: 10000000,
              }}
              transition={{ delay: 0.5 }}
            >
              <Video introData={introData} />
            </motion.div>
          </div>
        </Container>
      </Stack>
    </>
  );
}

type Props = {
  introData: Home;
};

export default VideoContainer;
