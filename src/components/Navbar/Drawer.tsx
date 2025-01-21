"use client";

import {
  Box,
  Button,
  MenuItem,
  Stack,
  SwipeableDrawer,
  TextField,
  Typography,
} from "@mui/material";
import { routes } from "./routes";
import { Link } from "@/i18n/routing";

import ActiveLink from "../ActiveLink";
import { language } from ".";

function NavDrawer({ open, setOpen }: Props) {
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
        {routes.map(({ name, path, icon }) => (
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
        <TextField variant="standard" select fullWidth>
          {language.map((lang) => (
            <MenuItem
              key={lang.id}
              sx={{
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              <Box
                component={Link}
                href={"/"}
                locale={lang.name}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={1}
              >
                <img src={""} height={"15px"} width={"30px"} />
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
      </Stack>
    </SwipeableDrawer>
  );
}

type Props = {
  setOpen: (state: boolean) => void;
  open: boolean;
};

export default NavDrawer;
