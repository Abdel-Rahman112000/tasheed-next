import { Box, Typography } from "@mui/material";
import KeysTable from "./KeysTable";
import { WithJobProps } from "../page";

function MainJobDetails({ job }: WithJobProps) {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        {job.title}
      </Typography>
      <KeysTable job={job} />
    </Box>
  );
}

export default MainJobDetails;
