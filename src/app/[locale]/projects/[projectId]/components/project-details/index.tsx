import { Grid, Typography } from "@mui/material";
import KeysTable from "./KeysTable";
import { Project } from "@/types/common/Project";

function ProjectDetails({ project }: Props) {
  return (
    <Grid container columnSpacing={12} rowSpacing={4}>
      <Grid item xs={12} md={6} lg={7}>
        <Typography variant="h1" gutterBottom>
          {project.title}
        </Typography>
        <Typography
          variant="body1"
          component={"div"}
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <KeysTable project={project} />
      </Grid>
    </Grid>
  );
}

type Props = {
  project: Project;
};

export default ProjectDetails;
