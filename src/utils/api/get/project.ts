import { api } from "@/constants/api";
import { Project } from "@/types/common/Project";
import {
  ProjectGetRequestRoot,
  ProjectPageGetRequestRoot,
  ProjectPageIntroGetRequestRoot,
} from "@/types/request/project";
import { fetchFrom } from "@/utils/helper/fetchFrom";

export async function GetProject(
  projectId: string | number
): Promise<ProjectGetRequestRoot | undefined> {
  try {
    const res = await fetchFrom<ProjectGetRequestRoot>(
      api`project/${projectId}`,
      { cache: "no-cache" }
    );
    return res || undefined;
  } catch (error) {
    return undefined;
  }
}

export default GetProject;
