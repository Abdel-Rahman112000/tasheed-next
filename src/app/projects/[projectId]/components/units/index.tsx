import { Container, Divider, Stack, Typography } from "@mui/material";
import Slider from "./Slider";
import { Project } from "@/types/common/Project";
import Location from "../location";

function Units({ project }: Props) {
  return (
    <Stack spacing={4}>
      <div>
        <Container maxWidth={"xl"}>
          <Stack spacing={4}>
            <Divider sx={{ width: 0.2 }} />
            <Typography variant="h2">PROJECT UNITS</Typography>
            <Divider sx={{ width: 0.5 }} />
          </Stack>
        </Container>
      </div>
      {project.units && <Slider units={project.units} />}
    </Stack>
  );
}

type Props = {
  project: Project;
};

export default Units;
