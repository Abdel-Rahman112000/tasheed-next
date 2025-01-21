"use client";

import { useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

function useHooks() {
  const [topPosition, setTopPosition] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    }
  }, [topPosition]);

  const toStartFrom = topPosition + (screenHeight * 3) / 4;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const { scrollY } = useScroll();
  const transformedScroll = useTransform(scrollY, (value) => {
    if (screenWidth < 1024) {
      return 0;
    }
    return toStartFrom < value
      ? (value - toStartFrom) / -((1080 * 4) / screenHeight)
      : 0;
  });

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setTopPosition(rect.top);
      }
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [ref]);

  return { ref, isInView, transformedScroll };
}

export default useHooks;
