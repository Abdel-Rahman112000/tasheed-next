import AspectRatio from "@/components/AspectRatio";
import { Box, Container, Stack } from "@mui/material";
import ProjectDetails from "./components/project-details";
import GridImagesView from "./components/grid-imges-view";
import Units from "./components/units";
import MediaComponent from "@/components/video-player";
import GetProject from "@/utils/api/get/project";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { Project } from "@/types/common/Project";
import Location from "./components/location";
import KeayFeaturesContainer from "./components/key-features";
import RenderMedia from "@/components/RenderMedia";

async function ProjectPage({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  const data = await GetProject(projectId);

  if (!data)
    return (
      <>
        {projectId} {JSON.stringify(data)}
      </>
    );
  const { project, cover } = data;
  return (
    <Stack spacing={12}>
      <AspectRatio ratio={21 / 9}>
        {cover?.media?.[0] && <RenderMedia media={cover.media[0]} />}
      </AspectRatio>
      <Box>
        <Container maxWidth="xl">
          <ProjectDetails project={project} />
        </Container>
      </Box>
      <Box>
        <Container maxWidth="xl">
          <GridImagesView project={project} />
        </Container>
      </Box>
      {project.units && project.units.length && (
        <Box>
          <Container maxWidth="xl">
            <Units project={project} />
          </Container>
        </Box>
      )}
      <Box>
        <Container maxWidth="xl">
          <Location project={project} />
        </Container>
      </Box>

      {project.features && project.features.length && (
        <Box>
          <KeayFeaturesContainer project={project} />
        </Box>
      )}
    </Stack>
  );
}

export type WithProjectProps = {
  project: Project;
};

export default ProjectPage;
