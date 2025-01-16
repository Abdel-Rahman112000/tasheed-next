import { api } from "@/constants/api";
import { About, AboutPageGetRoot } from "@/types/request/about";
import { fetchFrom } from "@/utils/helper/fetchFrom";

async function getAboutPageData(): Promise<About | null> {
  const res = await fetchFrom<AboutPageGetRoot>(api`about`);
  return res?.about[0] || null;
}

export default getAboutPageData;
