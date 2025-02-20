import LeftImage from "@/app/[locale]/(root)/_sections/about-us/LeftImage";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { PropsBlogType } from "../BlogsCeoCard";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";

function BlogRight({ reversed, member }: PropsBlogType) {
  return (
    <Box sx={{ my: 20 }}>
      <Container maxWidth="xl">
        <Stack>
          <Grid container spacing={15} alignItems={"center"}>
            <Grid item md={6}>
              <Typography variant="h4" sx={{ mb: 8 }}>
                {member?.title}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "18px" }}>
                {member?.description}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <img
                style={{ ...IMAGE_FIT_STYLES }}
                src={member?.media[0]?.original_url}
                alt=""
              />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default BlogRight;
