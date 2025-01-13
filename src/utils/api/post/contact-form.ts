import { api } from "@/constants/api";
import axios from "axios";

export const sendContactForm = (dto: SendContactFormDto) => {
  return axios.post(api`message`, dto);
};
export type SendContactFormDto = {
  name: string;
  email: string;
  phone: string;
  country: string;
  company_name: string;
  interested_in: string;
  message: string;
  from_project?: string;
};
