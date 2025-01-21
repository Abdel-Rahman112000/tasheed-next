import RotatedTitleInSide from "@/components/RotatedTitleInSide";
import { Container, Stack } from "@mui/material";
import MainJobDetails from "./_components/MainJobDetails";
import JobDescription from "./_components/Description";
import JobResponsibillites from "./_components/Responsibillites";
import ApplyForm from "./_components/ApplyForm";
import { Job } from "@/types/request/job";
import getJob from "@/utils/api/get/job";

async function JobPage({ params: { jobId } }: { params: { jobId: string } }) {
  const job = await getJob(jobId);

  if (!job) return <></>;

  return (
    <Container maxWidth="xl">
      <RotatedTitleInSide title="CAREERS">
        <Stack spacing={8}>
          <MainJobDetails job={job} />
          <JobDescription job={job} />
          <JobResponsibillites job={job} />
          <ApplyForm job={job} />
        </Stack>
      </RotatedTitleInSide>
    </Container>
  );
}

export type WithJobProps = {
  job: Job;
};

export default JobPage;
