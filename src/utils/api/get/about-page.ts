import { cookies, headers } from "next/headers";
import { api } from "@/constants/api";
import { About, AboutPageGetRoot } from "@/types/request/about";
import { fetchFrom } from "@/utils/helper/fetchFrom";

async function getAboutPageData(): Promise<About | null> {
  const cookieStore = cookies();
  const userLanguage = cookieStore.get("i18next")?.value || "en";
  const res = await fetchFrom<AboutPageGetRoot>(api`about`, {
    headers: { lang: userLanguage },
  });
  return res?.about[0] || null;
}

export default getAboutPageData;
