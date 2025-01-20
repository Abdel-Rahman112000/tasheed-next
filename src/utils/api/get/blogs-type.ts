import { api } from "@/constants/api";
import { BlogType } from "@/types/request/blog";
import { fetchFrom } from "@/utils/helper/fetchFrom";

export async function getBlogsType(id: string) {
  const res = await fetchFrom<BlogType>(api`blogs?type=${id}`);
  return res;
}
