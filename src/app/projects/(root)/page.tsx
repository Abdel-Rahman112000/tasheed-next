import { Box, Container, Stack } from "@mui/material";
import IntroSection from "./components/intro";
import ProjectCard from "./components/project-card";
import GetProjectsPageData, {
  GetProjectsPageIntroData,
} from "@/utils/api/get/projects-page";

async function ProjectsPage() {
  const data = await GetProjectsPageData();
  const intro = await GetProjectsPageIntroData();

  if (!data || !intro) return <></>;
  const { project_page } = intro;

  return (
    <Stack spacing={8}>
      <IntroSection data={project_page} />
      <Box>
        <Container maxWidth="xl">
          <Stack spacing={6}>
            {data.projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                reversed={Boolean(index % 2)}
              />
            ))}
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}

export default ProjectsPage;
