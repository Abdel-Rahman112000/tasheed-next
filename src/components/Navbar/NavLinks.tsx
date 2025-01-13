import { Button, Stack } from "@mui/material";
import { routes } from "./routes";
import Link from "next/link";

function NavLinks() {
  return (
    <Stack
      component={"ul"}
      sx={{ li: { listStyle: "none" } }}
      direction={"row"}
      justifyContent={{ xs: "end", lg: "center" }}
      alignItems={"center"}
      spacing={{
        xs: 1,
        md: 2,
        lg: 4,
        xl: 8,
      }}
    >
      {routes
        .filter((x) => x.isPrimary)
        .map(({ name, path }) => (
          <Button
            key={`${name}${path}`}
            component={Link}
            href={path}
            sx={{
              "&:hover, &.active": {
                color: "text.primary",
              },
            }}
          >
            {name}
          </Button>
        ))}
    </Stack>
  );
}

export default NavLinks;
