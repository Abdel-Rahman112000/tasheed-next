import { api } from "@/constants/api";
import { BlogGetRoot, BlogsGetRoot } from "@/types/request/blog";
import { fetchFrom } from "@/utils/helper/fetchFrom";

export async function getBlogs() {
  const res = await fetchFrom<BlogsGetRoot>(api`blogs`);
  return res;
}

export async function getBlog(blogId: string | number) {
  const res = await fetchFrom<BlogGetRoot>(api`blog/${blogId}`);
  return res?.blog;
}
