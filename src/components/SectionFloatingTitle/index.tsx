import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

function SectionFloatingTitle({ title, children }: Props) {
  return (
    <div style={{ position: "relative" }}>
      <Stack bgcolor={"background.paper"}>
        <div>
          <Typography
            variant="h2"
            sx={{ mt: "-0.5em", zIndex: 5, position: "relative" }}
            textAlign={"center"}
          >
            {title}
          </Typography>
        </div>
        <Box pt={3} pb={6}>
          {children}
        </Box>
      </Stack>
    </div>
  );
}

type Props = { children?: ReactNode; title: ReactNode };

export type SectionFloatingTitleProps = Props;

export default SectionFloatingTitle;
