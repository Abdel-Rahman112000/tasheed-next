import { api } from "@/constants/api";
import { Unit } from "@/types/common/Project";
import { UnitGetRequestRoot } from "@/types/request/project";
import { fetchFrom } from "@/utils/helper/fetchFrom";

export async function getUnit(
  unitId: string | number
): Promise<Unit | undefined> {
  const res = await fetchFrom<UnitGetRequestRoot>(api`project/unit/${unitId}`, {
    cache: "no-cache",
  });
  return res?.project_unit || undefined;
}

export default getUnit;
