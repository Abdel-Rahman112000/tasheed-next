import { api } from "@/constants/api";
import {
  ProjectPageGetRequestRoot,
  ProjectPageIntroGetRequestRoot,
} from "@/types/request/project";
import { fetchFrom } from "@/utils/helper/fetchFrom";

export async function GetProjectsPageData() {
  const res = await fetchFrom<ProjectPageGetRequestRoot>(api`projects`);
  return res;
}

export async function GetProjectsPageIntroData() {
  const res = await fetchFrom<ProjectPageIntroGetRequestRoot>(
    api`project-page`,
    { cache: "no-cache" }
  );
  return res;
}

export default GetProjectsPageData;
