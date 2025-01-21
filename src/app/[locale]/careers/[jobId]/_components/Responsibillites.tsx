import { Box, Typography } from "@mui/material";
import { WithJobProps } from "../page";

function JobResponsibillites({ job }: WithJobProps) {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Job Responsibilities
      </Typography>
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: job.responsibilities }}
      />
    </Box>
  );
}

export default JobResponsibillites;
