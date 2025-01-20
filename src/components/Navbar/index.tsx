"use client";

import Logo from "@/assets/images/logo-sm.png";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import NavLinks from "./NavLinks";
import { $Heights } from "@/constants/sizes";
import RoundedButton from "../RoundedButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect, useCallback } from "react";
import NavDrawer from "./Drawer";
import { useAnimation, motion } from "framer-motion";
import Link from "next/link";
import i18n from "@/i18n/i18n";
import { usePathname } from "next/navigation";
import { revalidateAction } from "@/action/revaildateAction";

const languages = [
  { code: "ar", label: "عربي" },
  { code: "en", label: "English" },
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
  const path = usePathname();
  console.log("path", path);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dynamicZIndex, setDynamicZIndex] = useState(1000);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <Grid container alignItems={"center"} sx={{ height: 1 }}>
              {/* Logo Container */}
              <Grid item md={4} lg={2.5} flexGrow={1}>
                <img src={Logo.src} height={42} alt="Tasheed" />
              </Grid>
              {/* NavLinks Container */}
              <Grid
                item
                xs={0}
                md={8}
                lg={7}
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
                lg={2.5}
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
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    Lang
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    sx={{ zIndex: "12000000000000000000000" }}
                  >
                    {languages.map((language) => (
                      <MenuItem
                        key={language.code}
                        onClick={() => {
                          i18n.changeLanguage(language.code);
                          handleClose();
                          revalidateAction(path);
                        }}
                      >
                        {language.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
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
