import { api } from "@/constants/api";
import { fetchFrom } from "@/utils/helper/fetchFrom";

async function getBlogsType(id: string) {
  const res = await fetchFrom(api`blogs?type=${id}`);
  console.log(res);
  return res || null;
}

export default getBlogsType;
