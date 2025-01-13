import { api } from "@/constants/api";
import { TeamPageGetRoot } from "@/types/request/team";
import { fetchFrom } from "@/utils/helper/fetchFrom";

async function getTeamPageData() {
  const res = await fetchFrom<TeamPageGetRoot>(api`team`);
  return res;
}

export default getTeamPageData;
