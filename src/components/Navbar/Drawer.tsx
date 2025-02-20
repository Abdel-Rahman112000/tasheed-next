"use client";

import { Box, Button, Stack, SwipeableDrawer } from "@mui/material";
import { useRoutes } from "./routes";
import { Link, usePathname } from "@/i18n/routing";
import Gb from "@/assets/icons/gb.svg";
import Eg from "@/assets/icons/eg.svg";
import ActiveLink from "../ActiveLink";
import Image from "next/image";
import { useLocale } from "next-intl";

function NavDrawer({ open, setOpen }: Props) {
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <SwipeableDrawer
      anchor={"right"}
      onClose={() => {
        setOpen(false);
      }}
      onOpen={() => {
        setOpen(true);
      }}
      open={open}
      PaperProps={{ sx: { backgroundColor: "background.default" } }}
    >
      <Stack width={"280px"} p={4} py={8} spacing={2}>
        {useRoutes().map(({ name, path, icon }) => (
          <ActiveLink
            key={`${name} - ${path}`}
            path={path}
            render={({ isActive, linkProps }) => (
              <Button
                fullWidth
                variant={isActive ? "contained" : "text"}
                color={isActive ? "primary" : undefined}
                size="large"
                component={Link}
                //startIcon={icon}
                sx={{ justifyContent: "center" }}
                onClick={() => setOpen(false)}
                {...(linkProps as {})}
              >
                {name}
              </Button>
            )}
          />
        ))}
        <Box>
          {locale == "ar" ? (
            <Link href={pathname} locale="en">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                <Image
                  src={Gb}
                  alt="english"
                  width={30}
                  height={30}
                  className="min-w-[30px]"
                />
                En
              </Box>
            </Link>
          ) : (
            <Link href={pathname} locale="ar">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                <Image
                  src={Eg}
                  alt="Arabic"
                  width={30}
                  height={30}
                  className="min-w-[30px]"
                />
                Ar
              </Box>
            </Link>
          )}
        </Box>
      </Stack>
    </SwipeableDrawer>
  );
}

type Props = {
  setOpen: (state: boolean) => void;
  open: boolean;
};

export default NavDrawer;
