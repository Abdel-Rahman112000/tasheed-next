import { Box, Container, Grid, Stack } from "@mui/material";
import LeftImage from "./LeftImage";
import AboutContent from "./AboutContent";
import { HomePageGetRequestRoot } from "@/types/request/home";

function AboutUs({ data: { about } }: Props) {
  const aboutData = about[0];
  return (
    <Box>
      <Container maxWidth="xl">
        <Stack>
          <Grid container spacing={4}>
            <LeftImage about={aboutData} />
            <AboutContent about={aboutData} />
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

type Props = {
  data: HomePageGetRequestRoot;
};

export default AboutUs;
