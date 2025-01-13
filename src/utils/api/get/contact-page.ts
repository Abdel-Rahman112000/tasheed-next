import { api } from "@/constants/api";
import { ContactGetRoot } from "@/types/request/contact";
import { fetchFrom } from "@/utils/helper/fetchFrom";

async function getContactPageData() {
  const res = await fetchFrom<ContactGetRoot>(api`contact`);
  return res?.contact;
}

export default getContactPageData;
