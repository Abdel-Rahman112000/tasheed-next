import { Box, Container, Stack } from "@mui/material";
import IntroSection from "./components/intro";
import ProjectCard from "./components/project-card";
import GetProjectsPageData, {
  GetProjectsPageIntroData,
} from "@/utils/api/get/projects-page";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await GetProjectsPageData();

  return {
    title: data?.projects[0]?.seo?.title,
    description: data?.projects[0]?.seo?.description,
    openGraph: {
      images: data?.projects[0]?.media[0].original_url,
    },
  };
}
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
