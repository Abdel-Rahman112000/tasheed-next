import { Button, Stack } from "@mui/material";
import { RouteType, useRoutes } from "./routes";
import { Link } from "@/i18n/routing";

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
      {useRoutes()
        .filter((x: RouteType) => x.isPrimary)
        .map(({ name, path }: { name: string; path: string }) => (
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
