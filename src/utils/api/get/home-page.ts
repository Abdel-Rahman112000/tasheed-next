import { api } from "@/constants/api";
import { HomePageGetRequestRoot } from "@/types/request/home";
import { fetchFrom } from "@/utils/helper/fetchFrom";

async function GetHomePageData() {
  const res = await fetchFrom<HomePageGetRequestRoot>(api`home`);

  if (!res) throw new Error("No Data found in response");

  return res;
}

export default GetHomePageData;
