import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import GridImagesView from "../grid-imges-view";
import { WithAboutProps } from "../../page";

function OurGallery({ about }: WithAboutProps) {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2} alignItems="center" mb={3}>
          <Typography variant="h2">OUR GALLERY</Typography>
          <Divider
            flexItem
            sx={{
              flexGrow: 1,
              borderColor: "text.primary",
              height: "0px",
              alignSelf: "unset",
            }}
          />
        </Stack>
        <GridImagesView about={about} />
      </Container>
    </Box>
  );
}

export default OurGallery;
