import { Box, Divider, Stack, Typography } from "@mui/material";
import { WithUnitProps } from "../../../Unit";

function Description({ unit }: WithUnitProps) {
  return (
    <Stack>
      <Typography variant="h2" gutterBottom>
        Description
      </Typography>
      <Divider sx={{ borderColor: "text.primary", mb: 4 }} />
      <Typography variant="body1">{unit.description}</Typography>
    </Stack>
  );
}

export default Description;
