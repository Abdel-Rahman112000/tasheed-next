import { Box, Typography } from "@mui/material";
import { WithJobProps } from "../page";

function JobDescription({ job }: WithJobProps) {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Job Description
      </Typography>
      <Typography
        variant="body1"
        component="div"
        dangerouslySetInnerHTML={{ __html: job.description }}
      />
    </Box>
  );
}

export default JobDescription;
