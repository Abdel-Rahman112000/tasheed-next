import { api } from "@/constants/api";
import axios from "axios";
import { serialize } from "object-to-formdata";

export const sendJobApplication = (dto: SendJobApplicationType) => {
  return axios.post(api`apply-job`, serialize(dto));
};
export type SendJobApplicationType = {
  full_name: string;
  email: string;
  phone: string;
  linked_in: string;
  job_id: string | number;
  "birth-date": string;
  file: File;
};
