import { api } from "@/constants/api";
import { CareersGetRoot } from "@/types/request/job";
import { fetchFrom } from "@/utils/helper/fetchFrom";

async function getCareersPageData() {
  const res = await fetchFrom<CareersGetRoot>(api`careers`);
  return res?.careers;
}

export default getCareersPageData;
