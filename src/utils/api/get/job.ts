import { api } from "@/constants/api";
import { Job } from "@/types/request/job";
import { fetchFrom } from "@/utils/helper/fetchFrom";

async function getJob(jobId: string | number) {
  const res = await fetchFrom<{ job: Job }>(api`job/${jobId}`);
  return res?.job;
}

export default getJob;
