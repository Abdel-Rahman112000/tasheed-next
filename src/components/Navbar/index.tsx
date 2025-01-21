"use client";

import Logo from "@/assets/images/logo-sm.png";
import {
  Box,
  Container,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import NavLinks from "./NavLinks";
import { $Heights } from "@/constants/sizes";
import RoundedButton from "../RoundedButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect, useCallback } from "react";
import NavDrawer from "./Drawer";
import { useAnimation, motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
export const language = [
  { id: 1, name: "ar" },
  { id: 2, name: "en" },
];
const ANIMATION_DURATION = 0.4;
const animationStatusInit: AnimationStatus = {
  animating: false,
  direction: "unset",
};
let animationStatus: AnimationStatus = animationStatusInit;
type AnimationStatus = {
  animating: boolean;
  direction: "hide" | "show" | "unset";
};

function startAnimation(
  cb: () => void,
  direction: AnimationStatus["direction"]
) {
  if (animationStatus.animating || direction === animationStatus.direction) {
    return;
  }
  animationStatus = {
    animating: true,
    direction,
  };
  cb();
  setTimeout(() => {
    animationStatus = animationStatusInit;
  }, ANIMATION_DURATION * 1000);
}

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dynamicZIndex, setDynamicZIndex] = useState(1000);
  const locale = useLocale();
  const currentLang = locale.includes("ar") ? 1 : 2;
  const fromSpecificProject = useCallback<() => string>(() => {
    if (typeof window === "undefined") return "";
    const paths = location.pathname.split("/");
    const projectRouteIndex = paths.findIndex((r) => r === "projects");
    const projectId = paths[projectRouteIndex + 1];
    if (projectRouteIndex === -1 || !projectId) return "";
    return `?from-project=${projectId}`;
  }, []);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0) {
      startAnimation(() => {
        controls.start({ y: 0 });
      }, "show");
      setDynamicZIndex(1000);
      return;
    }
    if (currentScrollY > lastScrollY) {
      // Scroll down
      startAnimation(() => {
        controls.start({ y: "-100%" });
      }, "hide");
      setDynamicZIndex(10000000000000);
    } else {
      // Scroll up
      startAnimation(() => {
        controls.start({ y: 0 });
      }, "show");
      setDynamicZIndex(10000000000000);
    }

    setLastScrollY(currentScrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <motion.div
        animate={controls}
        initial={{ y: 0 }}
        transition={{ duration: ANIMATION_DURATION, ease: "easeOut" }}
        style={{
          height: $Heights.Navbar,
          position: "fixed",
          width: "100%",
          zIndex: dynamicZIndex ? dynamicZIndex : "100",
          top: 0,
        }}
      >
        <Box component="nav" bgcolor={"background.default"} height={1}>
          <Container maxWidth="xl" sx={{ height: 1 }}>
            <Grid container gap={1.5} alignItems={"center"} sx={{ height: 1 }}>
              {/* Logo Container */}
              <Grid item md={4} lg={2.5} flexGrow={1}>
                <img src={Logo.src} height={42} alt="Tasheed" />
              </Grid>
              {/* NavLinks Container */}
              <Grid
                item
                xs={0}
                md={7}
                lg={6}
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                <NavLinks />
              </Grid>
              {/* Contact Us Container */}
              <Grid
                item
                xs={0}
                lg={2}
                sx={{
                  display: {
                    xs: "none",
                    lg: "flex",
                  },
                }}
                justifyContent={"end"}
              >
                <RoundedButton
                  component={Link}
                  href={`/contact/${fromSpecificProject()}`}
                >
                  Contact Us
                </RoundedButton>
              </Grid>
              <Grid
                sx={{
                  display: {
                    xs: "none",
                    lg: "flex",
                  },
                }}
                item
                xs={0}
                lg={1}
              >
                <TextField
                  variant="standard"
                  select
                  fullWidth
                  value={currentLang}
                >
                  {language.map((lang) => (
                    <MenuItem
                      key={lang.id}
                      sx={{
                        zIndex: 900000000000000000000000000000,
                      }}
                      value={lang.id}
                    >
                      <Box
                        sx={{ width: "100%" }}
                        component={Link}
                        href={"/"}
                        locale={lang.name}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#fff",
                            fontSize: "18px",
                          }}
                        >
                          {lang.name}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {/* Menu Icon Container */}
              <Grid
                item
                sx={{
                  width: "fit-content",
                  display: { md: "none", xs: "block" },
                }}
              >
                <IconButton size="small" onClick={() => setDrawerOpen(true)}>
                  <MenuIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>
      <NavDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </>
  );
}

export default Navbar;
