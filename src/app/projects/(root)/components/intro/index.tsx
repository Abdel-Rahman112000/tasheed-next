import RenderMedia from "@/components/RenderMedia";
import { ProjectPage } from "@/types/request/project";
import { Container, Stack, Typography } from "@mui/material";

function IntroSection({ data }: Props) {
  return (
    <Stack
      sx={{
        position: "relative",
        zIndex: 100,
        width: 1,
        height: { xs: 600, lg: "80vh" },
      }}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={12}
      bgcolor={"background.default"}
    >
      <div
        style={{
          opacity: 0.4,
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      >
        {data.media[0] && <RenderMedia media={data.media[0]} />}
      </div>
      <Stack sx={{ zIndex: 10, pointerEvents: "none" }} spacing={4}>
        <Container maxWidth="md">
          <Typography variant="h2" textAlign={"center"}>
            OUR
            <br />
            PROJECTS
          </Typography>
          <Typography
            variant="h6"
            component={"div"}
            fontWeight={500}
            textAlign={"center"}
            dangerouslySetInnerHTML={{ __html: data.description || "" }}
          ></Typography>
        </Container>
      </Stack>
    </Stack>
  );
}

type Props = {
  data: ProjectPage;
};

export default IntroSection;
