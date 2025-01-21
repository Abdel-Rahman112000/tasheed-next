import { Button, Chip, Stack, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaidIcon from "@mui/icons-material/Paid";

import { Job } from "@/types/request/job";
import { Link } from "@/i18n/routing";

function JobCard({ job }: Props) {
  return (
    <Stack direction="row" gap={2} py={2}>
      <Stack spacing={1.5} flexGrow={1}>
        <Typography variant="h4" fontWeight={300}>
          {job.title}
        </Typography>
        <Typography variant="body1">{job.subtitle}</Typography>
        <Stack direction="row" gap={1} flexWrap={"wrap"}>
          {job.location && (
            <Chip
              color="primary"
              size="small"
              label={job.location}
              icon={<LocationOnIcon />}
            />
          )}
          {job.job_type && (
            <Chip
              color="primary"
              size="small"
              label={job.job_type}
              icon={<AccessTimeIcon />}
            />
          )}
          {job.salary && (
            <Chip
              color="primary"
              size="small"
              label={job.salary}
              icon={<PaidIcon />}
            />
          )}
        </Stack>
      </Stack>
      <span>
        <Button endIcon={<NorthEastIcon fontSize="large" />}>
          <Typography
            variant="h5"
            fontWeight={500}
            textTransform={"none"}
            component={Link}
            href={`/careers/${job.id}`}
          >
            Apply
          </Typography>
        </Button>
      </span>
    </Stack>
  );
}

type Props = {
  job: Job;
};

export default JobCard;
