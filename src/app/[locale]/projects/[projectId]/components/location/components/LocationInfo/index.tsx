import { Stack, Typography } from "@mui/material";
import IconsContainer from "../IconsContainer";
import { WithProjectProps } from "../../../../page";

function LocationInfo({ project }: WithProjectProps) {
  return (
    <div style={{ height: "100%" }}>
      <Stack height={1}>
        <Typography variant="h2" lineHeight={1.4} gutterBottom>
          Where are we located?
        </Typography>
        <Typography flexGrow={1}>{project.location}</Typography>
        {/* <Typography variant="h5" fontWeight={300}>
          {project.??}
        </Typography> */}
        <IconsContainer project={project} />
      </Stack>
    </div>
  );
}

export default LocationInfo;
